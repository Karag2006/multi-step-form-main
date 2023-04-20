<script setup>
    import { RouterLink } from "vue-router";
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
                    <input
                        type="checkbox"
                        name="monthly"
                        v-model="store.contract.plan.monthly"
                    />
                    <span class="slider round"></span>
                </label>
                <p class="yearly">Yearly</p>
            </div>
        </div>
        <div class="form--navigation">
            <RouterLink :to="{ name: 'Step1' }">Go Back</RouterLink>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
