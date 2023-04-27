<script setup>
    import { RouterLink } from "vue-router";
    import { useAppStore } from "../Store/AppStore";
    import { FormNav } from "../Components";

    const store = useAppStore();
</script>

<template>
    <form @submit.prevent="store.handleSubmit(4)">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
        <div>
            <div class="selection">
                <div class="selectedPlan">
                    <div>
                        <h3>
                            {{ store.selectedPlan.name }} ({{
                                store.contract.plan.monthly
                                    ? "Monthly"
                                    : "Yearly"
                            }})
                        </h3>
                        <RouterLink :to="{ name: 'Step2' }">Change</RouterLink>
                    </div>
                    <p class="blue">
                        {{
                            store.contract.plan.monthly == true
                                ? "$" + store.selectedPlan.mo + "/mo"
                                : "$" + store.selectedPlan.yr + "/yr"
                        }}
                    </p>
                </div>
                <div class="selectedAddOns">
                    <ul>
                        <li v-for="addOn in store.contract.addOns" :key="addOn">
                            <p class="small">{{ addOn.name }}</p>
                            <p class="small blue">
                                {{
                                    store.contract.plan.monthly == true
                                        ? "+$" + addOn.mo + "/mo"
                                        : "+$" + addOn.yr + "/yr"
                                }}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="total">
                <p class="small">
                    Total (per
                    {{ store.contract.plan.monthly ? "month" : "year" }})
                </p>
                <p class="totalSum">
                    {{
                        store.contract.plan.monthly == true
                            ? "+$" + store.totalValue + "/mo"
                            : "+$" + store.totalValue + "/yr"
                    }}
                </p>
            </div>
        </div>
        <FormNav buttonLabel="Confirm" />
    </form>
</template>

<style lang="scss" scoped>
    .selection {
        padding: 1.5rem;
        background-color: hsla(var(--hsl-magnolia), 0.8);
        border-radius: 0.7rem;
    }
    .selectedPlan {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block-end: 1.5rem;
        border-bottom: 1px solid hsla(var(--hsl-cool-gray), 0.1);

        h3 {
            margin-block-end: 0.5rem;
        }

        a:hover,
        a:focus {
            color: var(--purplish-blue);
        }

        p {
            font-weight: 500;
        }
    }

    .selectedAddOns {
        padding-block-start: 1.5rem;

        ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            li {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .total {
        display: flex;
        justify-content: space-between;
        margin-block-start: 2rem;
        padding-inline: 1.5rem;

        .totalSum {
            color: var(--purplish-blue);
            font-size: 1.1rem;
            font-weight: 700;
        }
    }
</style>
