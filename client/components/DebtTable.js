import React from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";

const DebtTable = (props) => {
  const { data } = props;

  return (
    <div>
      <table id="debt-table">
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
          {data ? (
            data.map((row) => {
              return <Row key={row.id} row={row} />;
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

DebtTable.propTypes = {
  data: PropTypes.array,
};

export default DebtTable;
