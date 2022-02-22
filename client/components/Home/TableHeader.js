import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th> </th>
        <th className="header-cell" data-testid="header-creditor" align="left">
          Creditor
        </th>
        <th
          className="header-cell"
          data-testid="header-first-name"
          align="left"
        >
          First Name
        </th>
        <th className="header-cell" data-testid="header-last-name" align="left">
          Last Name
        </th>
        <th className="header-cell" data-testid="header-min-pay" align="right">
          Min Pay%
        </th>
        <th className="header-cell" data-testid="header-balance" align="right">
          Balance
        </th>
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {};

export default TableHeader;
