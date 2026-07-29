import { describe, it, expect, beforeEach } from "vitest";
import {
  saveRaces,
  loadRaces,
  saveWorkouts,
  loadWorkouts,
} from "./storage";

describe("storage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("saves and loads races", () => {
    const races = [
      {
        id: "1",
        name: "Sprint Race",
        type: "sprint",
        swimDistance: 0.75,
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

  it("returns an empty array when no races are stored", () => {
    expect(loadRaces()).toEqual([]);
  });

  it("saves and loads workouts", () => {
    const workouts = [
      {
        id: "1",
        date: "2026-08-01",
        discipline: "swim",
        duration: 30,
        fueling: "Water",
        feelRating: 5,
      },
    ];

    saveWorkouts(workouts);

    expect(loadWorkouts()).toEqual(workouts);
  });

  it("returns an empty array when no workouts are stored", () => {
    expect(loadWorkouts()).toEqual([]);
  });
});