<svelte:options immutable />

<script lang="ts">
	import type { LocalQuestion } from '$lib/idb/IndexedDB';
	import { createQuestion } from '$lib/stores/questions';
	import { autofocus } from '$lib/util';
	import FlashCardEditor from './FlashCardEditor.svelte';

	export let localQuizId: number;

	let name: string;
	let questionType: LocalQuestion['question_type'] = 'flash_card';
	let data = {};

	async function onSubmit() {
		const _question = await createQuestion(localQuizId, {
			name,
			question_type: questionType,
			data
		});
		name = '';
		questionType = 'flash_card';
		data = {};
	}
</script>

<h3>Create a Question</h3>
<hr />
<form on:submit|preventDefault={onSubmit}>
	<div>
		<label for="name">Name</label>
		<input
			type="text"
			use:autofocus
			class="mb-1"
			placeholder="Name"
			name="name"
			bind:value={name}
		/>
	</div>
	{#if questionType === 'flash_card'}
		<FlashCardEditor bind:data />
	{/if}
	<div class="flex flex-column justify-end">
		<div class="flex">
			<input type="submit" class="btn primary" value="Create Question" disabled={!name} />
		</div>
	</div>
</form>
