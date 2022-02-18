import React from "react";
import { PropTypes } from "prop-types";

const DebtTable = (props) => {
  const { data } = props;
  console.log("🚀 ~ file: DebtTable.js ~ line 5 ~ DebtTable ~ data", data);

  return (
    <div>
      <table>
        <th data-testid="header-cell"></th>
        <th data-testid="header-cell"></th>
        <th data-testid="header-cell"></th>
        <th data-testid="header-cell"></th>
        <th data-testid="header-cell"></th>
      </table>
    </div>
  );
};

DebtTable.propTypes = {
  data: PropTypes.object,
};

export default DebtTable;
