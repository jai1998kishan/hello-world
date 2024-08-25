// event handling in functional component

import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.warn("button click...");
  }
  return (
    <div>
      {/* we are passing clickHandler not executing */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
