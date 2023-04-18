<script setup>
    const props = defineProps(["item"]);
</script>

<template>
    <li>
        <a :href="item.url">
            <span class="id">{{ item.id }}</span>
            <span class="name">
                {{ item.name }}
            </span>
            <h2>{{ item.text }}</h2>
        </a>
    </li>
</template>

<style lang="scss" scoped></style>
