import React, { useEffect, useState } from "react";
import axios from "axios";
import TotalTable from "./TotalTable";
import DebtTable from "./DebtTable";

const Home = () => {
  const [debts, setDebts] = useState([]);
  const [selectedDebts, setSelectedDebts] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      );
      const { data } = response;
      setDebts(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

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

  const handleAddBtnClick = () => {
    const dummyDebt = {
      id: 99,
      creditorName: "VISA",
      firstName: "John",
      lastName: "Smith",
      minPaymentPercentage: 3.5,
      balance: 1127.0,
    };
    setDebts([...debts, dummyDebt]);
  };

  const handleRemoveBtnClick = () => {
    setDebts(debts.slice(0, -1));
  };

  useEffect(() => {
    const debtIds = debts.map((debt) => {
      return debt.id;
    });

    const uncheckedDebts = selectedDebts.filter((selectedDebt) => {
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

export default Home;
