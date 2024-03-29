<svelte:options immutable />

<script lang="ts">
	import type { Question } from '$lib/openapi/quantu/models/Question';
	import SortDirection from '../SortDirection.svelte';
	import type { LocalQuestion } from '$lib/idb/IndexedDB';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { deleteQuestion } from '$lib/stores/questions';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';

	export let localQuizId: number;
	export let questions: LocalQuestion[];

	let sort: [key: keyof Question, order: number] | undefined;

	function createSort(name: keyof Question) {
		function sortBy(a: Question, b: Question): number {
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
			questions = [...questions].sort(sortBy);
		};
	}
	function createOnOpenQuestion(question: LocalQuestion) {
		return async () => {
			await goto(`${base}/quizzes/${localQuizId}/questions/${question.local_id}`);
		};
	}

	function createOnDelete(localId: number) {
		return async () => {
			let cont = window.confirm('Are you sure?');
			if (cont) {
				let _res = await deleteQuestion(localQuizId, localId);
			}
		};
	}
</script>

<a class="btn primary" href={`${base}/quizzes/${localQuizId}/questions/create`}>Create Question</a>

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
			<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1" />
		</tr>
	</thead>
	<tbody>
		{#each questions as question (question.local_id)}
			<tr class="hover:bg-gray-200 cursor-pointer" on:click={createOnOpenQuestion(question)}>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">{question.name}</td>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1"
					>{question.created_at.toLocaleString()}</td
				>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">
					<button on:click={createOnDelete(question.local_id)} class="btn danger p-1 w-8 h-8"
						><MdDelete /></button
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
