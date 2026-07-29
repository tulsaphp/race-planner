import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import RaceForm from "./RaceForm";

describe("RaceForm", () => {
  const defaultProps = {
    onAddRace: vi.fn(),
    averageSwim: 30,
    averageBike: 60,
    averageRun: 40,
  };

  it("renders the race form", () => {
    render(<RaceForm {...defaultProps} />);

    expect(
      screen.getByRole("heading", { name: "Add Race" })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Race Name")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add Race" })
    ).toBeInTheDocument();
  });

  it("allows typing a race name", () => {
    render(<RaceForm {...defaultProps} />);

    const input = screen.getByPlaceholderText("Race Name");

    fireEvent.change(input, {
      target: { value: "My Sprint Race" },
    });

    expect(input).toHaveValue("My Sprint Race");
  });

  it("calls onAddRace when valid data is submitted", () => {
    const onAddRace = vi.fn();

    render(
      <RaceForm
        onAddRace={onAddRace}
        averageSwim={30}
        averageBike={60}
        averageRun={40}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText("Race Name"),
      {
        target: { value: "Sprint Race" },
      }
    );

    const dateInput = screen.getByLabelText(/race date/i);

    fireEvent.change(dateInput, {
        target: { value: "2026-08-01" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Race",
      })
    );

    expect(onAddRace).toHaveBeenCalledTimes(1);

    expect(onAddRace).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Sprint Race",
        date: "2026-08-01",
      })
    );
  });
});