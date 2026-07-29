import { describe, it, expect } from "vitest";
import { calculateAverageDuration } from "./utils";

describe("calculateAverageDuration", () => {
  it("returns the average duration for a discipline", () => {
    const workouts = [
      {
        id: "1",
        date: "2026-07-28",
        discipline: "swim" as const,
        duration: 30,
        fueling: "",
        feelRating: 4,
      },
      {
        id: "2",
        date: "2026-07-29",
        discipline: "swim" as const,
        duration: 60,
        fueling: "",
        feelRating: 5,
      },
    ];

    expect(calculateAverageDuration(workouts, "swim")).toBe(45);
  });

  it("returns 0 when there are no workouts", () => {
    expect(calculateAverageDuration([], "swim")).toBe(0);
  });
});