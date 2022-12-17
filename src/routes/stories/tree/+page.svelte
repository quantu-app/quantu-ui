<script>
	import Node from '$lib/components/tree/Node.svelte';

	const node = {
		id: '1',
		title: 'This is a very long title for a node',
		expanded: false,
		children: [
			{
				id: '2',
				title: 'Apples',
				expanded: false,
				children: []
			},
			{
				id: '3',
				title: 'Bananas',
				expanded: false,
				children: []
			},
			{
				id: '3',
				title: 'Oranges',
				expanded: false,
				children: []
			}
		]
	};
</script>

<div class="w-48 mx-auto border border-gray-600">
	<Node {node} expanded={true} />
</div>
