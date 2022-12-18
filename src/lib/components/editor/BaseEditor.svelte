<svelte:options immutable />

<script lang="ts" context="module">
	const HOTKEYS = {
		'mod+b': 'bold',
		'mod+i': 'italic',
		'mod+u': 'underline',
		'mod+`': 'code'
	};
</script>

<script lang="ts">
	import { isHotkey, withSvelte } from 'svelte-slate';
	import Slate from 'svelte-slate/plugins/Slate.svelte';
	import Editable from 'svelte-slate/plugins/Editable.svelte';
	import { createEditor, type BaseSelection } from 'slate';
	import { withHistory } from 'slate-history';
	import { DEFAULT_PLUGINS } from 'svelte-slate/plugins/DEFAULT_PLUGINS';
	import ImageElement, { IMAGE_TYPE, withImages } from 'svelte-slate/plugins/ImageElement.svelte';
	import CodeElement, { CODE_TYPE, withCode } from 'svelte-slate/plugins/CodeElement.svelte';
	import HoveringToolbar from 'svelte-slate/plugins/HoveringToolbar.svelte';
	import { toggleMark } from 'svelte-slate/plugins/utils';
	import MathElement, { MATH_TYPE, withMath } from 'svelte-slate/plugins/MathElement.svelte';
	import Toolbar from './Toolbar.svelte';
	import { createEventDispatcher } from 'svelte';

	export let id: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let value: any[] = [
		{
			type: 'paragraph',
			children: [{ text: '' }]
		}
	];
	export let selection: BaseSelection | null = null;
	export let readOnly = false;
	export let autoFocus = false;
	export let placeholder = 'Type...';
	export let editor = withHistory(withSvelte(createEditor()));

	let plugins = {
		...DEFAULT_PLUGINS,
		[IMAGE_TYPE]: { component: ImageElement, withFn: withImages },
		[CODE_TYPE]: { component: CodeElement, withFn: withCode },
		[MATH_TYPE]: { component: MathElement, withFn: withMath }
	};

	let ref: HTMLDivElement;
	const dispatch = createEventDispatcher<{ value: any[]; selection: BaseSelection }>();

	function onKeyDown(event: KeyboardEvent) {
		Object.entries(HOTKEYS).forEach(([hotkey, mark]) => {
			if (isHotkey(hotkey, event)) {
				event.preventDefault();
				toggleMark(editor, mark);
			}
		});
	}
	function onValue(e: CustomEvent<any[]>) {
		dispatch('value', e.detail);
	}
	function onSelection(e: CustomEvent<BaseSelection>) {
		dispatch('selection', e.detail);
	}
</script>

<Slate
	bind:editor
	bind:selection
	bind:value
	on:value={onValue}
	on:selection={onSelection}
	{plugins}
>
	<HoveringToolbar container={ref}>
		<Toolbar />
	</HoveringToolbar>
	<div class="flex flex-grow" {id} {name}>
		<Editable
			bind:ref
			class="flex flex-grow flex-col"
			{autoFocus}
			{readOnly}
			{placeholder}
			{onKeyDown}
		/>
	</div>
</Slate>
