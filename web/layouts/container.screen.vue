<template>
    <Sidebar :sidebar-options="sidebarOptions" />
    <section class="page-container">
        <HeaderComponent />
        <div class="content-container">
            <slot name="content" />
        </div>
    </section>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import HeaderComponent from "@/components/Header.vue";

//Icons
import IconHome from "@/assets/svgs/sidebar/icon-home.svg"
import IconDash from "@/assets/svgs/sidebar/icon-dashboard.svg"
import IconUser from "@/assets/svgs/sidebar/icon-user.svg"

const sidebarOptions = [
    {
        text: "Home",
        link: "home",
        img: IconHome
    },
    {
        text: "Dashboards",
        link: "dashboards",
        img: IconDash
    },
    {
        text: "Users",
        link: "users",
        img: IconUser
    }
]
</script>

<style>
body{
    background-color: #F8F9FA;
}

.page-container {
    margin-left: 5rem;
    height: 100vh;
}

.content-container {
    max-width: 1744px;
    padding: 0 40px;
    background-color: #F8F9FA;
    margin: 0 auto;
    height: calc(100vh - 2.5rem);
}
</style>
