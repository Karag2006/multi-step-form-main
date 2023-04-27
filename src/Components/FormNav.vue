<script setup>
    import { computed } from "vue";
    import { RouterLink, useRoute } from "vue-router";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();

    const props = defineProps(["buttonLabel"]);

    const route = useRoute();
    const currentRouteNumber = computed(() => {
        return Number(route.name.substring(4, 5));
    });
    console.log(currentRouteNumber.value);
</script>

<template>
    <div class="form--navigation">
        <RouterLink
            :to="{ name: 'Step' + (currentRouteNumber - 1) }"
            v-if="currentRouteNumber > 1"
            >Go Back</RouterLink
        >
        <div v-else></div>
        <button type="button" @click="store.handleSubmit(currentRouteNumber)">
            {{ buttonLabel ? buttonLabel : "Next Step" }}
        </button>
    </div>
</template>

<style lang="scss" scoped></style>
