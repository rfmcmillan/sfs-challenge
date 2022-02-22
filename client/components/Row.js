import React from "react";
import { PropTypes } from "prop-types";

const Row = (props) => {
  const { debt, handleCheck } = props;

  return (
    <tr data-testid="row-test">
      <td className="checkbox-cell" align="center">
        <input
          data-testid={`checkbox-${debt.id}`}
          id={debt.id}
          name="balance"
          onClick={handleCheck}
          type="checkbox"
          value={debt.balance}
        />
      </td>
      <td className="cell creditor-cell" data-testid={`creditor-${debt.id}`}>
        {debt.creditorName}
      </td>
      <td
        className="cell first-name-cell"
        data-testid={`first-name-${debt.id}`}
      >
        {debt.firstName}
      </td>
      <td className="cell last-name-cell" data-testid={`last-name-${debt.id}`}>
        {debt.lastName}
      </td>
      <td
        className="cell min-pay-cell"
        data-testid={`min-pay-${debt.id}`}
        align="right"
      >
        {`${debt.minPaymentPercentage.toFixed(2)}%`}
      </td>
      <td
        className="cell balance-cell"
        data-testid={`balance-${debt.id}`}
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
