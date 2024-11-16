import type ChartDataPort from '@/interfaces/chart_data_port';
import type { ApexOptions } from "apexcharts"

export default class ChartDataProvider implements ChartDataPort<ApexOptions> {
  constructor(
    //private readonly chartOptions: ApexOptions
  ) { }

  getSeries() {
    return [{
      name: "Gastos do mês",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }]
  }

  getChartOptions(): ApexOptions {
    const dataTable = {
      data: {
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
    } as ApexOptions;

    return dataTable;
  }
}