// @ts-nocheck
export const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';

                    if (label){
                        label += ': ';
                    }
                    if (context.datasetIndex == 0 || context.datasetIndex == 1) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    } else if (context.datasetIndex == 2 || context.datasetIndex == 3) {
                        label += new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(context.parsed.y);
                    } else {
                        label += `${context.parsed.y} TIX`
                    }
                    return label;
                }
            },
            intersect: false
        },
        title: {
            display: true,
            text: 'Price History'
        },
        legend: {
            display: false
        },
        htmlLegend: {
            containerID: 'legend-container'
        }
    },
    interaction: {
        mode: 'index'
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Date'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Price'
            }
        }
    }
}