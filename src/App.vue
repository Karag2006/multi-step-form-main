<script setup>
    import { RouterView } from "vue-router";
    import { Navigation, Footer } from "@/Components";
</script>

<template>
    <Navigation />
    <div class="card">
        <Navigation />
        <main>
            <RouterView />
        </main>
    </div>
    <Footer />
</template>
