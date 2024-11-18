<template>
  <ContainerScreen>
    <template #content>
      <div>
        <section class="container-charts">
          <CardComponent title-card="Gastos de Água por mês" class="mt-4">
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
        <section class="container-charts">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent 
                type-chart="donut"
                :categories="categories"
                :series-chart="[series3]" 
                :options-chart="EquipmentsWorking" 
              />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <!-- <ChartComponent /> -->
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <!-- <ChartComponent /> -->
            </template>
          </CardComponent>
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