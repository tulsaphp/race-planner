import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import App from "./App";

describe("App Integration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("shows default headings", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /triathlon planner/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText("No races added yet.")
    ).toBeInTheDocument();

    expect(
      screen.getByText("No workouts yet.")
    ).toBeInTheDocument();
  });

  it("adds a workout to the saved workouts list", () => {
    render(<App />);

    fireEvent.change(
      screen.getByLabelText(/workout date/i),
      {
        target: { value: "2026-08-01" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/duration/i),
      {
        target: { value: "45" },
      }
    );

    fireEvent.change(
      screen.getByPlaceholderText("Fueling Notes"),
      {
        target: { value: "Gel" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /add workout/i,
      })
    );

    expect(
      screen.getByText(/2026-08-01 - swim - 45 min/i)
    ).toBeInTheDocument();
  });

  it("adds a race to the saved races list", () => {
    render(<App />);

    fireEvent.change(
      screen.getByPlaceholderText("Race Name"),
      {
        target: { value: "Sprint Race" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/race date/i),
      {
        target: { value: "2026-08-01" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /add race/i,
      })
    );

   expect(
      screen.getAllByText(/Sprint Race/i)
      ).toHaveLength(2);
  });
});