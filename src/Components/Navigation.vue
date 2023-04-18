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

<style lang="scss" scoped></style>
