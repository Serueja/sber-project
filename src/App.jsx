import React from "react";
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";

import "./App.css";
import { TaskList } from './pages/TaskList';
import Month_first from "./components/Month/Month_first";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseHistory from 'react-router-dom';


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    console.log("initAssistant");
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};



export class App extends React.Component {

  
  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      notes: [],
    }

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      if(event.type === "smart_app_data") {
        const { smart_app_data } = event;
        console.log(smart_app_data);
        console.log("here i should call next console log");
        if(smart_app_data.type === "reset") {
          console.log("returning back on reset function");
          //history.push("/")
        }
      }
      console.log(`assistant.on(data)`, event);

      //this.dispatchAssistantAction(action);
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  getStateForAssistant () {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'add_note':
          return this.add_note(action);

        case 'done_note':
          return this.done_note(action);

        case 'delete_note':
          return this.delete_note(action);

        default:
          throw new Error();
      }
    }
  }

  add_note (action) {
    console.log('add_note', action);
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id:        Math.random().toString(36).substring(7),
          title:     action.note,
          completed: false,
        },
      ],
    })
  }

  done_note (action) {
    console.log('done_note', action);
    this.setState({
      notes: this.state.notes.map((note) =>
        (note.id === action.id)
        ? { ...note, completed: !note.completed }
        : note
      ),
    })
  }

  delete_note (action) {
    console.log('delete_note', action);
    this.setState({
      notes: this.state.notes.filter(({ id }) => id !== action.id),
    })
  }

  render() {
    console.log('render');
    return (
      <>
      <BrowserRouter>
                <Routes>
                <Route exact path="/"
                        element={< TaskList
                          items  = {this.state.notes}
                          onAdd  = {(note) => { this.add_note({ type: "add_note", note }); }}
                          onDone = {(note) => { this.done_note({ type: "done_note", id: note.id }) }}
                        /> } />

                    <Route  path="/:id"
                        element={<Month_first />} />      
                </Routes>
    </BrowserRouter>
     
      </>
    )
  }


}

