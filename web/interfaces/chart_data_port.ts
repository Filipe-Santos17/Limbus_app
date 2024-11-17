export default interface iChartDataPort<T> {
  getSeries(): { name: string; data: number[] }[];
  getChartOptions(): T;
}