<template>
    <section class="w-screen h-screen grid grid-cols-2 md:grid-cols-1">
        <div id="logo" class="bg-yellow-limbus-white w-full h-full md:hidden">
            <h1 class="">Limbus</h1>
        </div>
        <div class="bg-neutral-10 w-full h-full flex items-center justify-center">
            <slot name="form"></slot>
        </div>
    </section>
</template>