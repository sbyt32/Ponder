<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import CardItem from '$lib/CardItem.svelte';
	import { goto } from '$app/navigation';
	export let data: PageData;

</script>
<div class="container mx-auto pt-5 h-screen">

{#await data}
	<p>Searching for... {$page.params.searchQuery}</p>
	
{:then search_result}
	{#if search_result.data.length === 1}
	hi
		<!-- {() => goto(`card/${search_result.data[0].set}/${search_result.data[0].id}`)} -->

	{/if}
	<main>
		<header class="w-full">{search_result.data.length} search results for "{$page.params.searchQuery}"</header>
		<div class="grid grid-cols-2 px-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{#each search_result.data as card}
				<CardItem {...card}/>
			{/each}
		</div>
	</main>
{/await}

</div>
