import React from "react";
import Columns from "./Columns";

export default function Table() {
  return (
    <React.Fragment>
      <table border={2} cellPadding={10}>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
