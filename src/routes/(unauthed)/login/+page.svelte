<svelte:options immutable />

<script lang="ts">
	import { goto } from '$app/navigation';
	import Layout from '$lib/components/Layout.svelte';
	import { signIn } from '$lib/stores/user';

	let email: string;
	let password: string;

	async function onSubmit() {
		await signIn(email, password);
		await goto('/');
	}
</script>

<div class="max-w-xs m-auto">
	<form on:submit={onSubmit}>
		<input type="email" class="mb-1" placeholder="Email" bind:value={email} />
		<input type="password" class="mb-1" placeholder="Password" bind:value={password} />
		<input type="submit" class="btn primary" value="Login" disabled={!email || !password} />
	</form>
</div>
