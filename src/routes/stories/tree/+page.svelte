<script>
	import Tree from '$lib/components/tree/Tree.svelte';

	const nodes = [
		{
			id: '2',
			title: 'Apples',
			expanded: false,
			children: [
				{
					id: '14',
					title: 'Apple Pie',
					expanded: false,
					children: []
				},
				{
					id: '17',
					title: 'Macbook Pro',
					expanded: false,
					children: []
				}
			]
		},
		{
			id: '3',
			title: 'Bananas',
			expanded: false,
			children: [
				{
					id: '17',
					title: 'Banana Bread',
					expanded: false,
					children: []
				}
			]
		},
		{
			id: '4',
			title: 'Oranges',
			expanded: false,
			children: []
		}
	];
</script>

<div class="w-48 mx-auto border border-gray-600">
	<Tree {nodes} />
</div>
