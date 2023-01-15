<svelte:options immutable />

<script lang="ts">
	import type { LocalSchema } from '$lib/idb/IndexedDB';
	import { createQuiz, type Quiz } from '$lib/stores/quizzes';
	import { convertToUrlSafe } from '$lib/util';

	export let onCreate: (quiz: LocalSchema<Quiz>) => void;

	let name: string;
	let uri: string;

	async function onSubmit() {
		const quiz = await createQuiz({ name });
		onCreate(quiz);
	}

	function onNameChange(e: Event & { currentTarget: HTMLInputElement }) {
		uri = convertToUrlSafe(e.currentTarget.value);
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<input type="name" class="mb-1" placeholder="Name" bind:value={name} on:input={onNameChange} />
	<input type="uri" class="mb-1" placeholder="URL" bind:value={uri} />
	<div class="flex flex-column justify-end">
		<div class="flex">
			<input type="submit" class="btn primary" value="Create Quiz" disabled={!name || !uri} />
		</div>
	</div>
</form>
