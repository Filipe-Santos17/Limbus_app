<template>
  <ContainerScreen>
    <template #content>
      <div class="flex items-center justify-between sm:flex-col">
        <hgroup class="py-6">
          <h2 class="text-caps-1 uppercase">
            Bem vindo de volta, <span class="text-[#b05b00]">filipe</span>!
          </h2>
        </hgroup>
        <ButtonComponent text="Baixar Relatórios" @click="handleClickBtnReport" class="bg-yellow-limbus-dark" />
      </div>
      <div>
        <hgroup
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1">
          <CardBoxItem v-for="box in dataBoxs" :text-header-card="box.title" :text-main-value="box.currentData" :icon="box.icon" :text-footer-card="box.pastData" />
        </hgroup>
        <section class="flex w-full gap-4 md:flex-col mt-4">
          <CardComponent title-card="Valor da pressão">
            <template #content-card>
              <ChartComponent type-chart="line" :categories="['a']" :series-chart="[series]"
                :options-chart="WaterCostsPerMonth" />
            </template>
          </CardComponent>
          <CardComponent title-card="Valores Gastos por hora" class="box-hide">
            <template #content-card>
              <TableComponent :columns="columns" :rows="rows" class="table-hide" />
            </template>
          </CardComponent>
        </section>
      </div>
    </template>
  </ContainerScreen>
</template>

<script setup lang="ts">
import CardBoxItem from "@/components/home/card_box_item.vue";
import ContainerScreen from "@/layouts/container.screen.vue";
import ChartComponent from "@/components/Chart.vue";
import CardComponent from "@/components/Card.vue";
import TableComponent from "@/components/Table.vue";
import ButtonComponent from "@/components/Button.vue"

import ApiProvider from "@/utils/apiProvider";
import URLS from "@/utils/urls";
import type { iDataHomeBoxs } from "@/interfaces/data_home";

//Icons
import IconPressao from "@/assets/svgs/home/icon-pressao.svg"
import IconVazao from "@/assets/svgs/home/icon-vazao.svg"
import IconNumeroSaidas from "@/assets/svgs/home/icon-numero-saidas.svg"
import IconPrecoMedio from "@/assets/svgs/home/icon-preco-medio.svg"

//Chart
import WaterCostsPerMonth from "@/utils/models/model_chart_water_costs_per_month";

//Header
import { provide } from 'vue'
import type { typeRowTablePort } from "~/interfaces/table_data_port";

provide('header-title', "home")

//API
const api = new ApiProvider()

//Btn Relatorio
function handleClickBtnReport(){
  window.print()
}

//Boxs
const dataBoxs = ref([
  {
    title: "Vazão da água",
    icon: IconPressao,
    currentData: 10.91,
    pastData: 10.18,
  },
  {
    title: "Pressão da água",
    icon: IconVazao,
    currentData: 0.0056533312,
    pastData: 0.00589311312,
  },
  {
    title: "Numero de saídas",
    icon: IconNumeroSaidas,
    currentData: 1,
    pastData: 1,
  },
  {
    title: "Valor mais alto",
    icon: IconPrecoMedio,
    currentData: 1,
    pastData: 0.3,
  }
]);

async function getDataBoxs() {
  const dataBoxs = await api.get(`${URLS.home}id`) as iDataHomeBoxs

  return [
    {
      title: "Vazão da água",
      icon: IconPressao,
      currentData: dataBoxs.WaterFlow.currentMonth,
      pastData: dataBoxs.WaterFlow.LastMonth,
    },
    {
      title: "Pressão da água",
      icon: IconVazao,
      currentData: dataBoxs.WaterPressure.currentMonth,
      pastData: dataBoxs.WaterPressure.LastMonth,
    },
    {
      title: "Numero de saídas",
      icon: IconNumeroSaidas,
      currentData: dataBoxs.numberDevices.currentMonth,
      pastData: dataBoxs.numberDevices.LastMonth,
    },
    {
      title: "Valor mais alto",
      icon: IconPrecoMedio,
      currentData: dataBoxs.OutputWaterPerMinute.currentMonth,
      pastData: dataBoxs.OutputWaterPerMinute.LastMonth,
    }
  ]
}

//Chart - back deve informar as categories e data das series
const series = ref({
  name: "Valor da pressão",
  data: [10]
})

//Tabela
const columns = [
  {
    name: "Pressão Média",
    field: "presMedio",
    label: "Pressão Média(Psi)",
  },
  {
    name: "Vazão Média",
    field: "condMedio",
    label: "Vazão Média(Litros p/min)",
  },
  {
    name: "Hora",
    field: "hora",
    label: "Hora",
  },
  // {
  //   name: "Preço Médio",
  //   field: "preco",
  //   label: "Preço Médio",
  // },
]

async function getDataTableChart() {
  const dataTable = await api.get(`${URLS.home}`) as typeRowTablePort[]

  const lastOneHundredItems = dataTable.slice(-100)
  const lastValues = lastOneHundredItems.map(i => i.pressao)

  series.value.data = lastValues
  rows.value = lastOneHundredItems
}

const rows = ref<typeRowTablePort[]>([])

async function initHome() {
  //dataBoxs.value = await getDataBoxs();
  await getDataTableChart();

  setInterval(async () => {
    await getDataTableChart();
  }, 3000)
}

onMounted(async () => {
  initHome()
})
</script>

<style scoped>
.box-hide{
  @apply h-[22.5rem] overflow-hidden;
}

.box-hide .table-hide{
  @apply max-h-[19rem] overflow-auto;
}

@media print {
  .box-hide, .table-hide{
    overflow: visible !important;
  }
}
</style>
