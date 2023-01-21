<svelte:options immutable />

<script lang="ts">
	import MdKeyboardArrowUp from 'svelte-icons/md/MdKeyboardArrowUp.svelte';
	import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte';

	export let sort = false;
	export let asc = true;
</script>

{#if sort}<span class="inline-block w-4 h-4"
		>{#if asc}<MdKeyboardArrowDown />{:else}<MdKeyboardArrowUp />{/if}</span
	>{/if}
