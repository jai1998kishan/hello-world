import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* child accessing the parent method  */}
      {/* <button onClick={props.greetHandler}>Greet parent</button> */}

      {/* passing the props from child to parent component  */}
      <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </div>
  );
}

export default ChildComponent;
