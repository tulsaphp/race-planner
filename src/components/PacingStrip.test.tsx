import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PacingStrip from "./PacingStrip";
import type { Race } from "../types";

describe("PacingStrip", () => {
  it("renders pacing information for a race", () => {
    const race: Race = {
      id: "1",
      name: "Sprint Race",
      type: "sprint",
      swimDistance: 750,
      bikeDistance: 20,
      runDistance: 5,
      targetSwimTime: 15,
      targetT1Time: 2,
      targetBikeTime: 40,
      targetT2Time: 2,
      targetRunTime: 25,
      date: "2026-08-01",
    };

    render(<PacingStrip race={race} />);

    expect(
      screen.getByRole("heading", {
        name: /Sprint Race/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Swim Pace:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Bike Speed:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Run Pace:/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Finish Time:/i)
    ).toBeInTheDocument();
  });
});