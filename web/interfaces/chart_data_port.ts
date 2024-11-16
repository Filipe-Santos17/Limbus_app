export default interface ChartDataPort<T> {
  getSeries(): { name: string; data: number[] }[];
  getChartOptions(): T;
}