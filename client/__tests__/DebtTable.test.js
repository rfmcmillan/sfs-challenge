import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import DebtTable from "../components/DebtTable";

test("table has five header cells", async () => {
  const debtTable = render(<DebtTable />);
  //
  const headerCells = await debtTable.findAllByTestId("header-cell");

  expect(headerCells.length).toBe(5);
});
