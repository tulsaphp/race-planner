import { useState } from "react";
import RaceForm from "./components/RaceForm";
import type { Race, WorkoutEntry } from "./types";
import { loadRaces, saveRaces } from "./storage";
import WorkoutForm from "./components/WorkoutForm";
import { loadWorkouts, saveWorkouts } from "./storage";
// Inline calculateAverageDuration to avoid missing module './utils'
const calculateAverageDuration = (
  workouts: import("./types").WorkoutEntry[],
  discipline: "swim" | "bike" | "run"
): number => {
  if (!workouts || workouts.length === 0) return 0;
  const filtered = workouts.filter((w) => w.discipline === discipline);
  if (filtered.length === 0) return 0;
  const total = filtered.reduce((sum, w) => sum + Number(w.duration || 0), 0);
  return Math.round(total / filtered.length);
};
import PacingStrip from "./components/PacingStrip";

function App() {
  const [races, setRaces] = useState<Race[]>(loadRaces());
  const [workouts, setWorkouts] = useState<WorkoutEntry[]>(loadWorkouts());

  const addRace = (race: Race) => {
    const updated = [...races, race];
    setRaces(updated);
    saveRaces(updated);
  };
const deleteRace = (id: string) => {
  const updated = races.filter((race) => race.id !== id);
  setRaces(updated);
  saveRaces(updated);
};

const deleteWorkout = (id: string) => {
  const updated = workouts.filter((workout) => workout.id !== id);
  setWorkouts(updated);
  saveWorkouts(updated);
};
const addWorkout = (workout: WorkoutEntry) => {
  const updated = [...workouts, workout];
  setWorkouts(updated);
  saveWorkouts(updated);
};
const averageSwim = calculateAverageDuration(workouts, "swim");
const averageBike = calculateAverageDuration(workouts, "bike");
const averageRun = calculateAverageDuration(workouts, "run");
  return (
    <div style={{ padding: "20px" }}>
      <h1>Triathlon Planner</h1>

        <RaceForm onAddRace={addRace} averageSwim={averageSwim}
        averageBike={averageBike}
        averageRun={averageRun}
/>       <hr />
      <h2>Pacing Strips</h2>

      {races.map((race) => (
      <PacingStrip
          key={race.id}
          race={race}
        />
      ))}
      <WorkoutForm onAddWorkout={addWorkout} />
      <hr />
<h2>Saved Workouts</h2>

{workouts.length === 0 ? (
  <p>No workouts yet.</p>
) : (
  <ul>
    {workouts.map((workout) => (
      <li key={workout.id}>
        {workout.date} - {workout.discipline} - {workout.duration} min

        <button
          onClick={() => deleteWorkout(workout.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
)}

      <h2>Saved Races</h2>
      {races.length === 0 ? (
        <p>No races added yet.</p>
      ) : (
        <ul>
          {races.map((race) => (
            <li key={race.id}>
              <strong>{race.name}</strong> ({race.type})
                <button
                    onClick={() => deleteRace(race.id)}
                    style={{ marginLeft: "10px" }}>
                     Delete
                </button>
                

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;