<script lang="ts">
	import CardItem from '$lib/CardItem.svelte';
	import Ticker from '$lib/Ticker.svelte';
	import type { PageData } from './$types';
	export let data : PageData
</script>

<h1 class="pt-2 text-xl text-center">Ponder</h1>
<h3 class="text-center"><p>
	Visit
</p></h3>

<!-- <div style="overflow: hidden"> -->
	<Ticker data={data.data}></Ticker>
<!-- </div> -->

<div class="container mx-auto pt-5 h-screen">
	<main>
		<div class="grid grid-cols-2 px-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
			{#each data.data as card}
				<CardItem {...card}/>
			{/each}
		</div>
	</main>
</div>

