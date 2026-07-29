import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import WorkoutForm from "./WorkoutForm";

describe("WorkoutForm", () => {
  it("renders the workout form", () => {
    render(<WorkoutForm onAddWorkout={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Workout Log" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Add Workout" })
    ).toBeInTheDocument();
  });

  it("allows entering fueling notes", () => {
    render(<WorkoutForm onAddWorkout={vi.fn()} />);

    const input = screen.getByPlaceholderText("Fueling Notes");

    fireEvent.change(input, {
      target: { value: "Energy Gel" },
    });

    expect(input).toHaveValue("Energy Gel");
  });

  it("calls onAddWorkout with the workout data when the form is submitted", () => {
    const onAddWorkout = vi.fn();

    render(<WorkoutForm onAddWorkout={onAddWorkout} />);

    const dateInput = screen.getByLabelText(/workout date/i);
   const durationInput = screen.getByLabelText(/duration/i);
    const button = screen.getByRole("button", {
      name: "Add Workout",
    });

    fireEvent.change(dateInput, {
      target: { value: "2026-08-01" },
    });

    fireEvent.change(durationInput, {
      target: { value: "30" },
    });

    fireEvent.click(button);

    expect(onAddWorkout).toHaveBeenCalledTimes(1);

    expect(onAddWorkout).toHaveBeenCalledWith(
      expect.objectContaining({
        date: "2026-08-01",
        duration: 30,
      })
    );
  });
});