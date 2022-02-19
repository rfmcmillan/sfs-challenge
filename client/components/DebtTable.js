import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TotalRow from "./TotalRow";

const DebtTable = (props) => {
  const { data: debts } = props;
  const [selectedDebts, setSelectedDebts] = useState([]);

  const handleCheck = (event) => {
    console.log(
      "🚀 ~ file: DebtTable.js ~ line 11 ~ handleCheck ~ event.target",
      event.target.value
    );

    setSelectedDebts([...selectedDebts, parseInt(event.target.value)]);
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
          {debts ? (
            debts.map((row) => {
              return <Row key={row.id} row={row} handleCheck={handleCheck} />;
            })
          ) : (
            <tr data-testid="empty-row-test"></tr>
          )}
          <TotalRow debts={debts} selectedDebts={selectedDebts} />
        </tbody>
      </table>
    </div>
  );
};

DebtTable.propTypes = {
  data: PropTypes.array,
};

export default DebtTable;
