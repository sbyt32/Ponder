<script lang="ts">
  // @ts-nocheck
    export let data;
    // console.log(data)
</script>

<div class="max-h-[37.2rem] overflow-x-auto scrollbar">
  <table class="w-full text-sm text-gray-500 dark:text-gray-400 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Day
            </th>
            <th scope="col" class="px-6 py-3">
                Sales
            </th>
            <th scope="col" class="px-6 py-3">
                Average Sale Price
            </th>
            <th scope="col" class="px-6 py-3">
              asd
            </th>
        </tr>
    </thead>
    <tbody>
      {#each data.data as sale}
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-left">
          {sale.day.substring(0,10)}
        </th>
        <td class="px-6 py-4">
          {sale.sales}
        </td>
        <td class="px-6 py-4">
          {sale.avg_cost}
        </td>
        <td class="px-6 py-4">
          {sale.avg_cost}
        </td>
      </tr>
      {/each}
    </tbody>
</table>
</div>