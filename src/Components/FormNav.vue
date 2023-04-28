<script setup>
    import { computed } from "vue";
    import { RouterLink, useRoute } from "vue-router";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();

    const props = defineProps(["buttonLabel"]);

    const route = useRoute();
    const currentRouteNumber = computed(() => {
        if (route.name) return Number(route.name.substring(4, 5));
    });
</script>

<template>
    <div class="form--navigation" v-if="currentRouteNumber < 5">
        <RouterLink
            :to="{ name: 'Step' + (currentRouteNumber - 1) }"
            v-if="currentRouteNumber > 1"
            >Go Back</RouterLink
        >
        <div v-else></div>
        <div
            v-if="currentRouteNumber == 2 && store.buttonDisabled"
            class="button disabled"
        >
            {{ buttonLabel ? buttonLabel : "Next Step" }}
        </div>
        <button
            v-else
            type="button"
            @click="store.handleSubmit(currentRouteNumber)"
        >
            {{ buttonLabel ? buttonLabel : "Next Step" }}
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
