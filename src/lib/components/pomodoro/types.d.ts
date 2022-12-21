export type PomodoroTimerModes = "work" | "break";

export type PomodoroTimerConfig = {
  workDurationInMinutes: number;
  breakDurationInMinutes: number;
}

export type PomodoroSessionTemplate = {
  id: string;
  name: string;
  tags: string[];
  config: PomodoroTimerConfig;
}

export type PomodoroSession = {
  id: string;
  tags: string[];
  pauses: number;
  workDuration: number;
  workCount: number;
  breakDuration: number;
  breakCount: number;
}

export type RemainingTime = {
  total: number;
  minutes: number;
  seconds: number;
}

export type PomodoroTimer = {
  mode: PomodoroTimerModes;
  remainingTime: RemainingTime;
  isPaused: boolean;
}