import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clcikHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    console.log("FRParentInput is render...");
    return (
      <>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clcikHandler}>Focus Input</button>
      </>
    );
  }
}

export default FRParentInput;
