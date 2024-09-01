import React from "react";

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <>
      <h1 style={heading}>Inline</h1>

      {/* regular stylesheet doesn't show error appStyles.css  */}
      <h1 className="error">Error</h1>

      {/* module stylesheet  show error appStyles.module.css   */}
      {/* <h1 className={styles.success}>Success</h1> */}
    </>
  );
}

export default Inline;
