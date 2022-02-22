import React from "react";
import { PropTypes } from "prop-types";
import Row from "./Row";
import TableHeader from "./TableHeader";

const Home = (props) => {
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

Home.propTypes = {
  debts: PropTypes.array,
  handleCheck: PropTypes.func,
};

export default Home;
