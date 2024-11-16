import { ref } from "vue"

// const chartOptions = ref({
//     chart: {
//       type: 'bar',
//       height: 220,
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         borderRadius: 3,
//         columnWidth: 20,
//         endingShape: 'rounded',
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent'],
//     },
//     xaxis: {
//       categories: chartDataMonths.value, //aqui
//     },
//     grid: {
//       position: 'back',
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//       colors: ['#CC6900', '#FF9B32'],
//     },
//     tooltip: {
//       custom: function ({ series, seriesIndex, dataPointIndex, w }) {
//         const colorCircleOldYear = w.config.fill.colors[0]
//         const colorCircleCurrentYear = w.config.fill.colors[1]

//         const monthName = w.config.xaxis.categories[dataPointIndex]

//         return /* html */ `
//           <div class="flex flex-col w-[9.5rem] bg-white">
//             <div class="flex justify-between flex-nowrap items-center py-8 px-12 w-full border-b border-neutral-100/5">
//               <div class="flex gap-12 items-center">
//                 <span class="block rounded-full w-10 h-10" style="background-color: ${colorCircleOldYear}"></span>
//                 <p class="text-caps-3 text-neutral-60">
//                   ${monthName} / ${yearsFormated.value.last}
//                 </p>
//               </div>
//               <p class="text-headline-3 text-neutral-100">
//                 ${formatNumber(series[0][dataPointIndex])}
//               </p>
//             </div>
//             <div class="flex justify-between flex-nowrap items-center py-8 px-12 w-full">
//               <div class="flex gap-12 items-center">
//                 <span class="block rounded-full w-10 h-10" style="background-color: ${colorCircleCurrentYear}"></span>
//                 <p class="text-caps-3 text-neutral-60">
//                   ${monthName} / ${yearsFormated.value.current}
//                 </p>
//               </div>
//               <p class="text-headline-3 text-neutral-100">
//                 ${formatNumber(series[1][dataPointIndex])}
//               </p>
//             </div>
//           </div>
//         `
//       },
//     },
//   })


export default function createTableProps(){
    const series = [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]

    const tableData = {
        data: {
          
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }],
            chartOptions: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              }
            },
            
            
          },
    };

    return {tableData, series};
}