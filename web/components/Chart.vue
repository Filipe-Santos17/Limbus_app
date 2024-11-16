<template>
    <ClientOnly>
        <div id="chart">
            <VueApexCharts 
                :type="typeChart" 
                height="350" 
                :options="tableData" 
                :series="series" 
            />
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import ChartDataProvider from '@/utils/dataTableProvider';

const chartDataProvider = new ChartDataProvider();

if (!chartDataProvider) {
    throw new Error('No ChartDataProvider found.');
}

const series = chartDataProvider.getSeries();
const tableData = chartDataProvider.getChartOptions();

defineProps({
    typeChart: {
        type: String,
        default: () => 'line'
    }
})
</script>