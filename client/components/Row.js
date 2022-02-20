import React from "react";
import { PropTypes } from "prop-types";

const Row = (props) => {
  const { debt, handleCheck } = props;

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={debt.id}
          name="balance"
          value={debt.balance}
          onClick={handleCheck}
        />
      </td>
      <td className="cell" data-testid="creditor-name">
        {debt.creditorName}
      </td>
      <td className="cell" data-testid="first-name">
        {debt.firstName}
      </td>
      <td className="cell">{debt.lastName}</td>
      <td className="cell">{debt.minPaymentPercentage}</td>
      <td className="cell">{debt.balance}</td>
    </tr>
  );
};

Row.propTypes = {
  debt: PropTypes.object,
  handleCheck: PropTypes.func,
};

export default Row;
