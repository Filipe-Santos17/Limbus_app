<template>
    <button class="btn">
        {{ text }}
    </button>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: () => ''
    }
})
</script>

<style scoped>
.btn {
    @apply cursor-pointer py-2 px-4 rounded-md text-base hover:opacity-80 text-white font-bold;
}
</style>
