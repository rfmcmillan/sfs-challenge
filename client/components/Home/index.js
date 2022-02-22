import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import TotalTable from "./TotalTable";
import DebtTable from "./DebtTable";

const Home = (props) => {
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

  useEffect(() => {
    console.log("selectedDebts:", selectedDebts);
    console.log("debts", debts);
    const debtIds = debts.map((debt) => {
      return debt.id;
    });
    console.log("🚀 ~ file: index.js ~ line 31 ~ debtIds ~ debtIds", debtIds);
    const uncheckedDebts = selectedDebts.filter((selectedDebt) => {
      console.log(parseInt(selectedDebt.id));
      return debtIds.includes(parseInt(selectedDebt.id));
    });

    setSelectedDebts(uncheckedDebts);
  }, [debts]);

  return (
    <div id="debt-table-root">
      <DebtTable debts={debts} handleCheck={handleCheck} />
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
      <TotalTable debts={debts} selectedDebts={selectedDebts} />
      <p id="total-row-count" data-testid="total-row-count-test">
        Total Row Count: {debts.length}
      </p>
      <p id="check-row-count" data-testid="check-row-count-test">
        Check Row Count: {selectedDebts.length}
      </p>
    </div>
  );
};

Home.propTypes = {
  debts: PropTypes.array,
  handleAddBtnClick: PropTypes.func,
  handleRemoveBtnClick: PropTypes.func,
};

export default Home;
