<script setup>
    import { useAppStore } from "../Store/AppStore";
    import { NavigationItem } from "./";

    const store = useAppStore();
</script>

<template>
    <nav>
        <ul>
            <NavigationItem
                v-for="item in store.navItems"
                :key="item.id"
                :item="item"
            />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;
    nav ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 1rem;

        @include breakpoint {
            justify-content: space-around;
            flex-direction: column;
            gap: 2rem;
        }
    }
</style>
