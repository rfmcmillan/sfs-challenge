import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const TotalRow = (props) => {
  const { selectedDebts } = props;
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const total = selectedDebts.reduce((total, currDebt) => {
      return (total += currDebt.balance);
    }, 0);
    setTotalBalance(total);
  }, [selectedDebts]);

  return (
    <tr id="total-row">
      <td id="total-title">Total</td>
      <td
        id="total-value"
        align="right"
        data-testid="total-value-test"
      >{`$${totalBalance.toLocaleString("en-US")}.00`}</td>
    </tr>
  );
};

TotalRow.propTypes = {
  selectedDebts: PropTypes.array,
};

export default TotalRow;
