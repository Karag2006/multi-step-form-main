<script setup>
    import { RouterLink } from "vue-router";
    const props = defineProps(["item"]);
</script>

<template>
    <li>
        <RouterLink :to="{ name: item.name }">
            <span class="id">{{ item.id }}</span>
            <span class="name">
                {{ item.name }}
            </span>
            <h2>{{ item.text }}</h2>
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped></style>
