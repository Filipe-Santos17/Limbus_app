<template>
    <ContainerScreen>
        <template #content>
        </template>
    </ContainerScreen>
</template>

<script setup>
import ContainerScreen from "@/layouts/container.screen.vue";

//Header
import { provide } from 'vue'

provide('header-title', "Comodos")
</script>

<style scoped>

</style>