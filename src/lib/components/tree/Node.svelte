<script lang="ts">
	import type { UINode } from '$lib/types';
	export let node: UINode;

	let hovering = false;
	let dragging = false;
	let dragTarget = false;
	let dragTargetNode;

	function openOptionsMenu() {
		console.log('TODO: [implement openOptionsMenu()]');
	}

	function openNewNodeMenu() {
		console.log('TODO: [implement openNewNodeMenu()]');
	}

	function dragStart(event: Event) {
		let content = event.target.innerHTML;
		dragging = true;
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/html', content);

		return false;
	}

	function dragEnd(event: Event) {
		event.preventDefault();
		dragging = false;
	}

	function expandNode(event: Event) {
		node.expanded = !node.expanded;
	}

	function dragOver(event: Event) {
		event.preventDefault();
		return false;
	}
	function dragLeave(event: Event) {
		dragTarget = false;
		dragTargetNode = null;
	}
	function dragEnter(event: Event) {
		dragTarget = true;
		dragTargetNode = event.target;
	}

	function dragDrop(event: Event) {
		event.stopPropagation();
		if (event.target !== dragTargetNode) {
			event.target.innerHTML = event.dataTransfer.getData('text/html');
		}
		return false;
	}
</script>

<div
	class="node-block-wrapper"
	class:border-t-4={dragTarget}
	class:border-indigo-500={dragTarget}
	draggable="true"
	on:dragover={dragOver}
	on:dragenter={dragEnter}
	on:dragleave={dragLeave}
	on:dragstart={dragStart}
	on:dragend={dragEnd}
	on:drop={dragDrop}
>
	<div
		class="node-block flex items-center w-full py-2 my-1 cursor-pointer"
		on:mouseenter={() => (hovering = true)}
		on:mouseleave={() => (hovering = false)}
	>
		<div
			class="node-expander w-[22px] h-[22px] flex flex-shrink-0 flex-grow-0 items-center justify-center"
			on:click={expandNode}
			on:keypress={expandNode}
		>
			{#if node.expanded}
				<svg viewBox="0 0 12 12" class="block w-[12px] h-[12px] opacity-100 flex-shrink-0">
					<path
						d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"
					/>
				</svg>
			{:else}
				<svg
					viewBox="0 0 12 12"
					class="block w-[12px] h-[12px] opacity-100 flex-shrink-0 rotate-[-90deg]"
				>
					<path
						d="M6.02734 8.80274C6.27148 8.80274 6.47168 8.71484 6.66211 8.51465L10.2803 4.82324C10.4268 4.67676 10.5 4.49609 10.5 4.28125C10.5 3.85156 10.1484 3.5 9.72363 3.5C9.50879 3.5 9.30859 3.58789 9.15234 3.74902L6.03223 6.9668L2.90722 3.74902C2.74609 3.58789 2.55078 3.5 2.33105 3.5C1.90137 3.5 1.55469 3.85156 1.55469 4.28125C1.55469 4.49609 1.62793 4.67676 1.77441 4.82324L5.39258 8.51465C5.58789 8.71973 5.78808 8.80274 6.02734 8.80274Z"
					/>
				</svg>
			{/if}
		</div>
		<div
			class="node-content flex flex-1 overflow-hidden text-ellipsis items-center"
			data-nodeId={node.id}
		>
			<div class="node-content--title text-ellipsis overflow-hidden whitespace-nowrap">
				<span class="node--title">{node.title}</span>
			</div>
		</div>
		<div class="node-manage flex items-center justify-center flex-shrink-0 flex-grow-0">
			{#if hovering}
				<div
					class="node-manage--optionsMenu w-[22px] h-[22px] flex flex-shrink-0 items-center justify-center border mx-1"
				>
					<button on:click={openOptionsMenu}>...</button>
				</div>
				<div
					class="node-manage--newNode w-[22px] h-[22px] flex flex-shrink-0 items-center justify-center border mx-1 "
				>
					<button on:click={openNewNodeMenu}>+</button>
				</div>
			{/if}
		</div>
	</div>
	{#if node.expanded}
		<div class="node-block--children ml-4">
			{#each node.children as child}
				<svelte:self node={child} />
			{/each}
		</div>
	{/if}
</div>
