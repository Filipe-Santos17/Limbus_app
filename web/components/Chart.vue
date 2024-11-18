<template>
    <ClientOnly>
        <div id="chart">
            <VueApexCharts :type="typeChart" height="350" :options="tableData" :series="seriesChart" />
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import ChartDataProvider from '@/utils/dataChartProvider';
import type { iSeries } from "@/interfaces/chart_data_port";
import type { ApexOptions } from "apexcharts"


const { optionsChart, categories } = defineProps({
    typeChart: {
        type: String,
        default: () => 'line'
    },
    seriesChart: {
        type: Array<iSeries>,
        required: true,
        default: () => { }
    },
    categories:{
        type: Array<string>,
        required: true,
        default: () => []
    },
    optionsChart: {
        type: Object as PropType<ApexOptions>,
        required: true,
    }
})

const chartDataProvider = new ChartDataProvider();
const tableData = chartDataProvider.execute(optionsChart, categories);
</script>