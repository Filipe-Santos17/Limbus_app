<template>
  <ContainerScreen>
    <template #content>
      <div>
        <hgroup
          class="flex w-full gap-16 items-center justify-between flex-nowrap md:grid md:grid-cols-2 sm:!grid-cols-1"
        >
          <!--aplicar v-for-->
          <CardBoxItem
            text-header-card="Seu Estoque"
            text-main-value="1"
            name-icon="icon_estoque_card_home"
            text-footer-card="2"
          />
          <CardBoxItem
            text-header-card="PMc Estoque"
            text-main-value="1"
            name-icon="icon_pmc_estoque_card_home"
            text-footer-card="2"
          />
          <CardBoxItem
            text-header-card="Volume estoque"
            text-main-value="1"
            name-icon="icon_volume_estoque_card_home"
            text-footer-card="2"
          />
          <CardBoxItem
            text-header-card="Valor estoque"
            text-main-value="1"
            name-icon="icon_volume_valor_estoque_card_home"
            text-footer-card="2"
          />
        </hgroup>
      </div>
    </template>
  </ContainerScreen>
</template>

<script setup>
import ContainerScreen from "@/screens/container.screen.vue";
import CardBoxItem from "@/components/home/card_box_item.vue";

const arrayNames = ["Vazão da água","Pressão da água","Numero de saídas","Valor mais alto"]
</script>

<style lang="scss" scoped></style>
