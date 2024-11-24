<template>
  <ContainerScreen>
    <template #content>
      <div class="h-[calc(100vh-2.5rem)] grid grid-rows-2 md:h-full">
        <section class="container-charts py-4">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent 
                type-chart="line"
                :categories="categories"
                :series-chart="[series]" 
                :options-chart="WaterCostsPerMonth" 
              />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <ChartComponent 
                type-chart="bar" 
                :categories="categories"
                :series-chart="[series]"
                :options-chart="IncidentsPerMonth" 
              />
            </template>
          </CardComponent>
        </section>
        <section class="container-charts pb-4">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent 
                type-chart="donut"
                :categories="categories"
                :series-chart="[10,20,3]" 
                :options-chart="EquipmentsWorking" 
              />
            </template>
          </CardComponent>
          <CardComponent title-card="Horário de maior gasto">
            <template #content-card>
              <ChartComponent 
                type-chart="bar"
                :categories="categories"
                :series-chart="[series]" 
                :options-chart="PeakSpendingTime" 
              />
            </template>
          </CardComponent>
          <div class="min-w-[300px] flex flex-col mb-auto md:flex-row md:w-full gap-2">
            <CardComponent title-card="Pressão médio">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  {{  10 }} 
                </p>
              </template>
            </CardComponent>
            <CardComponent title-card="Vazão média">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  {{  10 }} 
                </p>
              </template>
            </CardComponent>
            <CardComponent title-card="Preço médio">
              <template #content-card>
                <p class="text-title-2 text-yellow-limbus-dark">
                  {{  10 }} 
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

//Chart 1
const api = new ApiProvider()
const categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']


//Charts
const [series] = [
  {
    name: "Gastos do mês",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
]

const series3 = [{
  name: "Equipamentos",
  data: [44, 55, 41, 17, 15]
}]
   

// const aaa = await api.get({user})
// console.log(aaa)


</script>

<style scoped>
.container-charts {
  @apply flex w-full gap-4 items-center justify-between flex-nowrap md:flex-col;
}
</style>