export interface Race {
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
}

export interface WorkoutEntry {
  id: string;
  date: string;
  discipline: "swim" | "bike" | "run";
  duration: number;
  fueling: string;
  feelRating: number;
}

export interface PacingStrip {
  raceId: string;
  raceName: string;
  swimPacePerHundred: number;
  t1Time: number;
  bikeSpeedKph: number;
  t2Time: number;
  runPacePerKm: number;
  totalFinishTime: string;
}