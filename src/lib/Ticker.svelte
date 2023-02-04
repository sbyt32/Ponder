<script>
    export let data;
</script>

<!-- <div class="ticker-wrap overflow-hidden h-fit box-content bg-black/80 border my-1 w-[100%]">
    <div class="ticker inline-block whitespace-nowrap pr-[100%] box-content text-white/80">
    {#each data as ticker}
        <div class="inline-block px-4 py-1">
            <span>{ticker.name} | ${ticker.prices.usd}</span>
        </div>
    {/each}
    </div>
</div> -->
<div class="ticker_wrapper">
    <div class="ticker">
        <div class="ticker__list">
        {#each data as ticker}
            <div class="mr-5">
                <a href="/card/{ticker.set}/{ticker.id}">
                    {ticker.name} | ${ticker.prices.usd}
                </a>
            </div>
        {/each}
        </div>
    </div>    
</div>


<style lang="postcss">
    /* * { box-sizing: border-box; }

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

.ticker {

-webkit-animation-iteration-count: infinite; 
        animation-iteration-count: infinite;
-webkit-animation-timing-function: linear;
        animation-timing-function: linear;
-webkit-animation-name: ticker;
        animation-name: ticker;
-webkit-animation-duration: 60s;
        animation-duration: 60s;
}    
div.ticker_item {

    display: inline-block;
    padding: 0 2rem;
    font-size: .6rem;
    color: rgb(0, 0, 0);   
} */
.ticker_wrapper {
    overflow: hidden;
}
.ticker {
    display: flex;
}

.ticker__list {
    display: flex;
    margin-top: 20px;
    -webkit-animation: ticker 30s linear infinite;
    animation: ticker 30s infinite linear;
    white-space: nowrap;
}

@keyframes ticker {
  to {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
  }
}

.ticker__list:hover {
    animation-play-state: paused;
}

</style>