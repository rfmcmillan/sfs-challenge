import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const TotalRow = (props) => {
  const { debts, selectedDebts } = props;
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const total = selectedDebts.reduce((total, currDebt) => {
      return (total += currDebt);
    }, 0);
    setTotalBalance(total);
  }, [selectedDebts]);

  return (
    <tr>
      <td>Total</td>
      <td className="cell">{totalBalance}</td>
    </tr>
  );
};

TotalRow.propTypes = {
  debts: PropTypes.array,
};

export default TotalRow;
