<template>
    <div class="card flex flex-col w-full">
        <div class="p-4 pb-3 main-top-border">
            <div class="flex w-full justify-between items-center">
                <p class="text-caps-2 uppercase text-neutral-60">
                    {{ textHeaderCard }}
                </p>
                <img class="w-6 h-6" :name="`svguse:/icons.svg#${nameIcon}`"/>
            </div>
            <h5 class="text-title-2 text-primary-pure">
                {{ textMainValue ? textMainValue : '---' }}
            </h5>
        </div>
        <div class="p-4 pt-3">
            <h6 class="text-headline-3 text-neutral-100">
                {{ textFooterCard ? textFooterCard : '---' }}
            </h6>
            <p class="text-paragraph-3 text-neutral-60">Último mês</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        textHeaderCard: {
            type: String,
            default: () => '',
        },
        textMainValue: {
            type: String,
            default: () => '',
        },
        nameIcon: {
            type: String,
            default: () => '',
        },
        textFooterCard: {
            type: String,
            default: () => '',
        },
    }
})
</script>

<style scoped>
.card{
    border: 1px solid rgba(28, 19, 9, 0.05);
    border-radius: 12px;
    vertical-align: top;
    background: #fff;
    position: relative;
}
.main-top-border{
    border-bottom-width: 1px; 
    border-bottom-style: solid; 
    border-image-slice: 1; 
    border-image-source: linear-gradient(to right, rgba(9, 18, 28, .1) 40%, rgba(9, 18, 28, 0));
}
</style>