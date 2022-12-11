<svelte:options immutable />

<script lang="ts">
	import Notifications from './Notifications.svelte';
</script>

<div class="flex flex-col w-full h-full relative overflow-hidden">
	<slot />
</div>

<Notifications />
