import React from "react";
import axios from 'axios';
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";

import "./App.css";
import { TaskList } from './pages/TaskList';
import Month_first from "./components/Month/Month_first";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseHistory from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    console.log("initAssistant");
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  axios.get("https://django-heroku-backend.herokuapp.com/api/prognosis/1")
  return createAssistant({ getState });
};



class App_ extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      notes: [],
      joy:false
    }

    this.assistant = initializeAssistant(() => this.getStateForAssistant() );
    this.assistant.on("data", (event/*: any*/) => {
      if(event.type === "smart_app_data") {
        const { smart_app_data } = event;
        console.log(smart_app_data);
        console.log("here i should call next console log");
        if(smart_app_data.type === "reset") {
          console.log("returning back on reset function");
          this.props.navigate("/")
        }
        if(smart_app_data.type==="routing"){
          this.props.navigate("/")
          console.log("routing function is called")
          this.props.navigate(`/${smart_app_data.id}`)
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

  render() {
    console.log('render');
    return (
      <>
                <Routes>
                <Route exact path="/"
                        element={< TaskList
                        /> } />

                    <Route  path="/:id"
                        element={<Month_first />} />      
                </Routes>

      </>
    )
  }


}

export const App = (props) => (
  <App_ navigate={useNavigate()} />
);
