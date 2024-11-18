export interface iSeries {
  name: string,
  data: number[]
}

export interface iChartDataPort<T> {
  execute(dataChart: ApexOptions, categories: string[]);
}