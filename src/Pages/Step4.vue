<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="store.handleSubmit(4)">
        <h1>Finishing up</h1>
        <p>Double check ....</p>
        <div>
            <div class="selectedPlan">
                <div>
                    <h3>{{ store.selectedPlan.name }}</h3>
                    <RouterLink :to="{ name: 'Step2' }">Change</RouterLink>
                </div>
                <p>
                    {{
                        store.contract.plan.monthly == true
                            ? "$" + store.selectedPlan.mo + "/mo"
                            : "$" + store.selectedPlan.yr + "/yr"
                    }}
                </p>
            </div>
            <div class="selectedAddOns">
                <ul>
                    <li>
                        <p>Online Service</p>
                        <p>+1€/mo</p>
                    </li>
                </ul>
            </div>
            <div class="total">
                <p></p>
                <p class="totalSum"></p>
            </div>
        </div>
        <div class="form--navigation">
            <RouterLink :to="{ name: 'Step3' }">Go Back</RouterLink>
            <button type="submit">Confirm</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
