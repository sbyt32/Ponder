<script lang="ts">
    // Note: Typing them as "number" returns an error on file somewhere
    export let price_usd: any;
    export let price_eur: any; 
    export let price_tix: any;
    export let card_name: string;
</script>

<div class="p-2 border border-fuchsia-600/50">
    <a href="/card/vow/38"><img src="/" alt={card_name} height="485.5" width="385"></a>
    <div class="grid grid-cols-3 my-2 gap-2">
        <button class="rounded-none bg-lime-600">${(price_usd)}</button>
        <button class="rounded-none bg-sky-600">€{price_eur}</button>    
        <button class="rounded-none bg-orange-600">{price_tix}</button>    
    </div>
</div>
