<template>
  <ContainerScreen>
    <template #content>
      <div>
        <section
          class="container-charts">
          <CardComponent title-card="Gastos de Água por mês" class="mt-4">
            <template #content-card>
              <ChartComponent />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <ChartComponent />
            </template>
          </CardComponent>
        </section>
        <section
          class="container-charts">
          <CardComponent title-card="Gastos de Água por mês">
            <template #content-card>
              <ChartComponent />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <ChartComponent />
            </template>
          </CardComponent>
          <CardComponent title-card="Número de incidentes por mês">
            <template #content-card>
              <ChartComponent />
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

//Header
import { provide } from 'vue'

provide('header-title', "dashboards")


//Chart 1
//Chart 2

</script>

<style scoped>
.container-charts{
  @apply flex w-full gap-4 items-center justify-between flex-nowrap md:flex-col;
}
</style>