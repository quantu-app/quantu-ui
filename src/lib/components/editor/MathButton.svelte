<script lang="ts">
	import type { Location } from 'slate';
	import { addEventListener, getEditorContext, getFocusedContext } from 'svelte-slate';
	import { isHotkey } from 'svelte-slate';
	import Button from './Button.svelte';
	import MdFunctions from 'svelte-icons/md/MdFunctions.svelte';
	import { isBlockActive } from 'svelte-slate/plugins/utils';
	import { insertMath, MATH_TYPE } from 'svelte-slate/plugins/MathElement.svelte';
	import MathEditor from 'svelte-slate/plugins/MathEditor.svelte';

	const editorContext = getEditorContext();
	const focusedContext = getFocusedContext();

	$: editor = $editorContext;
	$: focused = $focusedContext;
	$: active = isBlockActive(editor, MATH_TYPE);

	let at: Location | undefined;
	let open = false;
	let math = '';
	let inline = true;
	function onMouseDown() {
		at = editor.selection ? editor.selection.anchor || editor.selection.focus : undefined;
		math = '';
		inline = true;
		open = !open;
	}
	function onDone(math: string, inline: boolean) {
		insertMath(editor, math, inline, at);
	}

	addEventListener('onKeyDown', (e) => {
		if (isHotkey('ctrl+m', e)) {
			if (focused) {
				at = editor.selection ? editor.selection.anchor || editor.selection.focus : undefined;
				math = '';
				inline = true;
				open = true;
			} else {
				open = false;
			}
		}
	});
</script>

<MathEditor bind:open bind:math bind:inline {onDone} />

<Button {active} {onMouseDown}>
	<MdFunctions />
</Button>
