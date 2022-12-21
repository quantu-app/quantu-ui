<script lang="ts">
	import { startTimer } from './index';
	import type { PomodoroTimerConfig, PomodoroTimerModes, PomodoroTimer } from './types';

	export let config: PomodoroTimerConfig;
	export let mode: PomodoroTimerModes;

	let runningTimer = false;
	let timerId: number | undefined = undefined;
	let timerInstance: PomodoroTimer | undefined;

	let minutes = mode === 'work' ? config.workDurationInMinutes : config.breakDurationInMinutes;
	let seconds = 0;

	const reset = (event: Event) => {
		if (timerId) {
			clearInterval(timerId);
		}
		if (timerInstance) {
			timerInstance = undefined;
		}
		minutes = mode === 'work' ? config.workDurationInMinutes : config.breakDurationInMinutes;
		seconds = 0;
	};

	const start = (event: Event) => {
		if (timerInstance) {
			timerInstance.isPaused = false;
		} else {
			timerId = startTimer(
				mode,
				config,
				(timer: PomodoroTimer) => {
					minutes = timer.remainingTime.minutes;
					seconds = timer.remainingTime.seconds;
					timerInstance = timer;
				},
				() => {
					// onDone
					runningTimer = false;
					timerInstance = undefined;
					timerId = undefined;
				}
			);
		}
		runningTimer = true;
	};

	const pause = (event: Event) => {
		if (timerInstance) {
			timerInstance.isPaused = true;
		}
		runningTimer = false;
	};
</script>

<div class="timer">
	<div class="minutes">
		<span>{minutes}</span>
	</div>
	<div class="seconds">
		<span>{seconds}</span>
	</div>
</div>

<div class="controls">
	<button on:click={reset}>Reset</button>
	{#if runningTimer}
		<button on:click={pause}>Pause</button>
	{:else}
		<button on:click={start}>Start</button>
	{/if}
</div>
