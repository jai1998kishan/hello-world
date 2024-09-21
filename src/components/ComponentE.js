import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./UserContext";

export default class ComponentE extends Component {
  //method 2
  static contextType = UserContext;

  render() {
    return (
      <>
        Component E context {this.context}
        <ComponentF />
      </>
    );
  }
}

//method 1
// ComponentE.contextType = UserContext;
