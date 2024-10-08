import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    //create ref
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);

    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <>
        {/*--------------------------------------- use ref in input  */}
        <input type="text" placeholder="Enter Name" ref={this.inputRef} />
        <input type="text" placeholder="Enter Name" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default RefsDemo;
