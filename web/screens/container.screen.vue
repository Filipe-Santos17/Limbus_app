<template>
    <section class="page-container">
        <div class="content-container">
            <slot name="content"/>
        </div>
    </section>
</template>

<style>
.page-container{
    margin-left: 5rem;
    height: 100vh;
}

.content-container{    
    max-width: 1744px;
    padding: 0 40px;
    margin: 0 auto;
}
</style>
