<script lang="ts">
	import type { PomodoroTimerModes } from '$lib/components/pomodoro/types';
	import View from '$lib/components/pomodoro/View.svelte';

	let config = {
		workDurationInMinutes: 25,
		breakDurationInMinutes: 5
	};

	let mode: PomodoroTimerModes = 'work';
</script>

<View {mode} {config} />
