<svelte:options immutable />

<script lang="ts">
	import type { LocalQuestion } from '$lib/idb/IndexedDB';
	import { updateQuestion } from '$lib/stores/questions';
	import { autofocus } from '$lib/util';
	import FlashCardEditor from './FlashCardEditor.svelte';

	export let localQuizId: number;
	export let localQuestionId: number;
	export let question: LocalQuestion;
	export let onUpdate: (question: LocalQuestion) => void;

	async function onSubmit() {
		const updatedQuestion = await updateQuestion(localQuizId, localQuestionId, question);
		onUpdate(updatedQuestion);
	}
	function onChangeName(e: Event & { currentTarget: HTMLInputElement }) {
		question = { ...question, name: e.currentTarget.value };
	}
	function onDataChange(e: CustomEvent<LocalQuestion['data']>) {
		question = { ...question, data: e.detail };
	}
</script>

<h3>Edit a Question</h3>
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
			value={question.name}
			on:change={onChangeName}
		/>
	</div>
	{#if question.question_type === 'flash_card'}
		<FlashCardEditor data={question.data} on:change={onDataChange} />
	{/if}
	<div class="flex flex-column justify-end">
		<div class="flex">
			<input type="submit" class="btn primary" value="Update Question" />
		</div>
	</div>
</form>
