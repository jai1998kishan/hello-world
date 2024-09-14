import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export default class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mahi",
    };
    console.log("lifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecyclA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "moto",
    });
  };

  render() {
    console.log("lifecycleA render");
    return (
      <>
        <div>lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </>
    );
  }
}
