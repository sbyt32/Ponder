<script>
  export let data;
</script>
<div class="overflow-hidden w-full">
  <div class="ticker">
    {#each data as ticker}
      {#if !(ticker.prices.usd == null)}
      <span class="pr-4">
        {ticker.name} | ${ticker.prices.usd}
      </span>
      {/if}
    {/each}
</div>

</div>

<style lang="postcss">
.ticker {
  color: black;
  display: inline-block !important;
  /* box-sizing: content-box; */
  white-space: nowrap;

  transform: translate3d(0,0,0);
  /* padding-right: 100%; */
  /* -webkit-animation: ticker 10s linear infinite;
  animation: ticker 10s linear infinite; */
  animation-duration: 30s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  /* animation-direction: normal; */
  animation-timing-function: linear;
  animation-name: ticker_move;
}

.ticker:hover {
  animation-play-state: paused;
}
@keyframes ticker_move {
  0%   { 
      transform: translateX(0%); 
  }
  100% {
      transform: translateX(-50%);
  }
}
</style>
<!-- <style lang="postcss">
div {
  --duration: 10s;
  /* box-sizing: border-box; */
}

.ticker_wrapper {
    padding-left: 100%;
    overflow: hidden;
    box-sizing: content-box;
    width: 100vh;
}


.ticker_wrapper .ticker_list {
    display: inline-block;
    box-sizing: content-box;
    /* -webkit-animation: ticker var(--duration) linear infinite;
    animation: ticker var(--duration) infinite linear; */
    white-space: nowrap;
    /* overflow: hidden; */
    padding-right: 100%;
    -webkit-animation-iteration-count: infinite; 
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
   -webkit-animation-name: ticker;
           animation-name: ticker;
    -webkit-animation-duration: var(--duration);
            animation-duration: var(--duration);
}

.ticker_list .ticker_item {
    display: inline-block;
    padding: 0 1rem;
    color: white;
    /* box-sizing: content-box; */
    /* white-space: nowrap; */
    /* overflow: inherit;
    white-space: inherit;
    -webkit-animation-timing-function: inherit;
    animation-iteration-count: infinite; */

}

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

.ticker_list:hover {
    animation-play-state: paused;
}

</style> -->