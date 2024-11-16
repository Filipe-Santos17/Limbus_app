<template>
  <ContainerScreen>
    <template #content>
      <hgroup class="py-6">
        <h2 class="">Bem vindo de volta, filipe !</h2>
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
          class="flex w-full gap-4 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1 mt-4">
          <CardComponent title-card="Indice de gastos por mês">
            <template #content-card>
              <ChartComponent/>
            </template>
          </CardComponent>
          <CardComponent>
            <template #content-card>
              <ChartComponent/>
            </template>
          </CardComponent>
          <!-- <div class="">
            <div class="card flex flex-col w-full">
              <div class="p-4 pb-3 main-top-border">
                <div class="flex w-full justify-between items-center">
                  <p class="text-caps-2 uppercase text-neutral-20">
                    {{ textHeaderCard }}
                  </p>
                  <img class="w-6 h-6" :src="icon" />
                </div>
                <h5 class="text-title-2 text-yellow-limbus-dark">
                  {{ textMainValue ? textMainValue : '---' }}
                </h5>
              </div>
              <div class="p-4 pt-3">
                <h6 class="text-headline-3 text-black-20">
                  {{ textFooterCard ? textFooterCard : '---' }}
                </h6>
                <p class="text-paragraph-3 text-neutral-20">Último mês</p>
              </div>
            </div>
          </div> -->
        </section>
      </div>
    </template>
  </ContainerScreen>
</template>

<script setup>
import ContainerScreen from "@/screens/container.screen.vue";
import CardBoxItem from "@/components/home/card_box_item.vue";
import ChartComponent from "@/components/Chart.vue";
import CardComponent from "@/components/Card.vue";

//Icons
import IconPressao from "@/assets/svgs/icon-pressao.svg"
import IconVazao from "@/assets/svgs/icon-vazao.svg"
import IconNumeroSaidas from "@/assets/svgs/icon-numero-saidas.svg"
import IconPrecoMedio from "@/assets/svgs/icon-preco-medio.svg"

const arrayNames = ["Vazão da água", "Pressão da água", "Numero de saídas", "Valor mais alto"]
</script>

<style lang="scss" scoped></style>
