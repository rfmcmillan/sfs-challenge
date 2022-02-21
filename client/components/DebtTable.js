import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TotalRow from "./TotalRow";

const DebtTable = (props) => {
  const { debts, handleAddBtnClick, handleRemoveBtnClick } = props;
  const [selectedDebts, setSelectedDebts] = useState([]);

  const handleCheck = (ev) => {
    const { target } = ev;
    if (target.checked === true) {
      setSelectedDebts([
        ...selectedDebts,
        { id: target.id, balance: parseInt(target.value) },
      ]);
    } else {
      const filteredDebts = selectedDebts.filter((debt) => {
        return debt.id !== target.id;
      });
      setSelectedDebts(filteredDebts);
    }
  };

  return (
    <div id="debt-table-root">
      <table id="debt-table" data-testid="debt-table-test">
        <thead>
          <tr>
            <th> </th>
            <th
              className="header-cell"
              data-testid="header-cell-test"
              align="left"
            >
              Creditor
            </th>
            <th
              className="header-cell"
              data-testid="header-cell-test"
              align="left"
            >
              First Name
            </th>
            <th
              className="header-cell"
              data-testid="header-cell-test"
              align="left"
            >
              Last Name
            </th>
            <th
              className="header-cell"
              data-testid="header-cell-test"
              align="right"
            >
              Min Pay%
            </th>
            <th
              className="header-cell"
              data-testid="header-cell-test"
              align="right"
            >
              Balance
            </th>
          </tr>
        </thead>
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
      <button
        id="add-debt-btn"
        data-testid="add-btn-test"
        onClick={handleAddBtnClick}
      >
        Add Debt
      </button>
      <button
        id="remove-debt-btn"
        data-testid="remove-btn-test"
        onClick={handleRemoveBtnClick}
      >
        Remove Debt
      </button>
      <table id="total-table">
        <tbody>
          <TotalRow debts={debts} selectedDebts={selectedDebts} />
        </tbody>
      </table>
      <p id="total-row-count">Total Row Count: {debts.length}</p>
      <p id="check-row-count">Check Row Count: {selectedDebts.length}</p>
    </div>
  );
};

DebtTable.propTypes = {
  debts: PropTypes.array,
  handleAddBtnClick: PropTypes.func,
  handleRemoveBtnClick: PropTypes.func,
};

export default DebtTable;
