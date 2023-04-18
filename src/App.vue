<script setup>
    import { RouterView } from "vue-router";
    import { Navigation, Footer } from "@/Components";
</script>

<template>
    <div class="card">
        <Navigation />
        <main>
            <RouterView />
        </main>
    </div>
    <Footer />
</template>
