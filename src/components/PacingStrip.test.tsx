import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PacingStrip from "./PacingStrip";

describe("PacingStrip", () => {
  it("renders pacing information for a race", () => {
    const race = {
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
      screen.getByRole("heading", { name: "Sprint Race" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("🏊 Swim Pace: 2.00 min/100m")
    ).toBeInTheDocument();

    expect(
      screen.getByText("🚴 Bike Speed: 30.00 km/h")
    ).toBeInTheDocument();

    expect(
      screen.getByText("🏃 Run Pace: 5.00 min/km")
    ).toBeInTheDocument();

    expect(
      screen.getByText("🏁 Finish Time: 1h 24m")
    ).toBeInTheDocument();
  });
});