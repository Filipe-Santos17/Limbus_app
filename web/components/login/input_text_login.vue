<template>
    <div>
        <label :for="idInput" class="label-login-class">
            {{ titleLabel }}
        </label>
        <input type="text" :name="idInput" :id="idInput" :placeholder="pText" class="input-login-class">
        <slot name="bottom-input" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    titleLabel: {
        type: String,
        required: true
    },
    idInput: {
        type: String,
        required: true
    },
    pText: {
        type: String,
        required: false,
        default: "",
    }
})
</script>

<style scoped>
.label-login-class {
    @apply text-sm text-[#495057] font-medium;
}

.input-login-class {
    @apply placeholder-[#686E74] text-sm font-normal border py-2 px-4 border-[#E9ECEF] h-12 rounded-md w-full;
}
</style>
