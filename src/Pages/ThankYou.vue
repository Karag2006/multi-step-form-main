<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <div class="outer">
        <div class="inner">
            <img
                src="../assets/images/icon-thank-you.svg"
                alt="Thank You Icon"
            />
            <h1>Thank you!</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;
    div.outer {
        display: grid;
        place-items: center;
        text-align: center;
        padding: 3rem 1rem;
        min-height: 100%;
    }
    .inner {
        display: grid;
        place-items: center;
        gap: 1rem;
        img {
            width: 4rem;
            aspect-ratio: 1;
            margin-block-end: 1rem;

            @include breakpoint {
                width: fit-content;
            }
        }
    }
</style>
