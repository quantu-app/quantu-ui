<svelte:options immutable />

<script lang="ts">
	import type { BaseEditor as SlateBaseEditor, BaseSelection, Selection } from 'slate';
	import type { ISvelteEditor } from 'svelte-slate';
	import BaseEditor from './BaseEditor.svelte';
	import type { HistoryEditor } from 'slate-history';
	import { createEventDispatcher } from 'svelte';

	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: any;
	export let selection: Selection | null = null;
	export let placeholder = 'Type...';
	export let editor: (SlateBaseEditor & ISvelteEditor & HistoryEditor) | undefined = undefined;
	export let autoFocus = false;
	export let readOnly = false;

	const dispatch = createEventDispatcher<{ value: any[]; selection: BaseSelection }>();

	$: if (!value || value.length === 0) {
		value = [{ type: 'paragraph', children: [{ text: '' }] }];
	}
	function onValue(e: CustomEvent<any[]>) {
		dispatch('value', e.detail);
	}
	function onSelection(e: CustomEvent<BaseSelection>) {
		dispatch('selection', e.detail);
	}
</script>

<BaseEditor
	{id}
	{name}
	bind:value
	bind:editor
	bind:selection
	on:value={onValue}
	on:selection={onSelection}
	{readOnly}
	{autoFocus}
	{placeholder}
/>
