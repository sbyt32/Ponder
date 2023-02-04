<script lang="ts">
  // @ts-nocheck
    export let data;
    
</script>
<div class="max-h-[15rem] lg:max-h-[37.2rem] overflow-x-auto md:scrollbar shadow-md">
  <table class="w-full text-sm bg-white">
    <thead class="text-xs border-b sticky bg-white top-0">
        <tr>
            <th scope="col" class="px-6 py-3 text-left">
                Day
            </th>
            <th scope="col" class="px-6 py-3">
                Daily Sales
            </th>
            <th scope="col" class="px-6 py-3">
                Average Sale Price (USD)
            </th>
        </tr>
    </thead>
    <tbody>
        {#each data.data as sale}
        <tr class="bg-white border-b ">
          <th scope="row" class="px-6 py-4 text-left">
            {sale.day.substring(0,10)}
          </th>
          <td class="px-6 py-4 text-center">
            {sale.sales}
          </td>

          <td class="px-6 py-4 text-center">
              {Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(sale.avg_cost)}
          </td>
        </tr>
        {/each}
    </tbody>
</table>
</div>