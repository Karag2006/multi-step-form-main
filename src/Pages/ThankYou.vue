<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <div>
        <img src="../assets/images/icon-thank-you.svg" alt="Thank You Icon" />
        <h1>Thank you!</h1>
        <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
        </p>
    </div>
</template>

<style lang="scss" scoped>
    div {
        text-align: center;
    }
</style>
