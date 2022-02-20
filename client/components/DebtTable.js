import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TotalRow from "./TotalRow";

const DebtTable = (props) => {
  const { debts } = props;
  const [selectedDebts, setSelectedDebts] = useState([]);

  const handleCheck = (event) => {
    if (event.target.checked === true) {
      setSelectedDebts([
        ...selectedDebts,
        { id: event.target.id, balance: parseInt(event.target.value) },
      ]);
    } else {
      const filteredDebts = selectedDebts.filter((debt) => {
        return debt.id !== event.target.id;
      });
      setSelectedDebts(filteredDebts);
    }
  };

  return (
    <div>
      <table id="debt-table" data-testid="debt-table-test">
        <thead>
          <tr>
            <th> </th>
            <th className="header-cell" data-testid="header-cell-test">
              Creditor
            </th>
            <th className="header-cell" data-testid="header-cell-test">
              First Name
            </th>
            <th className="header-cell" data-testid="header-cell-test">
              Last Name
            </th>
            <th className="header-cell" data-testid="header-cell-test">
              Min Pay%
            </th>
            <th className="header-cell" data-testid="header-cell-test">
              Balance
            </th>
          </tr>
        </thead>
        <tbody>
          {debts.map((debt) => {
            return <Row key={debt.id} debt={debt} handleCheck={handleCheck} />;
          })}

          <TotalRow debts={debts} selectedDebts={selectedDebts} />
        </tbody>
      </table>
      <span>Total Row Count: {debts.length}</span>
      <span id="total-check-count">
        Total Check Count: {selectedDebts.length}
      </span>
    </div>
  );
};

DebtTable.propTypes = {
  debts: PropTypes.array,
};

export default DebtTable;
