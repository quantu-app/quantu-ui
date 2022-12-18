<svelte:options immutable />

<script lang="ts">
	import Editor from '$lib/components/editor/Editor.svelte';
	import Layout from '$lib/components/Layout.svelte';
	import { localCache, localCacheTasks } from '$lib/localCache';
	import type { IElement } from 'svelte-slate/plugins/Element.svelte';
	import type { IText } from 'svelte-slate/plugins/Leaf.svelte';
	import type { Writable } from 'svelte/store';

	type IDoc = Array<IText | IElement>;

	const { create, fromLocal, deleteLocal, localMetas } = localCache<IDoc>('document', {
		defaultUpdateDebounceMS: 1000
	});
	$: metas = Object.entries($localMetas);

	let currentId: string | undefined;
	let currentStore: Writable<IDoc> | undefined;

	function onCreate() {
		const [id, store] = create([]);
		currentId = id;
		currentStore = store;
	}
	function onDelete(id: string) {
		deleteLocal(id);
		if (id === currentId) {
			currentId = undefined;
			currentStore = undefined;
		}
	}
	function onSelect(id: string) {
		currentId = id;
		currentStore = fromLocal(id);
	}
	function onSetValue(event: CustomEvent<IDoc>) {
		if (currentStore) {
			currentStore.set(event.detail);
		}
	}
</script>

<Layout>
	<h3>Current Tasks {$localCacheTasks}</h3>
	<button on:click={onCreate}>Create new Doc</button>

	<ul>
		{#each metas as [id, meta] (id)}
			<li on:click={() => onSelect(id)}>
				<button>Id: {id} Updated: {new Date(meta.updated).toLocaleTimeString()}</button>
				<button on:click={() => onDelete(id)}>X</button>
			</li>
		{/each}
	</ul>

	{#if currentStore}
		<Editor value={$currentStore} on:value={onSetValue} />
	{/if}
</Layout>
