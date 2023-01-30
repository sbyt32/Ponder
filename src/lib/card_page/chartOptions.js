// @ts-nocheck
export const options = {
    responsive: true,
    plugins: {
        tooltip: {
            callbacks: {
                label: function() {
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
            }
        },
        legend: {
            position: 'bottom',
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
            time: {
                tooltipFormat: 'DD T'
            },
            title: {
                display: true,
                text: 'value'
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