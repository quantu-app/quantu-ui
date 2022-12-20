<script lang="ts">
	import type { UINode } from '$lib/types';
	import { insert_hydration_dev } from 'svelte/internal';
	import type { Writable } from 'svelte/store';

	export let node: UINode;
	export let path: string[];
	export let root: Writable<UINode[]>;

	let hovering = false;
	let dragging = false;
	let dragSourcePath: string | undefined = undefined;
	let dragTargetPath: string | undefined = undefined;
	const stringPath: string = path.join('.');

	const openOptionsMenu = (event: Event) => {};
	const openNewNodeMenu = (event: Event) => {};

	function dragStart(event: Event) {
		dragSourcePath = event.target?.dataset.path;
		dragTargetPath = undefined;
		dragging = true;

		event.dataTransfer.setData('text', dragSourcePath);
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
		let elem = event.target;
		let nodeWrapper = elem.closest('.node-block-wrapper');
		dragTargetPath = nodeWrapper.dataset.path;
	}
	function dragLeave(event: Event) {}
	function dragEnter(event: Event) {}

	function insertNode(nodes: UINode[], ids: string[], newNode: UINode): any {
		for (let k = 0; k < ids.length; k++) {
			const id = ids[k];

			for (let j = 0; j < nodes.length; j++) {
				const node = nodes[j];

				if (id === node.id) {
					if (k === ids.length - 1) {
						// end of search
						return nodes.splice(k, 0, newNode);
					} else {
						if (node.children.length > 0) {
							const nextIds = ids.slice(k + 1);
							return insertNode(node.children, nextIds, newNode);
						} else {
							// we have more ids but no children in tree
							throw Error('invalid insertion index');
						}
					}
				}
			}
		}
	}

	function extractNode(nodes: UINode[], ids: string[]): UINode | null {
		if (nodes.length === 0) {
			return null;
		}

		for (let k = 0; k < ids.length; k++) {
			const id = ids[k];

			for (let j = 0; j < nodes.length; j++) {
				const node = nodes[j];

				if (id === node.id) {
					if (k === ids.length - 1) {
						// end of search
						return nodes.splice(j, 1)[0];
					} else {
						if (node.children.length > 0) {
							const nextIds = ids.slice(k + 1);
							return extractNode(node.children, nextIds);
						} else {
							// we have more ids but no children in tree
							return null;
						}
					}
				}
			}
		}

		return null;
	}

	function dragDrop(event: Event) {
		event.preventDefault();
		dragSourcePath = event.dataTransfer.getData('text');
		if (dragTargetPath && dragSourcePath && dragTargetPath !== dragSourcePath) {
			root.update((nodes) => {
				const sourceIds = dragSourcePath.split('.');
				const targetIds = dragTargetPath.split('.');
				let movedNode: UINode | null = null;

				// level one
				movedNode = extractNode(nodes, sourceIds);
				insertNode(nodes, targetIds, movedNode);

				return nodes;
			});
		}
		return false;
	}
</script>

<div
	class="node-block-wrapper"
	draggable="true"
	data-path={stringPath}
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
			{#each node.children as childNode}
				<svelte:self path={[...path, childNode.id]} node={childNode} {root} />
			{/each}
		</div>
	{/if}
</div>
