<script lang="ts">
    import regionVal, { shopInfo }  from "$lib/shared/stores/region_data";
	import { error } from "@sveltejs/kit";
    import { fade } from 'svelte/transition'

    export let prices = {
        'usd' : 0,
        'usd_foil' : 0,
        'euro' : 0, 
        'euro_foil' : 0, 
        'tix' : 0       
    }
    
    export let set: string;
    export let id: string;
    export let name: string;
    export let set_full: string;

    const card_prices = [prices.usd,prices.euro,prices.tix]

    function parseCurrency(currency: number) {
        
        if ($regionVal === '3') {
            throw error
        }
        return new Intl.NumberFormat(shopInfo[parseInt($regionVal)].locale, { style: 'currency', currency: shopInfo[parseInt($regionVal)].currency }).format(currency)
    } 
    function parse_tix(tix: number) {
        if (tix == null) {
            return 0
        }
        return tix
    }
</script>

<div class="p-2 border-fuchsia-600/50 grid justify-center">
    <div class="text-center truncate">
        <h1 class="truncate">{name}</h1>
        <p class="text-black/50 truncate">{set_full}</p>
    </div>
    <div><a href='/card/{set}/{id}'><img src="/img/{set}_{id}.jpg" alt={name} height=80% width=80% class="mx-auto rounded-[.80rem] drop-shadow-xl shadow-lg"></a></div>
    <div class="grid grid-cols-2 my-2 gap-4">
        {#key regionVal}
            <button class="rounded {shopInfo[parseInt($regionVal)].colors.tw.store} transition duration-500">
                <a href="{shopInfo[parseInt($regionVal)].link}">
                    {parseCurrency(card_prices[parseInt($regionVal)])}
                </a>
            </button>
        {/key}            
        <button class="rounded {shopInfo[2].colors.tw.store}">{parse_tix(prices.tix)} TIX</button>    
    </div>
</div>
