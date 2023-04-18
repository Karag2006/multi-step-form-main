<script setup>
    import { PlanItem } from "../Components";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="">
        <div class="planSelect">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <ul>
                <PlanItem
                    v-for="plan in store.plans"
                    :key="plan.level"
                    :plan="plan"
                />
            </ul>
            <div class="paymentSchedule">
                <p class="monthly">Monthly</p>
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
                <p class="yearly">Yearly</p>
            </div>
        </div>
        <div class="form--navigation">
            <a href="/">Go Back</a>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
