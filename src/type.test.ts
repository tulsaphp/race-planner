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
        name: "Ironman",
        type: "Ironman",
        date: "2026-08-01",
        distance: 226,
        targetFinishTime: 720,
      },
    ];

    saveRaces(races);

    expect(loadRaces()).toEqual(races);
  });

  it("saves and loads workouts", () => {
    const workouts = [
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