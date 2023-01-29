
<script lang="ts">
	import '../app.postcss';
	import Icon from '$lib/Logo.svelte'
	import { goto } from '$app/navigation';

	export function onKeyPress(e: KeyboardEvent, str: string) {
		if (e.code === 'Enter') goto(`/search/${str}`);
	}

	let searchQuery = '';
</script>

<div class="grid
			grid-cols-4 
			md:grid-cols-5 
			lg:grid-cols-6 
			p-2 
			gap-3
			sticky
			top-0
			backdrop-blur-2 
			bg-gradient-to-r from-sky-300/70 to-fuchsia-400/70">
	<div class="md:col-span-1
	 			hidden
				md:block">  <!-- Not Sure why block works but not visible -->
		<Icon/>
	</div>
	<input
		type="text"
		class="
		lg:col-span-4
		md:col-span-3
		col-span-3
		mt-1
		block
		w-full
		rounded-md
		bg-gray-100
		border-transparent
		focus:border-gray-500 focus:bg-white focus:ring-0
		"
		bind:value={searchQuery}
		on:keydown={(event) => onKeyPress(event, searchQuery)}
	/>

	<select
		class="
		appearance-none
		col-span-1
		w-full
		mt-1
		rounded-md
		bg-gray-100
		border-transparent
		focus:border-gray-500 focus:bg-white focus:ring-0
	  	"
	>
		<option>USA</option>
		<option>UK</option>
	</select>
</div>

<slot />

<!-- Footer -->
<footer class="fixed bottom-0 md:hidden container px-4 bg-slate-300">
	<Icon/>
</footer>