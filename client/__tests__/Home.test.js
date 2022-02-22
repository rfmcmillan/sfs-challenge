import React from "react";
import axios from "axios";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../components/Home";

describe("table", () => {
  test("table header displays correct column headers", async () => {
    const home = render(<Home />);

    const creditorHeader = await home.findByTestId("header-creditor");
    const firstNameHeader = await home.findByTestId("header-first-name");
    const lastNameHeader = await home.findByTestId("header-last-name");
    const minPayHeader = await home.findByTestId("header-min-pay");
    const balanceHeader = await home.findByTestId("header-balance");

    expect(creditorHeader.innerHTML).toBe("Creditor");
    expect(firstNameHeader.innerHTML).toBe("First Name");
    expect(lastNameHeader.innerHTML).toBe("Last Name");
    expect(minPayHeader.innerHTML).toBe("Min Pay%");
    expect(balanceHeader.innerHTML).toBe("Balance");
  });

  test("table displays rows for all provided debts", async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      );
      var { data } = response;
      return data;
    } catch (error) {
      console.error(error);
    }

    render(<Home />);
    expect((await screen.findAllByTestId("row-test")).length).toEqual(
      data.length
    );
  });
});

describe('"Total" value', () => {
  test("'Total' value includes balance value of debts whose checkboxes have been checked", async () => {
    render(<Home />);

    userEvent.click(await screen.findByTestId("checkbox-1"));
    expect((await screen.findByTestId("total-value-test")).innerHTML).toBe(
      "$1,363.00"
    );
  });

  test("'Total' value does not include balance value of debts whose checkboxes have been unchecked", async () => {
    render(<Home />);

    userEvent.click(await screen.findByTestId("checkbox-1"));
    userEvent.click(await screen.findByTestId("checkbox-1"));
    expect((await screen.findByTestId("checkbox-1")).checked).toBe(false);
    expect((await screen.findByTestId("total-value-test")).innerHTML).toBe(
      "$0.00"
    );
  });
});

describe("counts", () => {
  test("'Total Row Count' displays total amount of rows", async () => {
    render(<Home />);
    expect((await screen.findAllByTestId("row-test")).length).toBe(10);
    expect((await screen.findByTestId("total-row-count-test")).innerHTML).toBe(
      "Total Row Count: 10"
    );
  });

  test("'Check Row Count' displays total amount of checked rows", async () => {
    render(<Home />);
    userEvent.click(await screen.findByTestId("checkbox-1"));
    userEvent.click(await screen.findByTestId("checkbox-2"));
    userEvent.click(await screen.findByTestId("checkbox-3"));

    expect((await screen.findByTestId("check-row-count-test")).innerHTML).toBe(
      "Check Row Count: 3"
    );
  });
});

describe("buttons", () => {
  test("'Add Debt' button adds a new row to the table", async () => {
    render(<Home />);
    const amount = await screen.findAllByTestId("row-test");
    expect(amount.length).toEqual(10);
    userEvent.click(await screen.findByTestId("add-btn-test"));
    const amount1 = await screen.findAllByTestId("row-test");
    expect(amount1.length).toEqual(11);

    expect((await screen.findByTestId("creditor-99")).innerHTML).toBe("VISA");
  });

  test("'Remove Debt' button removes a row from the table", async () => {
    render(<Home />);
    const amount = await screen.findAllByTestId("row-test");
    expect(amount.length).toEqual(10);
    userEvent.click(await screen.findByTestId("remove-btn-test"));
    const amount1 = await screen.findAllByTestId("row-test");
    expect(amount1.length).toEqual(9);
  });
});
