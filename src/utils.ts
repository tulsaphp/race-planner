import type { WorkoutEntry } from "./types";

export function calculateAverageDuration(
  workouts: WorkoutEntry[],
  discipline: "swim" | "bike" | "run"
): number {
  const filtered = workouts.filter(
    (w) => w.discipline === discipline
  );

  if (filtered.length === 0) {
    return 0;
  }

  const total = filtered.reduce(
    (sum, workout) => sum + workout.duration,
    0
  );

  return Math.round(total / filtered.length);
}