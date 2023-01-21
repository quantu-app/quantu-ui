<svelte:options immutable />

<script lang="ts">
	import MdEdit from 'svelte-icons/md/MdEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import CreateQuiz from './CreateQuiz.svelte';
	import type { Quiz } from '$lib/openapi/quantu/models/Quiz';
	import SortDirection from '../SortDirection.svelte';
	import type { LocalSchema } from '$lib/idb/IndexedDB';

	export let quizzes: LocalSchema<Quiz>[];

	let sort: [key: keyof Quiz, order: number] | undefined;

	function createSort(name: keyof Quiz) {
		function sortBy(a: Quiz, b: Quiz): number {
			if (sort && sort[1] === -1) {
				return a[name] < b[name] ? -1 : 1;
			} else {
				return a[name] > b[name] ? -1 : 1;
			}
		}
		return () => {
			if (sort && sort[0] === name) {
				sort = [name, -sort[1]];
			} else {
				sort = [name, 1];
			}
			quizzes = [...quizzes].sort(sortBy);
		};
	}
</script>

<CreateQuiz />

<table class="table-auto w-full">
	<thead>
		<tr>
			<th
				class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
				on:click={createSort('name')}
				>Name <SortDirection sort={sort && sort[0] === 'name'} asc={sort && sort[1] === 1} />
			</th>
			<th
				class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
				on:click={createSort('created_at')}
				>Created At <SortDirection
					sort={sort && sort[0] === 'created_at'}
					asc={sort && sort[1] === 1}
				/></th
			>
		</tr>
	</thead>
	<tbody>
		{#each quizzes as quiz (quiz.local_id)}
			<tr class="hover:bg-gray-200 cursor-pointer">
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">{quiz.name}</td>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1"
					>{quiz.created_at.toLocaleString()}</td
				>
			</tr>
		{/each}
	</tbody>
</table>
