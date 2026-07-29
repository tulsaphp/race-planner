import type { Race } from "../types";

interface PacingStripProps {
  race: Race;
}

function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = Math.round(minutes % 60);
  return `${hours}h ${mins}m`;
}

export default function PacingStrip({ race }: PacingStripProps) {
  const swimPace = race.targetSwimTime / (race.swimDistance / 100);
  const bikeSpeed = race.bikeDistance / (race.targetBikeTime / 60);
  const runPace = race.targetRunTime / race.runDistance;

  const totalTime =
    race.targetSwimTime +
    race.targetT1Time +
    race.targetBikeTime +
    race.targetT2Time +
    race.targetRunTime;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
      }}
    >
      <h3>{race.name}</h3>

      <p>🏊 Swim Pace: {swimPace.toFixed(2)} min/100m</p>
      <p>🚴 Bike Speed: {bikeSpeed.toFixed(2)} km/h</p>
      <p>🏃 Run Pace: {runPace.toFixed(2)} min/km</p>
      <p>🏁 Finish Time: {formatTime(totalTime)}</p>
    </div>
  );
}