<script lang="ts">
	import { page } from '$app/stores';
	import LineGraph from '$lib/LineGraph.svelte';
	import CardItem from '$lib/CardItem.svelte';
	import type { PageData } from './$types'
	export let data : PageData;
</script>

<!-- ? So I don't actually have any images saved on the DB, should fix that. -->
	<div class="container grid grid-cols-3 mx-auto">
		<div class="col-span-1">
			<CardItem price_usd={data.price_history[0].usd}, price_eur={data.price_history[0].euro}, price_tix={data.price_history[0].tix}, card_name={data.name}/>
		</div>
		<div class="col-span-2 w-full">
			<!-- This will be the container for the side bar -->
			<div class="">
				<!-- These will be the tabs for price or card info and sale history -->
				<div class="grid grid-cols-3">
					<button class="text-center rounded bg-orange-400/80">Card Info</button>
					<button class="text-center rounded bg-orange-400/80">Card Price</button>
					<button class="text-center rounded bg-orange-400/80">Card Sales</button>
				</div>
				<!-- Main container area, changed by the top container -->
				<div>
					<LineGraph data={data}/>
				</div>
			</div>

		</div>
		
	</div>
