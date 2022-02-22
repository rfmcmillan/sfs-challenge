import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Row from "../components/Row";

const createRowData = () => {
  return {
    id: 1,
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 1363.0,
  };
};

const rowData = createRowData();

test("'Creditor' column displays the name of the creditor", async () => {
  const row = render(
    <table>
      <tbody>
        <Row debt={rowData} />
      </tbody>
    </table>
  );

  const creditor = await row.findByTestId(`creditor-${rowData.id}`);
  expect(creditor.innerHTML).toContain("CBNA");
});

test("'First Name' column displays the first name of the loan", async () => {
  const row = render(
    <table id="total-table">
      <tbody>
        <Row debt={rowData} />
      </tbody>
    </table>
  );

  const firstName = await row.findByTestId(`first-name-${rowData.id}`);
  expect(firstName.innerHTML).toBe("Suman");
});

test("'Last Name' column displays the last name of the loan", async () => {
  const row = render(
    <table id="total-table">
      <tbody>
        <Row debt={rowData} />
      </tbody>
    </table>
  );

  const lastName = await row.findByTestId(`last-name-${rowData.id}`);
  expect(lastName.innerHTML).toBe("Tester79");
});

test("'Min Pay %' column displays the minimum pay % of the loan", async () => {
  const row = render(
    <table id="total-table">
      <tbody>
        <Row debt={rowData} />
      </tbody>
    </table>
  );

  const minPay = await row.findByTestId(`min-pay-${rowData.id}`);
  expect(minPay.innerHTML).toBe("2.00%");
});

test("'Balance' column displays the balance of the loan", async () => {
  const row = render(
    <table id="total-table">
      <tbody>
        <Row debt={rowData} />
      </tbody>
    </table>
  );

  const balance = await row.findByTestId(`balance-${rowData.id}`);
  expect(balance.innerHTML).toBe("1,363.00");
});
