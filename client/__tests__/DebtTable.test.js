import React from "react";
import axios from "axios";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import DebtTable from "../components/DebtTable";

test("table has five header cells", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
  } catch (error) {
    console.error(error);
  }
  const debtTable = render(<DebtTable debts={data} />);

  const headerCells = await debtTable.findAllByTestId("header-cell-test");

  expect(headerCells.length).toBe(5);
});
