<template>
    <ContainerScreen>
        <template #content>
            <CardComponent title-card="Banheiro">
                <div class="border border-black flex flex-col items-center">
                    
                    <p>Privada</p>
                </div>
            </CardComponent>
        </template>
    </ContainerScreen>
</template>

<script setup>
import ContainerScreen from "@/layouts/container.screen.vue";
import CardComponent from "@/components/Card.vue";

//Header
import { provide } from 'vue'

provide('header-title', "Comodos")
</script>

<style scoped>

</style>