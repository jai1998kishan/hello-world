import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };

    // method 3 = binding in a class contructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Goodbye!",
  //   });
  //   // console.log(this); //here this is undefined beacuse of this we need event bind in react if we don't use bind (this.clickHandler.bind(this)) on button
  // }

  //.............................................................

  // method 4 = using arrow function as a class properties
  clickHandler = () => {
    this.setState({
      message: "Goodbye!",
    });
  };

  /*
  
  method 1 = bind
  it create a fresh new event in every click of button that's way it not that good
  <button onClick={this.clickHandler.bind(this)}>Click</button> 



  method 2 = arrow function
  <button onClick={() => this.clickHandler()}>Click</button>


  method 3 = binding in a class contructor
  is the most use

  in constructor write this code
  this.clickHandler = this.clickHandler.bind(this);

  then use normal event click handler  <button onClick={this.clickHandler}>Click</button>


  method 4 = using arrow function as a class properties


  */

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* method 1 = binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* method 2 = arrow function */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
