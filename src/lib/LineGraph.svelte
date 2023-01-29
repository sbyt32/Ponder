<script>
// @ts-nocheck

    export let data;
    import { Line } from 'svelte-chartjs'

// Chart Stuff
    import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
  } from 'chart.js';

    ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
  );
    const chart_shit = {
        lineTension: 0.3,
        backgroundColor: 'rgba(225, 204,230, .3)',
        borderColor: 'rgb(205, 130, 158)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10
    }

function parsePriceData(price_data) {
    let labels = []
    let datasets = [
        {
            label: "USD",
            data: [] 
        },
        {
            label: "USD FOIL",
            data: [] 
        },
        {
            label: "EURO",
            data: [] 
        },
        {
            label: "EURO",
            data: [] 
        },
        {
            label: "TICKETS",
            data: []
        },
    ]

    for (let i = 0; i < price_data.price_history.length; i++) {
            labels.push(price_data.price_history[i].date);
            datasets[0].data.push(price_data.price_history[i].usd)
            datasets[1].data.push(price_data.price_history[i].usd_foil)
            datasets[2].data.push(price_data.price_history[i].euro)
            datasets[3].data.push(price_data.price_history[i].euro_foil)
            datasets[4].data.push(price_data.price_history[i].tix)
    }


    for (let i = 0; i < datasets.length; i++) {
        datasets[i] = {
            ...datasets[i],
            ...chart_shit
        }
    }

    const processed_price_data = {
        labels,
        datasets
    }

    return processed_price_data
}

let new_price_data = parsePriceData(data)
</script>

<Line data={new_price_data} options={{ responsive: true }}/>