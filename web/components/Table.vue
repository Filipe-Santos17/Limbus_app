<template>
    <div>
        <table class="pt-4 pb-6 px-3 border rounded-md border-neutral-100 w-full h-full">
            <thead>
                <tr>
                    <th v-for="column in columns" :name="column.field">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import TableDataProvider from "@/utils/dataTableProvider"
import type { typeLinePort } from "@/interfaces/table_data_port";
import type { PropType } from "vue";

const TableProvider = new TableDataProvider()

defineProps({
    columns: {
        type:  Object as PropType<typeLinePort[]>,
        default: () => [],
    }
})
</script>

<style scoped>
table th {
    @apply text-black-20 text-sm not-italic font-semibold leading-5 tracking-[-0.28px];
    font-family: Quicksand;
}
</style>