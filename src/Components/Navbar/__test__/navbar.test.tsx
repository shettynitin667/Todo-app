import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

test("check if correct text is displayed on navbar", () => {
  render(<Navbar title="Todo App" />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});
