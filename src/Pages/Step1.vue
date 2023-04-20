<script setup>
    import { FormField } from "../Components";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="store.handleSubmit(1)">
        <div>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address and phone number.</p>
            <FormField
                name="name"
                label="Name"
                placeholder="e.g. Stephen King"
            />
            <FormField
                name="email"
                label="Email Address"
                placeholder="e.g. stephenking@lorem.com"
            />
            <FormField
                name="phone"
                label="Phone Number"
                placeholder="e.g. +1 234 567 890"
            />
        </div>
        <div class="form--navigation">
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
