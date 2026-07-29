import type { Race, WorkoutEntry } from "./types";

const RACES_KEY = "triathlon_races";
const WORKOUTS_KEY = "triathlon_workouts";

export function saveRaces(races: Race[]): void {
  localStorage.setItem(RACES_KEY, JSON.stringify(races));
}

export function loadRaces(): Race[] {
  try {
    const data = localStorage.getItem(RACES_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveWorkouts(workouts: WorkoutEntry[]): void {
  localStorage.setItem(WORKOUTS_KEY, JSON.stringify(workouts));
}

export function loadWorkouts(): WorkoutEntry[] {
  try {
    const data = localStorage.getItem(WORKOUTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}