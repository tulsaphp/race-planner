import { describe, it, expectTypeOf } from "vitest";
import type { Race, WorkoutEntry, PacingStrip } from "./types";

describe("types", () => {
  it("defines the Race type", () => {
    expectTypeOf<Race>().toMatchTypeOf<{
      id: string;
      name: string;
      type: "sprint" | "olympic";
      swimDistance: number;
      bikeDistance: number;
      runDistance: number;
      targetSwimTime: number;
      targetT1Time: number;
      targetBikeTime: number;
      targetT2Time: number;
      targetRunTime: number;
      date: string;
    }>();
  });

  it("defines the WorkoutEntry type", () => {
    expectTypeOf<WorkoutEntry>().toMatchTypeOf<{
      id: string;
      date: string;
      discipline: "swim" | "bike" | "run";
      duration: number;
      fueling: string;
      feelRating: number;
    }>();
  });

  it("defines the PacingStrip type", () => {
    expectTypeOf<PacingStrip>().toMatchTypeOf<{
      raceId: string;
      raceName: string;
      swimPacePerHundred: number;
      t1Time: number;
      bikeSpeedKph: number;
      t2Time: number;
      runPacePerKm: number;
      totalFinishTime: string;
    }>();
  });
});