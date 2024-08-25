import React from "react";

//using jsx
// const Hello = () => {
//   return (
//     <div>
//       <h1>Hello Jai...</h1>
//     </div>
//   );
// };

//without using jsx
const Hello = () => {
  return React.createElement(
    "div",
    { id: "helo", className: "dummyClass" },
    React.createElement("h1", null, "Hello mantsha...")
  );
};

export default Hello;
