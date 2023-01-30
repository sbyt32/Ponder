<script lang="ts">
	import '../app.postcss';
	import Icon from '$lib/Logo.svelte'
	import { goto } from '$app/navigation';
	import { regionVal, shopInfo } from '$lib/region_data.js';

	let regionChoice = 0

	export function onKeyPress(e: KeyboardEvent, str: string) {
		if (e.code === 'Enter') goto(`/search/${str}`);
	}

	let searchQuery = '';
	function log_var(region: number) {
		regionVal.update(shop => region)
		console.log($regionVal);
}
</script>

<div class="grid
			grid-cols-4 
			md:grid-cols-5 
			lg:grid-cols-6 
			p-2
			gap-3
			top-0
			sticky
			z-50
			backdrop-blur-2
			bg-gradient-to-b from-indigo-600/60 via-indigo-500/60 to-transparent">
				<!-- Logo Stuff  -->
	<div class="hidden
				md:col-span-1
				md:block">  <!-- Not Sure why block works but not visible -->
		<Icon/>
	</div>
	<!-- Search Bar -->
	<input
		type="text"
		class="
		lg:col-span-4
		md:col-span-3
		col-span-3
		mt-1
		w-full
		rounded-md
		object-top
		bg-gray-100
		"
		bind:value={searchQuery}
		on:keydown={(event) => onKeyPress(event, searchQuery)}
	/>

	<!-- Shop Select -->
	<select
		class="
		col-span-1
		w-full
		mt-1
		rounded-md
		bg-gray-100
		border-transparent
		focus:border-gray-500 focus:bg-white focus:ring-0
	  	"
		bind:value={regionChoice}
		on:change={() => log_var(regionChoice)}
	>
		<option value=0 selected>🇺🇸</option>
		<option value=1>🇪🇺</option>
	</select>
</div>

