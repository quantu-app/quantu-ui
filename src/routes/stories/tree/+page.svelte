<script>
	import Node from '$lib/components/tree/Node.svelte';

	const node = {
		id: '1',
		title: 'This is a very long title for a node',
		children: [
			{
				id: '2',
				title: 'Short and simple',
				children: []
			}
		]
	};
</script>

<div class="w-48 mx-auto border border-gray-600">
	<Node {node} expanded={true} />
</div>
