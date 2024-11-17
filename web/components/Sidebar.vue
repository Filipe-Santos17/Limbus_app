<template>
    <aside class="sidebar">
        <header class="h-24 w-sidebar-width">
            <a href=""></a>
        </header>
        <ul>
            <NuxtLink v-for="option in sidebarOptions" :key="option.link" :to="`/${option.link}`">
                <img class="w-6 h-6" :src="option.img" />
                {{ option.text }}
            </NuxtLink>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

interface iSidebarOptions {
    text: string,
    link: string,
    img: string,
}

defineProps({
    sidebarOptions: {
        type: Object as PropType<iSidebarOptions[]>,
        required: true
    }
})
</script>

<style scoped>
/*fill-[#FF9B32]*/
.sidebar {
    @apply flex flex-col justify-between left-0 top-0 w-sidebar-width z-50 fixed h-screen duration-[600ms] ease-out bg-black-10 border-r overflow-hidden;
    /*border-r-[]*/
    @apply hover:w-sidebar-width-open;
}

.sidebar:hover > ul a {
    @apply text-white;
}

.sidebar > ul {
    @apply mb-24 flex-nowrap overflow-y-auto overflow-x-hidden flex-col h-full flex justify-center;
}

.sidebar > ul a {
    @apply max-h-12 py-4 px-8 text-transparent flex gap-2;
    @apply hover:bg-[linear-gradient(90deg,rgba(244,128,31,0.1)50.52%,rgba(244,128,31,0)100%)];
    transition: color 0.3s, background-color 0.3s;
}
</style>
