import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../pages/index";
import { renderWithTheme } from "../testHelpers";

describe("Counter", () => {
  it("Got React text", () => {
    renderWithTheme(<Counter />);
    const text = screen.getByText(/Rect/i);
    expect(text).toBeInTheDocument();
  });

  it("should render increaseButton", () => {
    renderWithTheme(<Counter />);
    const increaseButton = screen.getByText("+1");
    expect(increaseButton).toBeInTheDocument();
  });

  it("should render decreaseButton", () => {
    renderWithTheme(<Counter />);
    const decreaseButton = screen.getByText("-1");
    expect(decreaseButton).toBeInTheDocument();
  });

  it("should increase number & decrease number", () => {
    renderWithTheme(<Counter />);
    const increaseButton = screen.getByText("+1");
    fireEvent.click(increaseButton);
    const increaseNumber = screen.getByText("1");
    expect(increaseNumber).toBeInTheDocument();

    const decreaseButton = screen.getByText("-1");
    fireEvent.click(decreaseButton);
    const decreaseNumber = screen.getByText("0");
    expect(decreaseNumber).toBeInTheDocument();
  });
});
