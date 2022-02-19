import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import DebtTable from "../components/DebtTable";

test("table has five header cells", async () => {
  const debtTable = render(<DebtTable />);

  const headerCells = await debtTable.findAllByTestId("header-cell-test");

  expect(headerCells.length).toBe(5);
});

test("if no data is provided, table displays an empty row as a placeholder", async () => {
  const debtTable = render(<DebtTable />);

  const placeholderRow = await debtTable.findByTestId("empty-row-test");

  expect(placeholderRow.innerHTML).toBe("");
});
