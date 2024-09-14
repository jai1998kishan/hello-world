import React, { Component } from "react";

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Mahi",
    };
    console.log("lifecycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecyclB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycleB render");
    return <>lifecycle B</>;
  }
}
