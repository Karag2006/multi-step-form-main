<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";
    import { AddOnItem } from "../Components";

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
        <div class="form--navigation">
            <RouterLink :to="{ name: 'Step2' }">Go Back</RouterLink>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
