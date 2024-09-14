import React from "react";

function MemoComp({ name }) {
  console.log("rendering Memo Component");
  return (
    <>
      <h1>{name}</h1>
    </>
  );
}

export default React.memo(MemoComp); //React.memo similer to purecomponent it help to avoid unnecessary render.
