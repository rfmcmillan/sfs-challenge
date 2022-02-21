import React from "react";
import axios from "axios";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DebtTable from "../components/DebtTable";
import App from "../App";

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

test("checkbox is checked when user clicks on it", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
  } catch (error) {
    console.error(error);
  }
  render(<DebtTable debts={data} />);

  userEvent.click(screen.getByTestId("checkbox-1"));
  expect(screen.getByTestId("checkbox-1").checked).toBe(true);
});

test("total value includes balance value of debts whose checkboxes have been checked", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
  } catch (error) {
    console.error(error);
  }
  render(<DebtTable debts={data} />);

  userEvent.click(screen.getByTestId("checkbox-1"));
  expect(screen.getByTestId("total-value-test").innerHTML).toBe("$1,363.00");
});

test("total value does not include balance value of debts whose checkboxes have been unchecked", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
  } catch (error) {
    console.error(error);
  }
  render(<DebtTable debts={data} />);

  userEvent.click(screen.getByTestId("checkbox-1"));
  userEvent.click(screen.getByTestId("checkbox-1"));
  expect(screen.getByTestId("checkbox-1").checked).toBe(false);
  expect(screen.getByTestId("total-value-test").innerHTML).toBe("$0.00");
});

test("add button adds a new row to the table", async () => {
  try {
    const response = await axios.get(
      "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
    );
    var { data } = response;
  } catch (error) {
    console.error(error);
  }
  render(
    <App>
      <DebtTable debts={data} />
    </App>
  );

  userEvent.click(screen.getByTestId("add-btn-test"));

  expect(screen.getByTestId("creditor-99").innerHTML).toBe("VISA");
});
