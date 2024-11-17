<template>
  <ContainerScreen>
    <template #content>
      <div>
        <section
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1 mt-4">
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
        </section>
        <section
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1 mt-4">
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
import CardBoxItem from "@/components/home/card_box_item.vue";
import ContainerScreen from "@/layouts/container.screen.vue";
import ChartComponent from "@/components/Chart.vue";
import CardComponent from "@/components/Card.vue";
import TableComponent from "@/components/Table.vue";

//Header
import { provide } from 'vue'

provide('header-title', "dashboards")

const arrayNames = ["Vazão da água", "Pressão da água", "Numero de saídas", "Valor mais alto"]

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

const rows = ref([])
</script>

<style lang="scss" scoped></style>