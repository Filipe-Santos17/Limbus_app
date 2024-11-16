<template>
    <div class="card flex flex-col w-full">
        <div class="p-4 pb-3">
            <div class="flex w-full items-center">
                <p class="text-caps-2 uppercase text-neutral-20">
                    {{ titleCard }}
                </p>
            </div>
            <slot name="content-card" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    titleCard: {
        type: String,
        default: () => '',
    }
})
</script>

<style>
.card {
    border: 1px solid rgba(28, 19, 9, 0.05);
    border-radius: 12px;
    vertical-align: top;
    background: #fff;
    position: relative;
}
</style>