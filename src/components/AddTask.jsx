import React from "react";

import "../App.css";


export class AddTask extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      note: '',
    }
  }

  render () {
    const { onAdd } = this.props;

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onAdd(this.state.note);
          this.setState({
            note: '',
          })
        }}
      >
       
      </form>
    )
  }

}

