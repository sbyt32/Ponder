
<script lang="ts">
	import Header from '../lib/Header.svelte';
	import '../app.postcss';
	import Icon from '$lib/Logo.svelte'
	import { goto } from '$app/navigation';
</script>

<Header/>

<slot />

<!-- Footer -->
<footer class="fixed bottom-0 md:hidden container px-4 bg-slate-300">
	<Icon/>
</footer>