import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Row from "../components/Row";

test("Creditor column displays the name of the creditor", async () => {
  const rowData = {
    id: 1,
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 1363.0,
  };
  const row = render(
    <table>
      <tbody>
        <Row row={rowData} />
      </tbody>
    </table>
  );

  const creditorCell = await row.findByTestId("creditor-name");

  expect(creditorCell.innerHTML).toContain("CBNA");
});

test("First name column displays the first name of the loan", async () => {
  const rowData = {
    id: 1,
    creditorName: "CBNA",
    firstName: "Suman",
    lastName: "Tester79",
    minPaymentPercentage: 2.0,
    balance: 1363.0,
  };
  const row = render(
    <table>
      <tbody>
        <Row row={rowData} />
      </tbody>
    </table>
  );

  const firstNameCell = await row.findByTestId("first-name");

  expect(firstNameCell.innerHTML).toContain("Suman");
});
