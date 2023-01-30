<script lang="ts">
    import { regionVal, shopInfo } from "$lib/region_data.js";
	import { error } from "@sveltejs/kit";

    export let usd: number = 0;
    export let euro: number = 0; 
    export let tix: number = 0;
    export let set: string;
    export let id: string;
    export let name: string;

    const card_prices = [usd,euro,tix]

    function parseCurrency(currency: number) {
        if ($regionVal === 3) {
            throw error
        }

        return new Intl.NumberFormat(shopInfo[$regionVal].locale, { style: 'currency', currency: shopInfo[$regionVal].currency }).format(currency)
    } 
</script>

<div class="p-2 border-fuchsia-600/50 grid justify-center">
    <div class="text-center truncate">{name}</div>
    <div><a href='/card/{set}/{id}'><img src="/img/{set}_{id}.jpg" alt={name} height=80% width=80% class="mx-auto rounded-[.80rem] drop-shadow-xl shadow-lg"></a></div>
    <div class="grid grid-cols-2 my-2 gap-4">
        {#key regionVal}
            <button class="rounded {shopInfo[$regionVal].colors.tw.store}">
                <a href="{shopInfo[$regionVal].link}">
                    {parseCurrency(card_prices[$regionVal])}
                </a>
            </button>
        {/key}            
        <button class="rounded {shopInfo[2].colors.tw.store}">{tix} TIX</button>    
    </div>
</div>
