import React from "react";
import axios from "axios";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DebtTable from "../components/DebtTable";
import App from "../App";

const getDebts = async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
    return data;
  } catch (error) {
    console.error(error);
  }
  return data;
};

test("table header displays correct column headers", async () => {
  const data = await getDebts();
  const debtTable = render(<DebtTable debts={data} />);

  const creditorHeader = await debtTable.findByTestId("header-creditor");
  const firstNameHeader = await debtTable.findByTestId("header-first-name");
  const lastNameHeader = await debtTable.findByTestId("header-last-name");
  const minPayHeader = await debtTable.findByTestId("header-min-pay");
  const balanceHeader = await debtTable.findByTestId("header-balance");

  expect(creditorHeader.innerHTML).toBe("Creditor");
  expect(firstNameHeader.innerHTML).toBe("First Name");
  expect(lastNameHeader.innerHTML).toBe("Last Name");
  expect(minPayHeader.innerHTML).toBe("Min Pay%");
  expect(balanceHeader.innerHTML).toBe("Balance");
});

test("table displays rows for all provided debts", async () => {
  const data = await getDebts();
  render(<App />);
  expect((await screen.findAllByTestId("row-test")).length).toEqual(
    data.length
  );
});

test("'Total' value includes balance value of debts whose checkboxes have been checked", async () => {
  render(<App />);

  userEvent.click(await screen.findByTestId("checkbox-1"));
  expect((await screen.findByTestId("total-value-test")).innerHTML).toBe(
    "$1,363.00"
  );
});

test("'Total' value does not include balance value of debts whose checkboxes have been unchecked", async () => {
  render(<App />);

  userEvent.click(await screen.findByTestId("checkbox-1"));
  userEvent.click(await screen.findByTestId("checkbox-1"));
  expect((await screen.findByTestId("checkbox-1")).checked).toBe(false);
  expect((await screen.findByTestId("total-value-test")).innerHTML).toBe(
    "$0.00"
  );
});

test("'Total Row Count' equals total amount of rows", async () => {
  render(<App />);
  expect((await screen.findAllByTestId("row-test")).length).toBe(10);
  expect((await screen.findByTestId("total-row-count-test")).innerHTML).toBe(
    "Total Row Count: 10"
  );
});

test("'Check Row Count' equals total amount of checked rows", async () => {
  render(<App />);
  userEvent.click(await screen.findByTestId("checkbox-1"));
  userEvent.click(await screen.findByTestId("checkbox-2"));
  userEvent.click(await screen.findByTestId("checkbox-3"));

  expect((await screen.findByTestId("check-row-count-test")).innerHTML).toBe(
    "Check Row Count: 3"
  );
});

test("'Add Debt' button adds a new row to the table", async () => {
  render(<App />);
  const amount = await screen.findAllByTestId("row-test");
  expect(amount.length).toEqual(10);
  userEvent.click(await screen.findByTestId("add-btn-test"));
  const amount1 = await screen.findAllByTestId("row-test");
  expect(amount1.length).toEqual(11);

  expect((await screen.findByTestId("creditor-99")).innerHTML).toBe("VISA");
});

test("'Remove Debt' button removes a row from the table", async () => {
  render(<App />);
  const amount = await screen.findAllByTestId("row-test");
  expect(amount.length).toEqual(10);
  userEvent.click(await screen.findByTestId("remove-btn-test"));
  const amount1 = await screen.findAllByTestId("row-test");
  expect(amount1.length).toEqual(9);
});
