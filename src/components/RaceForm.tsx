import { useState } from "react";
import type { Race } from "../types";


interface RaceFormProps {
  onAddRace: (race: Race) => void;
  averageSwim: number;
  averageBike: number;
  averageRun: number;
}
 export default function RaceForm({
  onAddRace,
  averageSwim,
  averageBike,
  averageRun,
}: RaceFormProps) {

  const [name, setName] = useState("");
  const [type, setType] = useState<"sprint" | "olympic">("sprint");

  const [swimDistance, setSwimDistance] = useState(750);
  const [bikeDistance, setBikeDistance] = useState(20);
  const [runDistance, setRunDistance] = useState(5);

  const [targetSwimTime, setTargetSwimTime] = useState(900);
  const [targetT1Time, setTargetT1Time] = useState(120);
  const [targetBikeTime, setTargetBikeTime] = useState(2400);
  const [targetT2Time, setTargetT2Time] = useState(60);
  const [targetRunTime, setTargetRunTime] = useState(1500);

  const [date, setDate] = useState("");

  return (
    <div>
      <h2>Add Race</h2>
      <div
  style={{
    background: "#f4f4f4",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
  }}
>
  <strong>Average Workout Durations</strong>

  <p>🏊 Swim: {averageSwim} min</p>
  <p>🚴 Bike: {averageBike} min</p>
  <p>🏃 Run: {averageRun} min</p>
</div>
      <input
        placeholder="Race Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <select
        value={type}
        onChange={(e) => setType(e.target.value as "sprint" | "olympic")}
      >
        <option value="sprint">Sprint</option>
        <option value="olympic">Olympic</option>
      </select>

      <br /><br />

      <input
        type="number"
        placeholder="Swim Distance (m)"
        value={swimDistance}
        onChange={(e) => setSwimDistance(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Bike Distance (km)"
        value={bikeDistance}
        onChange={(e) => setBikeDistance(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Run Distance (km)"
        value={runDistance}
        onChange={(e) => setRunDistance(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Target Swim Time (sec)"
        value={targetSwimTime}
        onChange={(e) => setTargetSwimTime(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Target T1 Time (sec)"
        value={targetT1Time}
        onChange={(e) => setTargetT1Time(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Target Bike Time (sec)"
        value={targetBikeTime}
        onChange={(e) => setTargetBikeTime(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Target T2 Time (sec)"
        value={targetT2Time}
        onChange={(e) => setTargetT2Time(Number(e.target.value))}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Target Run Time (sec)"
        value={targetRunTime}
        onChange={(e) => setTargetRunTime(Number(e.target.value))}
      />

      <br /><br />

<label htmlFor="race-date">Race Date</label>
<input
  id="race-date"
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
      <br /><br />

      <button
  onClick={() => {
  if (!name.trim()) {
    alert("Race name is required.");
    return;
  }

  if (!date) {
    alert("Race date is required.");
    return;
  }

  if (swimDistance <= 0 || bikeDistance <= 0 || runDistance <= 0) {
    alert("Distances must be greater than zero.");
    return;
  }

  if (
    targetSwimTime <= 0 ||
    targetBikeTime <= 0 ||
    targetRunTime <= 0 ||
    targetT1Time < 0 ||
    targetT2Time < 0
  ) {
    alert("Please enter valid target times.");
    return;
  }

  const race: Race = {
    id: crypto.randomUUID(),
    name,
    type,
    swimDistance,
    bikeDistance,
    runDistance,
    targetSwimTime,
    targetT1Time,
    targetBikeTime,
    targetT2Time,
    targetRunTime,
    date,
  };


  // Clear the form after successful save


    onAddRace(race);

  // Clear the form after successful save
  setName("");
  setType("sprint");
  setSwimDistance(750);
  setBikeDistance(20);
  setRunDistance(5);
  setTargetSwimTime(900);
  setTargetT1Time(120);
  setTargetBikeTime(2400);
  setTargetT2Time(60);
  setTargetRunTime(1500);
  setDate("");
  
  }}
>
  Add Race
</button>
    </div>
  );
}