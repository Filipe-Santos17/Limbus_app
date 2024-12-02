<template>
    <div>
        <table class="mt-4 px-3 border rounded-md border-neutral-100 w-full h-full overflow-auto max-h-full">
            <thead>
                <tr>
                    <th v-for="column in columns" :name="column.field">
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="line in rows">
                    <td>{{ line.pressao }}</td>
                    <td>{{ line.vazao }}</td>
                    <td>{{ convertDateTime(line.data) }}</td>
                    <!-- <td>{{ line.preco }}</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import type { typeLinePort, typeRowTablePort } from "@/interfaces/table_data_port";
import type { PropType } from "vue";

function convertDateTime(date: Date){
    return new Date(date).toISOString().split("T")[1].split(".")[0]
}

defineProps({
    columns: {
        type:  Object as PropType<typeLinePort[]>,
        default: () => [],
    },
    rows: {
        type:  Array<typeRowTablePort>,
        default: () => [],
    }
})
</script>

<style scoped>
table th {
    @apply text-black-20 text-sm not-italic font-semibold leading-5 tracking-[-0.28px];
    font-family: Quicksand;
}

table th,td{
    @apply border text-center;
}
</style>