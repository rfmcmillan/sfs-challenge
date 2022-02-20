import React, { useState } from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TotalRow from "./TotalRow";

const DebtTable = (props) => {
  const { debts, handleAddBtnClick } = props;
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
        </tbody>
      </table>
      <button onClick={handleAddBtnClick}>Add Debt</button>
      <table id="total-table">
        <tbody>
          <TotalRow debts={debts} selectedDebts={selectedDebts} />
        </tbody>
      </table>
      <br />
      <span>Total Row Count: {debts.length}</span>
      <span id="total-check-count">
        Check Row Count: {selectedDebts.length}
      </span>
    </div>
  );
};

DebtTable.propTypes = {
  debts: PropTypes.array,
  handleAddBtnClick: PropTypes.func,
};

export default DebtTable;
