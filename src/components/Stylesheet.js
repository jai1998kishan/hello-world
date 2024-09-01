import React from "react";
import "./myStyles.css";

// function Stylesheet() {
//   return (
//     <>
//       <h1 className="primary">This is style</h1>
//     </>
//   );
// }

//=========================================================
// using conditional

// function Stylesheet(props) {
//   let className = props.primary ? "primary" : "";
//   return (
//     <>
//       <h1 className={className}>This is style</h1>
//     </>
//   );
// }

//=========================================================
// for multiple classes

// function Stylesheet() {
//   return (
//     <>
//       <h1 className="primary font-xl">This is style</h1>
//     </>
//   );
// }

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";
  return (
    <>
      <h1 className={`${className} font-xl`}>This is style</h1>
    </>
  );
}

export default Stylesheet;
