<template>
    <ClientOnly>
        <div id="chart">
            <VueApexCharts
                type="line"
                height="350"
                :options="tableData"
                :series="series"
            />
        </div>
    </ClientOnly>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import createTableProps from '@/utils/dataTable';

const { series, tableData } = createTableProps()
</script>