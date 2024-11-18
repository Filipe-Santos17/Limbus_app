import type { iChartDataPort } from '@/interfaces/chart_data_port';
import type { ApexOptions } from "apexcharts"

export default class ChartDataProvider implements iChartDataPort<ApexOptions> {
  execute(dataChart: ApexOptions, categories: string[]) {
    const data = {
      ...dataChart,
      xaxis: {
        categories,
      }
    };

    return data;
  }
}