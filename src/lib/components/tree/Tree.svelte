<script lang="ts">
	import type { UINode } from '$lib/types';
	import Node from '$lib/components/tree/Node.svelte';
	import { writable } from 'svelte/store';

	export let nodes: UINode[];

	let root = writable(nodes);
</script>

{#each $root as node}
	<Node {node} {root} path={[node.id]} />
{/each}
