<template>
  <ContainerScreen>
    <template #content>
      <div class="h-[calc(100vh-2.5rem)] grid grid-rows-2 md:h-full">
        <section class="container-charts py-4">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent type-chart="line" :categories="categories" :series-chart="[seriesContaDeLuz]"
                :options-chart="WaterCostsPerMonth" />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <ChartComponent type-chart="bar" :categories="categories" :series-chart="[seriesIncidentesPorMes]"
                :options-chart="IncidentsPerMonth" />
            </template>
          </CardComponent>
        </section>
        <section class="container-charts pb-4">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent type-chart="donut" :categories="[]" :series-chart="[4, 1]"
                :options-chart="EquipmentsWorking" />
            </template>
          </CardComponent>
          <CardComponent title-card="Horário de maior gasto">
            <template #content-card>
              <ChartComponent type-chart="bar" :categories="categoriesHorarios"
                :series-chart="[seriesHorariosMaiorGastos]" :options-chart="PeakSpendingTime" />
            </template>
          </CardComponent>
          <div class="min-w-[300px] flex flex-col mb-auto md:flex-row md:w-full gap-2">
            <CardComponent title-card="Pressão médio">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  0.006625
                </p>
              </template>
            </CardComponent>
            <CardComponent title-card="Vazão média">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  0.006534
                </p>
              </template>
            </CardComponent>
            <CardComponent title-card="Preço médio">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  1
                </p>
              </template>
            </CardComponent>
          </div>
        </section>
      </div>
    </template>
  </ContainerScreen>
</template>

<script setup>
import ContainerScreen from "@/layouts/container.screen.vue";
import ChartComponent from "@/components/Chart.vue";
import CardComponent from "@/components/Card.vue";
import ApiProvider from "@/utils/apiProvider";

//Chart 1
import WaterCostsPerMonth from "@/utils/models/model_chart_water_costs_per_month";

//Chart 2
import IncidentsPerMonth from "@/utils/models/model_chart_incidents per month";

//Chart 3
import EquipmentsWorking from "@/utils/models/model_chart_equipment_working";

//Chart 4
import PeakSpendingTime from "@/utils/models/model_chart_peak_spending_time";

//Header
import { provide } from 'vue'

provide('header-title', "dashboards")

const api = new ApiProvider()

//Charts
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dez']

const categoriesHorarios = Array.from({ length: 24 }, (_, i) => {
  const hour = i.toString().padStart(2, '0');
  return `${hour}:00`;
});



//Charts 1
const [seriesContaDeLuz] = [
  {
    name: "Número de incidentes por mês",
    data: [423, 297, 365, 386, 416, 275, 483, 375, 280, 441, 298, 315]
  }
]

//Charts 2
const [seriesIncidentesPorMes] = [
  {
    name: "Gastos de Água por mês",
    data: [10, 11, 15, 10, 21, 12, 19, 9, 14, 7, 5, 4]
  }
]

const [seriesHorariosMaiorGastos] = [
  {
    name: "Gastos de Água por mês",
    data: [1, 0, 0, 0, 0, 0, 0, 0, 0, 10, 9, 14, 7, 5, 4]
  }
]
</script>

<style scoped>
.container-charts {
  @apply flex w-full gap-4 items-center justify-between flex-nowrap md:flex-col;
}
</style>