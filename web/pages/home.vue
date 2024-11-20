<template>
  <ContainerScreen>
    <template #content>
      <hgroup class="py-6">
        <h2 class="text-caps-1 uppercase">
          Bem vindo de volta, <span class="text-[#b05b00]">filipe</span>!
        </h2>
      </hgroup>
      <div>
        <hgroup
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1">
          <CardBoxItem 
            v-for="box in dataBoxs" 
            :text-header-card="box.title" 
            :text-main-value="box.currentData"
            :icon="box.icon" 
            :text-footer-card="box.pastData" 
          />
        </hgroup>
        <section class="flex w-full gap-4 items-center justify-between flex-nowrap md:flex-col mt-4">
          <CardComponent title-card="Indice de gastos por mês">
            <template #content-card>
              <ChartComponent 
                type-chart="line" 
                :series-chart="[series]" 
                :categories="categories"
                :options-chart="WaterCostsPerMonth" 
              />
            </template>
          </CardComponent>
          <CardComponent title-card="Valores Gastos por hora">
            <template #content-card>
              <TableComponent 
                :columns="columns"  
                :rows="rows"
              />
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

provide('header-title', "home")

//API
const api = new ApiProvider()

//Boxs
const dataBoxs = ref();

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
const [series] = [
  {
    name: "Gastos do mês",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
]

const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

//Tabela
const columns = [
  {
    name: "Pressão Média",
    field: "presMedio",
    label: "Pressão Média",
  },
  {
    name: "Vazão Média",
    field: "condMedio",
    label: "Vazão Média",
  },
  {
    name: "Hora",
    field: "hora",
    label: "Hora",
  },
  {
    name: "Preço Médio",
    field: "preco",
    label: "Preço Médio",
  },
]

const rows = ref([
  {
    pressMedio: 10,
    condMedio: 10,
    hora: 200,
    preco: 20,
  }
])

async function initHome() {
  dataBoxs.value = await getDataBoxs();
}

onMounted(async () => {
  window.document.title = "Home"
  initHome()
})
</script>

<style scoped></style>
