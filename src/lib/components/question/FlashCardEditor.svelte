<svelte:options immutable />

<script lang="ts" context="module">
	type FlashCardData = { front: any[]; back: any[] };
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Editor from '../editor/Editor.svelte';

	export let data: FlashCardData;

	const dispatch = createEventDispatcher<{ change: FlashCardData }>();

	function onChangeFront({ detail }: CustomEvent<any>) {
		data = { ...data, front: detail };
		dispatch('change', data);
	}
	function onChangeBack({ detail }: CustomEvent<any>) {
		data = { ...data, back: detail };
		dispatch('change', data);
	}
</script>

<div>
	<label for="front">Front</label>
	<Editor name="front" value={data.front} on:value={onChangeFront} />
</div>
<div>
	<label for="back">Back</label>
	<Editor name="back" value={data.back} on:value={onChangeBack} />
</div>
