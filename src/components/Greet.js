import React from "react";

//function components

// function Greet() {
//   return <h1>Hello Moto</h1>;
// }

//============================================================
function Greet(props) {
  // props are immutable
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </>
  );
}
export default Greet;

//======================================================

// const Greet = (props) => {
//   // props are immutable
//   console.log(props);
//   return (
//     <>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}{" "}
//       </h1>
//       {props.children}
//     </>
//   );
// };
// export default Greet;

//===============================================================

//destructuring the props
//props is the object

//method 1

// const Greet = ({ name, heroName }) => {
//   // props are immutable
//   return (
//     <>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </>
//   );
// };
// export default Greet;

//..................................................................
// destructuring the props

// method 2

// const Greet = (props) => {
//   // props are immutable
//   const { name, heroName } = props;
//   return (
//     <>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </>
//   );
// };
// export default Greet;

//===============================================================

// it's a name export
// export const Greet = () => <h1>Hello Mahi...</h1>;
