import { render, screen, cleanup } from "@testing-library/react";
import PersonGrid from "../PersonGrid";
import { filterData } from "../../utils/filter";
afterEach(() => {
  cleanup();
});

test("should render PersonGrid component", () => {
  render(<PersonGrid />);
  const element = screen.getByTestId("tid-1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("First name");
  expect(element).toHaveTextContent("E-mail");
  expect(element).toHaveTextContent("Gender");
  expect(element).toHaveTextContent("IP address");
  expect(element).toContainHTML("<table");
});

describe("filterData function", () => {
  test("it filters data based on first name prefix and active status", () => {
    const data = [
      { Name: "John", is_active: true },
      { Name: "Jane", is_active: false },
      { Name: "Jim", is_active: true },
    ];

    const filteredData = filterData(data, "j", true);
    expect(filteredData).toEqual([
      { Name: "John", is_active: true },
      { Name: "Jim", is_active: true },
    ]);
  });

  test("it only returns active data when onlyActive is true", () => {
    const data = [
      { Name: "John", is_active: true },
      { Name: "Jane", is_active: false },
      { Name: "Jim", is_active: true },
    ];
    const filteredData = filterData(data, "", true);
    expect(filteredData).toEqual([
      { Name: "John", is_active: true },
      { Name: "Jim", is_active: true },
    ]);
  });
});
