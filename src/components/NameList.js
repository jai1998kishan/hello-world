import React from "react";
// import Person from "./Person"; //for using array of object

//method 1

// function NameList() {
//   const names = ["moto", "mahi", "mantsha"];
//   return (
//     <>
//       {names.map((name) => (
//         <h2>{name}</h2>
//       ))}
//     </>
//   );
// }

//it showing one error
/*
NameList.js:7 Warning: Each child in a list should have a unique "key" prop.
*/
//below is the solution method 2

//======================================================
// method 2

function NameList() {
  const names = ["moto", "mahi", "mantsha", "mahi"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <>{nameList}</>;
}

//=======================================================
//method 3

// function NameList() {
//   const names = ["moto", "mahi", "mantsha"];
//   const nameList = names.map((name) => <h2>{name}</h2>);
//   return <>{nameList}</>;
// }

//======================================================

// function NameList() {
//   const persons = [
//     { id: 1, name: "moto", age: 22, skill: "React" },
//     { id: 2, name: "mahi", age: 23, skill: "Javascript" },
//     { id: 3, name: "mantsha", age: 21, skill: "Java" },
//   ];

//   const personsList = persons.map((person) => (
//     <Person key={person.id} person={person} />
//   ));
//   return <>{personsList}</>;
// }

export default NameList;
