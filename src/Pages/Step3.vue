<script setup>
    import { useAppStore } from "../Store/AppStore";
    import { AddOnItem } from "../Components";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="">
        <div>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <ul>
                <AddOnItem
                    v-for="item in store.addOns"
                    :key="item.id"
                    :item="item"
                />
            </ul>
        </div>
        <div class="form--navigation">
            <a href="/step2">Go Back</a>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
