import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PacingStrip from "./PacingStrip";
import type { Race } from "../types";

describe("PacingStrip", () => {
  const race: Race = {
    id: "1",
    name: "Test Sprint",
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

  it("renders the race name", () => {
    render(<PacingStrip race={race} />);

    expect(
      screen.getByRole("heading", { name: "Test Sprint" })
    ).toBeInTheDocument();
  });

  it("displays swim pace", () => {
    render(<PacingStrip race={race} />);

    expect(
      screen.getByText(/2\.00 min\/100m/)
    ).toBeInTheDocument();
  });

  it("displays bike speed", () => {
    render(<PacingStrip race={race} />);

    expect(
      screen.getByText(/30\.00 km\/h/)
    ).toBeInTheDocument();
  });

  it("displays run pace", () => {
    render(<PacingStrip race={race} />);

    expect(
      screen.getByText(/5\.00 min\/km/)
    ).toBeInTheDocument();
  });

  it("displays finish time", () => {
    render(<PacingStrip race={race} />);

    expect(
      screen.getByText(/1h 24m/)
    ).toBeInTheDocument();
  });
});