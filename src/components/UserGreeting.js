import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: true,
    };
  }
  render() {
    //Short circuit operator
    return this.state.isLoggedin && <div>Welcome Jai.4</div>;

    //==========================================================

    //Ternary conditional operator
    // return this.state.isLoggedin ? (
    //   <div>Welcome Jai.3...</div>
    // ) : (
    //   <div>Welcome Guest.3...</div>
    // );

    //===========================================================
    //element variable
    // let message;
    // if (this.state.isLoggedin) {
    //   message = <div>Welcome Jai...2..</div>;
    // } else {
    //   message = <div>Welcome Guest..2</div>;
    // }
    // return <div>{message}</div>;

    //==========================================================
    //if/else
    // if (this.state.isLoggedin) {
    //   return <div>Welcome Jai..1..</div>;
    // } else {
    //   return <div>Welcome Guest..1..</div>;
    // }

    // return (
    //   <>
    //     <div>Welcome Jai...</div>
    //     <div>Welcome Guest...</div>
    //   </>
    // );
  }
}

export default UserGreeting;
