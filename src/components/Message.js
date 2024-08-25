import React, { Component } from "react";

//class components

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor...",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank you for subscribing...",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subcribe</button>
      </>
    );
  }
}

export default Message;
