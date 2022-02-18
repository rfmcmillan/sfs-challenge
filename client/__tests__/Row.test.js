import React from "react";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Row from "../components/Row";

test("each row has five cells", async () => {
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
