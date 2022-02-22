import React from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TableHeader from "./TableHeader";

const DebtTable = (props) => {
  const { debts, handleCheck } = props;

  return (
    <table id="debt-table" data-testid="debt-table-test">
      <TableHeader />
      <tbody>
        {debts.map((debt, idx) => {
          return (
            <Row
              key={`${debt.id}-${idx}`}
              debt={debt}
              handleCheck={handleCheck}
            />
          );
        })}
      </tbody>
    </table>
  );
};

DebtTable.propTypes = {
  debts: PropTypes.array,
  handleCheck: PropTypes.func,
};

export default DebtTable;
