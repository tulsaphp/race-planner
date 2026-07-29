import { useState } from "react";
import type { WorkoutEntry } from "../types";

interface WorkoutFormProps {
  onAddWorkout: (workout: WorkoutEntry) => void;
}

export default function WorkoutForm({
  onAddWorkout,
}: WorkoutFormProps) {
  const [date, setDate] = useState("");
  const [discipline, setDiscipline] = useState<
    "swim" | "bike" | "run"
  >("swim");
  
  const [duration, setDuration] = useState(0);
  const [fueling, setFueling] = useState("");
  const [feelRating, setFeelRating] = useState(3);

  const handleSubmit = () => {
    if (!date) {
      alert("Workout date is required.");
      return;
    }

    if (duration <= 0) {
      alert("Duration must be greater than zero.");
      return;
    }

    const workout: WorkoutEntry = {
      id: crypto.randomUUID(),
      date,
      discipline,
      duration,
      fueling,
      feelRating,
    };

    onAddWorkout(workout);

    setDate("");
    setDuration(0);
    setFueling("");
    setFeelRating(3);
  };

  return (
    <div>
      <h2>Workout Log</h2>
      <label htmlFor="workout-date">Workout Date</label>
      <input
        type="date" 
        id="workout-date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
     
      <br /><br />

      <select
        value={discipline}
        onChange={(e) =>
          setDiscipline(
            e.target.value as "swim" | "bike" | "run"
          )
        }
      >
        <option value="swim">Swim</option>
        <option value="bike">Bike</option>
        <option value="run">Run</option>
      </select>

      <br /><br />

<label htmlFor="duration">Duration</label>

<input
  id="duration"
  type="number"
  value={duration === 0 ? "" : duration}
  onChange={(e) => setDuration(Number(e.target.value))}
/>
      <br /><br />

      <input
        placeholder="Fueling Notes"
        value={fueling}
        onChange={(e) => setFueling(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        min="1"
        max="5"
        value={feelRating}
        onChange={(e) => setFeelRating(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Add Workout
      </button>
    </div>
  );
}