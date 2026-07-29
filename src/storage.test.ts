import { describe, it, expect, beforeEach } from "vitest";
import {
  saveRaces,
  loadRaces,
  saveWorkouts,
  loadWorkouts,
} from "./storage";
import type { Race } from "./types";
import type { WorkoutEntry } from "./types";   


describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves and loads races", () => {
    const races : Race[] = [
      {
        id: "1",
        name: "Sprint Race",
        type: "sprint" as const,
        swimDistance: 750,
        bikeDistance: 20,
        runDistance: 5,
        targetSwimTime: 15,
        targetT1Time: 2,
        targetBikeTime: 40,
        targetT2Time: 2,
        targetRunTime: 25,
        date: "2026-08-01",
      },
    ];

    saveRaces(races);

    expect(loadRaces()).toEqual(races);
  });

  it("saves and loads workouts", () => {
    const workouts : WorkoutEntry[] = [
      {
        id: "1",
        discipline: "swim",
        duration: 30,
        date: "2026-07-29",
        feelRating: 4,
        fueling: "Water",
      },
    ];

    saveWorkouts(workouts);

    expect(loadWorkouts()).toEqual(workouts);
  });
});