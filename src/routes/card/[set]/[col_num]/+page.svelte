<script lang="ts">
	import PriceHistory from '$lib/card_page/PriceHistory.svelte';
	import SaleTable from '$lib/card_page/SaleTable.svelte';
	import CardItem from '$lib/CardItem.svelte';
	import type { PageData } from './$types'
	import { page } from '$app/stores';
	export let data : PageData;

	let tabChoice = [
		//  #1 is a filler
		{
			name: "Card Info",
			component: PriceHistory,
			data_route: data.price
		},
		{
			name: "Card Price",
			component: PriceHistory,
			data_route: data.price
		},
		{
			name: "Card Sales",
			component: SaleTable,
			data_route: data.sale
		}
	]
	let currentTab = tabChoice[0]
</script>

<!-- ? So I don't actually have any images saved on the DB, should fix that. -->
	<div class="container grid grid-cols-3 mx-auto gap-5 relative shadow-md sm:rounded-lg">
		<div class="col-span-1 max-h-fit">
			<CardItem {...data.price.price_history[0]} {...data.price} id={$page.params.col_num}/>
		</div>
		<div class="col-span-2 w-full">
			<!-- * This will be the container for the side bar -->
				<!-- * These will be the tabs for price or card info and sale history -->
				<div class="grid grid-cols-3 gap-20 mx-auto px-20 bg-gray-200 rounded">
					{#each tabChoice as button}
						<button class="text-center rounded-t-lg bg-gray-100 text-gray-700 shadow-md active:bg-gray-500" on:click={() => currentTab = button}>{button.name}</button>						
					{/each}
				</div>
				<!-- * Main container area, changed by the top container -->
				<div class="">
					<svelte:component this={currentTab.component} data={currentTab.data_route}/>
				</div>
		</div>
	</div>
