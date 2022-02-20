import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TotalRow from "./TotalRow";

const DebtTable = (props) => {
  const { debts } = props;
  console.log("🚀 ~ file: DebtTable.js ~ line 8 ~ DebtTable ~ debts", debts);
  const [selectedDebts, setSelectedDebts] = useState([]);

  const handleCheck = (event) => {
    console.log(
      "🚀 ~ file: DebtTable.js ~ line 11 ~ handleCheck ~ event.target.value",
      event.target.value
    );
    if (event.target.checked === true) {
      setSelectedDebts([
        ...selectedDebts,
        { id: event.target.id, balance: parseInt(event.target.value) },
      ]);
    } else {
      const filteredDebts = selectedDebts.filter((debt) => {
        console.log("debt.id:", debt.id);
        return debt.id !== event.target.id;
      });
      setSelectedDebts(filteredDebts);
    }
  };

  useEffect(() => {
    console.log(
      "🚀 ~ file: DebtTable.js ~ line 9 ~ DebtTable ~ selectedDebts",
      selectedDebts
    );
  }, [selectedDebts]);

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
    </div>
  );
};

DebtTable.propTypes = {
  debts: PropTypes.array,
};

export default DebtTable;
