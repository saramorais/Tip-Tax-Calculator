import React from "react";

function AmountBox(props) {

  return (
    <div className="amount-box">
      <ul>{props.amounts.map((amount) =>
        <li key={Math.random()}> {Number(amount).toFixed(2)} + </li>)}
      </ul>
    </div>
  )
}

export default AmountBox;