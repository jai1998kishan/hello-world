// event handling in class component

import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.warn("Clicked the button...");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
