<script setup>
    import { RouterLink } from "vue-router";
    import { PlanItem } from "../Components";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="store.handleSubmit(2)">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div class="planSelect">
            <ul>
                <PlanItem
                    v-for="plan in store.plans"
                    :key="plan.level"
                    :plan="plan"
                />
            </ul>
            <div class="paymentSchedule">
                <p :class="store.contract.plan.monthly ? 'active' : ''">
                    Monthly
                </p>
                <label class="switch">
                    <input
                        type="checkbox"
                        name="monthly"
                        v-model="store.contract.plan.monthly"
                    />
                    <span class="slider round"></span>
                </label>
                <p :class="store.contract.plan.monthly ? '' : 'active'">
                    Yearly
                </p>
            </div>
        </div>
        <div class="form--navigation">
            <RouterLink :to="{ name: 'Step1' }">Go Back</RouterLink>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .planSelect ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        width: 100%;
    }

    .paymentSchedule {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        height: 3rem;
        margin-block-start: 2rem;
        background: hsla(var(--hsl-magnolia), 0.8);
        border-radius: 0.5rem;

        .active {
            color: var(--marine-blue);
            font-weight: 500;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 3rem;
            height: 1.5rem;

            &:hover,
            &:focus {
                .slider:before {
                    background-color: var(--cool-gray);
                }
            }

            input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: var(--marine-blue);
                border-radius: 2rem;
                transition: 0.2s;
            }

            .slider:before {
                content: "";
                position: absolute;
                left: 3px;
                bottom: 4px;
                height: 1rem;
                width: 1rem;
                background-color: white;
                border-radius: 50%;
                transition: 0.2s;
            }

            input:checked + .slider:before {
                transform: translateX(0px);
            }

            input + .slider:before {
                transform: translateX(26px);
            }
        }
    }
</style>
