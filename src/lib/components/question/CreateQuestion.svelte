<svelte:options immutable />

<script lang="ts">
	import type { LocalQuestion } from '$lib/idb/IndexedDB';
	import { createQuestion } from '$lib/stores/questions';
	import { autofocus } from '$lib/util';
	import Modal from '../Modal.svelte';

	export let localQuizId: number;

	let name: string;
	let question_type: LocalQuestion['question_type'] = 'flash_card';
	let data: LocalQuestion['data'] = {
		front: [],
		back: []
	};

	async function onSubmit() {
		const _question = await createQuestion(localQuizId, { name, question_type, data });
		name = '';
		question_type = 'flash_card';
		data = {
			front: [],
			back: []
		};
		open = false;
	}

	let open = false;
	function onOpen() {
		open = true;
	}
</script>

<button class="btn primary" on:click={onOpen}>Create Question</button>

<Modal bind:open>
	<h3 slot="title">Create a Question</h3>
	<form on:submit|preventDefault={onSubmit}>
		<input type="text" use:autofocus class="mb-1" placeholder="Name" bind:value={name} />
		<div class="flex flex-column justify-end">
			<div class="flex">
				<input type="submit" class="btn primary" value="Create Question" disabled={!name} />
			</div>
		</div>
	</form>
</Modal>
