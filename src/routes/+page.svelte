<script lang="ts">
	import CardItem from '$lib/CardItem.svelte';
	import type { PageData } from './$types';
	export let data: PageData
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit
	<a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<div class="container mx-auto pt-5 h-screen">
	<main>
		<div class="grid grid-cols-2 px-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
			<!-- {#each data.data as card}
				
			{/each} -->

			<CardItem {...data} card_name="Thalia"/>
			<!-- <CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/>
			<CardItem {...data.cardInfo}/> -->
		</div>
	</main>
</div>

