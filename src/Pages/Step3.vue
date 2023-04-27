<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";
    import { AddOnItem, FormNav } from "../Components";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="store.handleSubmit(3)">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div>
            <ul>
                <AddOnItem
                    v-for="item in store.addOns"
                    :key="item.id"
                    :item="item"
                />
            </ul>
        </div>
        <FormNav />
    </form>
</template>

<style lang="scss" scoped>
    ul {
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 1rem;
    }
</style>
