import React from "react";
import { PropTypes } from "prop-types";

const Row = (props) => {
  const { debt, handleCheck } = props;

  return (
    <tr>
      <td className="checkbox-cell" align="center">
        <input
          data-testid={`checkbox-${debt.id}`}
          type="checkbox"
          id={debt.id}
          name="balance"
          value={debt.balance}
          onClick={handleCheck}
        />
      </td>
      <td className="cell creditor-cell" data-testid="creditor-name">
        {debt.creditorName}
      </td>
      <td className="cell first-name-cell" data-testid="first-name">
        {debt.firstName}
      </td>
      <td className="cell last-name-cell">{debt.lastName}</td>
      <td className="cell min-pay-cell" align="right">
        {`${debt.minPaymentPercentage.toFixed(2)}%`}
      </td>
      <td
        className="cell balance-cell"
        align="right"
      >{`${debt.balance.toLocaleString("en-US")}.00`}</td>
    </tr>
  );
};

Row.propTypes = {
  debt: PropTypes.object,
  handleCheck: PropTypes.func,
};

export default Row;
