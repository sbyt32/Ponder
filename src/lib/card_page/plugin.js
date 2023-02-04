// @ts-ignore
// import { Legend } from "chart.js";


// @ts-ignore
const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    // @ts-ignore
    let listContainer = legendContainer.querySelector('ul');

    if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'flex';
        listContainer.style.flexDirection = 'row';
        // @ts-ignore
        listContainer.style.margin = 0;
        // @ts-ignore
        listContainer.style.padding = 0;

        // @ts-ignore
        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};


export const htmlLegendPlugin = {
    id: 'htmlLegend',
    // @ts-ignore
    afterUpdate(chart, args, options) {
      const ul = getOrCreateLegendList(chart, options.containerID);
  
      // Remove old legend items
      while (ul.firstChild) {
        ul.firstChild.remove();
      }
  
      // Reuse the built-in legendItems generator
      const items = chart.options.plugins.legend.labels.generateLabels(chart);
  
      ul.classList.add('container', 'mx-auto', 'pt-5',)
      // @ts-ignore
      items.forEach(item => {
        const li = document.createElement('li');
        li.style.alignItems = 'center';
        li.style.cursor = 'pointer';
        li.style.display = 'flex';
        li.style.flexDirection = 'row';
        li.style.marginLeft = '10px';
        li.style.transitionDelay = 200;
        li.classList.add()

        li.onclick = () => {
          const {type} = chart.config;
          if (type === 'pie' || type === 'doughnut') {
            // Pie and doughnut charts only have a single dataset and visibility is per item
            chart.toggleDataVisibility(item.index);
          } else {
            chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
          }
          chart.update();
        };
  
        // Color box
        const boxSpan = document.createElement('span');
        boxSpan.style.background = item.fillStyle;
        boxSpan.style.borderColor = item.strokeStyle;
        boxSpan.style.borderWidth = item.lineWidth + 'px';
        boxSpan.style.display = 'inline-block';
        boxSpan.style.height = '20px';
        boxSpan.style.marginRight = '10px';
        boxSpan.style.width = '20px';
  
        // Text
        const textContainer = document.createElement('p');
        textContainer.style.color = item.fontColor;
        // @ts-ignore
        textContainer.style.margin = 0;
        // @ts-ignore
        textContainer.style.padding = 0;
        textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
  
        const text = document.createTextNode(item.text);
        textContainer.appendChild(text);
  
        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    }
  };