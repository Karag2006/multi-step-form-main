<script setup>
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import { FormNav } from ".";

    const route = useRoute();

    const currentRouteName = computed(() => route.name);
</script>

<template>
    <section class="bottom">
        <FormNav :buttonLabel="currentRouteName == 'Step4' ? 'Confirm' : ''" />
        <footer>
            Challenge by
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                >Frontend Mentor</a
            >. Coded by
            <a href="https://github.com/Karag2006">Martin Richter</a>.
        </footer>
    </section>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;
    footer {
        background: white;
        padding-block: 1.5rem;
        font-size: 11px;
        text-align: center;
        font-weight: 500;
        color: hsla(0, 0%, 0%, 0.5);

        @include breakpoint {
            background: none;
        }
        a {
            color: hsl(228, 45%, 44%);
            font-weight: 700;
        }
    }
</style>
