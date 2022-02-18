import React from "react";
import { PropTypes } from "prop-types";

const Row = (props) => {
  const { row } = props;

  return (
    <tr>
      <td>
        <input type="checkbox" name="name1" />
      </td>
      <td data-testid="creditor-name">{row.creditorName}</td>
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.minPaymentPercentage}</td>
      <td>{row.balance}</td>
    </tr>
  );
};

Row.propTypes = {
  row: PropTypes.object,
};

export default Row;
