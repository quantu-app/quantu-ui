<svelte:options immutable />

<script lang="ts">
	import Editor from '../editor/Editor.svelte';

	export let data: { front: any[]; back: any[] };

	function onChangeFront({ detail }: CustomEvent<any>) {
		data = { ...data, front: detail };
	}
	function onChangeBack({ detail }: CustomEvent<any>) {
		data = { ...data, back: detail };
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
