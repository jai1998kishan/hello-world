import React from "react";

export default function Columns() {
  return (
    <>
      <td>name</td>
      <td>Mahi</td>
    </>
  );
}

// export default function Columns() {
//   const items = [{ id: 101, title: "hello moto" }];
//   return (
//     <React.Fragment>
//       {items.map((item) => (
//         <React.Fragment key={item.id}>
//           <h1>Title</h1>
//           <p>{item.title}</p>
//         </React.Fragment>
//       ))}
//       <td>name</td>
//       <td>Mahi</td>
//     </React.Fragment>
//   );
// }
