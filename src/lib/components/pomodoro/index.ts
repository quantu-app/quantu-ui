import type { PomodoroTimer, PomodoroTimerConfig, PomodoroTimerModes, RemainingTime } from "./types";

function getRemainingTime(endTime: number): RemainingTime {
  const currentTime = Date.parse((new Date()).toString());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  const seconds = Number.parseInt(total % 60, 10);

  return {
    total,
    minutes,
    seconds,
  };
}

export function startTimer(
  mode: PomodoroTimerModes,
  config: PomodoroTimerConfig,
  onTick: (timer: PomodoroTimer) => void = () => { 0 },
  onDone: () => void = () => { 0 },
): number {

  const timer: PomodoroTimer = {
    mode: mode,
    remainingTime: {
      total: 0,
      minutes: 0,
      seconds: 0
    },
    isPaused: false
  };
  if (mode === "work") {
    timer.remainingTime.total = config.workDurationInMinutes * 60;
    timer.remainingTime.minutes = config.workDurationInMinutes;
  } else if (mode === 'break') {
    timer.remainingTime.total = config.breakDurationInMinutes * 60;
    timer.remainingTime.minutes = config.breakDurationInMinutes;
  }



  let { total } = timer.remainingTime;

  // calculate the time at which the timer should end
  let endTime = Date.parse((new Date()).toString()) + total * 1000;

  const interval = setInterval(() => {
    total = timer.remainingTime.total;
    if (timer.isPaused) {
      endTime = Date.parse((new Date()).toString()) + total * 1000;
    } else {
      timer.remainingTime = getRemainingTime(endTime);
      onTick(timer);
      if (total <= 0) {
        // the countdown is finished
        clearInterval(interval);
        onDone();
      }

    }
  }, 1000);

  return interval;
}