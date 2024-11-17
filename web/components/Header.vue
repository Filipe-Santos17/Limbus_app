<template>
    <header class="h-10 flex justify-between items-center w-full text-yellow-limbus-dark border-b-1 ml-auto px-4 py-6 bg-white">
       <h4 class="capitalize">{{ title }}</h4>
       <div>
            <img src="" alt="">
       </div>
    </header>
</template>

<script setup>
import { inject } from 'vue'

const title = inject('header-title')
</script>