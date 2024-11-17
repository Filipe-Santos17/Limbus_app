<template>
  <ContainerScreen>
    <template #content>
      <hgroup class="py-6">
        <h2 class="text-caps-1 uppercase">Bem vindo de volta, <span class="text-[#b05b00]">filipe</span>!</h2>
      </hgroup>
      <div>
        <hgroup
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1">
          <!--aplicar v-for-->
          <CardBoxItem text-header-card="Vazão da água" text-main-value="1" :icon="IconVazao" text-footer-card="2" />
          <CardBoxItem text-header-card="Pressão da água" text-main-value="1" :icon="IconPressao"
            text-footer-card="2" />
          <CardBoxItem text-header-card="Numero de saídas" text-main-value="1" :icon="IconNumeroSaidas"
            text-footer-card="2" />
          <CardBoxItem text-header-card="Valor mais alto" text-main-value="1" :icon="IconPrecoMedio"
            text-footer-card="2" />
        </hgroup>
        <section
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:flex-col mt-4">
          <CardComponent title-card="Indice de gastos por mês">
            <template #content-card>
              <ChartComponent/>
            </template>
          </CardComponent>
          <CardComponent title-card="Valores Gastos por hora">
            <template #content-card>
              <TableComponent
               :columns="columns"
              />
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

//Icons
import IconPressao from "@/assets/svgs/home/icon-pressao.svg"
import IconVazao from "@/assets/svgs/home/icon-vazao.svg"
import IconNumeroSaidas from "@/assets/svgs/home/icon-numero-saidas.svg"
import IconPrecoMedio from "@/assets/svgs/home/icon-preco-medio.svg"

//Header
import { provide } from 'vue'

provide('header-title', "home")

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
