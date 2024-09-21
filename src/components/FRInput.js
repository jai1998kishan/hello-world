import React from "react";

// function FRInput() {
//   console.log("FRInput is render...");
//   return (
//     <>
//       <input type="text"  />
//     </>
//   );
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
});

export default FRInput;
