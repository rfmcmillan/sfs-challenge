import React from "react";
import { PropTypes } from "prop-types";

const Row = (props) => {
  const { row, handleCheck } = props;

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={`balance-${row.id}`}
          name="balance"
          value={row.balance}
          onClick={handleCheck}
        />
      </td>
      <td className="cell" data-testid="creditor-name">
        {row.creditorName}
      </td>
      <td className="cell" data-testid="first-name">
        {row.firstName}
      </td>
      <td className="cell">{row.lastName}</td>
      <td className="cell">{row.minPaymentPercentage}</td>
      <td className="cell">{row.balance}</td>
    </tr>
  );
};

Row.propTypes = {
  row: PropTypes.object,
};

export default Row;
