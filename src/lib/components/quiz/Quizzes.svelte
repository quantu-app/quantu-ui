<svelte:options immutable />

<script lang="ts">
	import CreateQuiz from './CreateQuiz.svelte';
	import UpdateQuiz from './UpdateQuiz.svelte';
	import type { Quiz } from '$lib/openapi/quantu/models/Quiz';
	import SortDirection from '../SortDirection.svelte';
	import type { LocalQuiz } from '$lib/idb/IndexedDB';
	import { deleteQuiz } from '$lib/stores/quizzes';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import MdEdit from 'svelte-icons/md/MdEdit.svelte';
	import { base } from '$app/paths';

	export let quizzes: LocalQuiz[];

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

	function onUpdateQuizClose() {
		editQuizName = '';
		editQuizLocalId = -1;
		editQuizOpen = false;
	}

	function createOnDelete(localId: number) {
		return async () => {
			let cont = window.confirm('Are you sure?');
			if (cont) {
				let _res = await deleteQuiz(localId);
			}
		};
	}

	let editQuizLocalId: number;
	let editQuizName: string;
	let editQuizOpen: boolean = false;
	function createOnUpdateQuizOpen(localId: number, name: string) {
		return () => {
			editQuizName = name;
			editQuizLocalId = localId;
			editQuizOpen = true;
		};
	}
</script>

<CreateQuiz />

<UpdateQuiz
	name={editQuizName}
	localId={editQuizLocalId}
	open={editQuizOpen}
	onClose={onUpdateQuizClose}
/>

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
		{#each quizzes as quiz (quiz.local_id)}
			<tr class="hover:bg-gray-200 cursor-pointer">
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">
					<a href={`${base}/quizzes/{quiz.local_id}`}>{quiz.name}</a>
				</td>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1"
					>{quiz.created_at.toLocaleString()}</td
				>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">
					<button on:click={createOnDelete(quiz.local_id)} class="btn danger p-1 w-8 h-8"
						><MdDelete /></button
					>
					<button
						on:click|preventDefault={createOnUpdateQuizOpen(quiz.local_id, quiz.name)}
						class="btn primary p-1 w-8 h-8"><MdEdit /></button
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
