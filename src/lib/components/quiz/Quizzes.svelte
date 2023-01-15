<svelte:options immutable />

<script lang="ts">
	import MdEdit from 'svelte-icons/md/MdEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import Modal from '../Modal.svelte';
	import CreateQuiz from './CreateQuiz.svelte';
	import type { Quiz } from '$lib/stores/quizzes';

	export let quizzes: Quiz[];

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

	let createQuizOpen = false;
	function onOpenCreateQuiz() {
		createQuizOpen = true;
	}
	function onCloseCreateQuiz() {
		createQuizOpen = false;
	}
</script>

<button class="btn primary" on:click={onOpenCreateQuiz}>Create Quiz</button>

<table class="table-auto w-full">
	<thead>
		<tr>
			<th
				class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
				on:click={createSort('name')}
				>Name {#if sort && sort[0] === 'name'}{#if sort[1] === 1}v{:else}^{/if}{/if}</th
			>
			<th
				class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1"
				on:click={createSort('created_at')}
				>Created At {#if sort && sort[0] === 'created_at'}{#if sort[1] === 1}v{:else}^{/if}{/if}</th
			>
			<th class="border-b dark:border-slate-600 cursor-pointer select-none text-left p-1" />
		</tr>
	</thead>
	<tbody>
		{#each quizzes as quiz (quiz.id)}
			<tr>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">{quiz.name}</td>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1"
					>{quiz.created_at.toLocaleString()}</td
				>
				<td class="border-b border-slate-100 dark:border-slate-700 p-1">
					<button class="btn icon primary"
						><div class="inline-block w-6 h-6"><MdEdit /></div></button
					>
					<button class="btn icon danger"
						><div class="inline-block w-6 h-6"><MdDelete /></div></button
					>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<Modal bind:open={createQuizOpen}>
	<CreateQuiz onCreate={onCloseCreateQuiz} />
</Modal>
