<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import  regionVal, { shopInfo } from '$lib/shared/stores/region_data';
    import { options } from '$lib/card_page/chartOptions.js';
    import { htmlLegendPlugin } from '$lib/card_page/plugin.js'
    import { Line } from 'svelte-chartjs';

    export let data;
// Chart Stuff
    import {
    Chart as ChartJS,
    Title,
    Legend,
    Tooltip,
    BarElement,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
    LineController,
    BarController,
    } 
    from 'chart.js';

    ChartJS.register(
    Title,
    Legend,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    LineController,
    BarController
    );
    // import 'chart.js/auto';

    const chart_shit = {
        // lineTension: 0.3,
        // borderCapStyle: 'butt',
        // borderDash: [],        
        // borderDashOffset: 0.0,
        // borderJoinStyle: 'miter',
        // pointBorderColor: 'rgb(205, 130,1 58)',
        // pointBorderWidth: 1.5,
        // pointHoverRadius: 5,
        // pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        // pointHoverBorderWidth: 1.5,
        // pointRadius: 2.5,
        // pointHitRadius: 10,
    }



function parsePriceData(price_data) {
    let labels = []
    let datasets = [
        {
            label: "USD",
            borderColor: shopInfo[0].colors.rgb.store,
            backgroundColor: 'rgba(77,124,15, .5)',
            data: [] 
        },
        {
            label: "USD (Foil)",
            borderColor: 'rgb(255, 99, 132)', // To Update
            data: [] 
        },
        {
            label: "Euro",
            borderColor:  shopInfo[1].colors.rgb.store,
            backgroundColor: 'rgba(2, 132, 199, .5)',
            data: [] 
        },
        {
            label: "Euro (Foil)",
            borderColor: 'rgb(255, 99, 132)', // To Update
            data: [] 
        },
        {
            label: "Tickets",
            borderColor: shopInfo[2].colors.rgb.store,
            data: []
        },
    ]



    for (let i = 0; i < price_data.data.length; i++) {
            labels.push(price_data.data[i].date);
            datasets[0].data.push(price_data.data[i].prices.usd)
            datasets[1].data.push(price_data.data[i].prices.usd_foil)
            datasets[2].data.push(price_data.data[i].prices.euro)
            datasets[3].data.push(price_data.data[i].prices.euro_foil)
            datasets[4].data.push(price_data.data[i].prices.tix)
    }

    for (let i = 0; i < datasets.length; i++) {
        if (datasets[i].data.length === 0) {
            datasets[i] += {hidden: true}
            console.log(datasets[i]);
        }
    }

    for (let i = 0; i < datasets.length; i++) {
        if (!datasets[i].data.length == 0 ) {
            datasets[i] = {
                ...datasets[i],
                ...chart_shit
        }
        } 
    }

    const processed_price_data = {
        labels,
        datasets
    }

    return processed_price_data
}

    function setPrice(chart, region) {
        const tooltip = chart && chart.tooltip;

        if (!tooltip) {
            return
        }

        if (region == 0) {
            chart.hide(2)
            chart.hide(3)
            setTimeout(() => {
            chart.show(0)
            chart.show(1)
            }, 900);

        } else {
            chart.hide(0)
            chart.hide(1)
            setTimeout(() => {
            chart.show(3)
            chart.show(2)            
            }, 900);
        }

        // chart.update();

        
    }

    let chart;
    onMount(() => {
        setPrice(chart, $regionVal)
    })
    $: {setPrice(chart, $regionVal)}

</script>
<div id="legend-container" class="pt-3">
</div>

<Line data={parsePriceData(data)} options={options} bind:chart plugins={[htmlLegendPlugin]}/>