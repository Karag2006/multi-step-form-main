<script setup>
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
    const props = defineProps(["plan"]);
</script>

<template>
    <li :class="store.contract.plan.level == plan.level ? 'active' : ''">
        <input
            type="radio"
            :value="plan.level"
            v-model="store.contract.plan.level"
            :id="'PlanLavel' + plan.level"
            class="radio"
        />
        <label class="checkmark" :for="'PlanLavel' + plan.level">
            <div>
                <img :src="'/assets/images/' + plan.img" :alt="plan.alt" />
            </div>
            <div>
                <h3>{{ plan.name }}</h3>
                <p>
                    {{
                        store.contract.plan.monthly == true
                            ? "$" + plan.mo + "/mo"
                            : "$" + plan.yr + "/yr"
                    }}
                </p>
                <p class="small" v-if="!store.contract.plan.monthly">
                    2 months free
                </p>
            </div>
        </label>
    </li>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;
    li {
        border: 1px solid var(--cool-gray);
        border-radius: 0.5rem;

        &:hover,
        &:focus,
        &:focus-within {
            border-color: var(--purplish-blue);
        }

        &.active {
            background-color: hsla(var(--hsl-magnolia), 0.8);
        }
    }
    .checkmark {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        padding: 1rem;
        cursor: pointer;

        @include breakpoint {
            flex-direction: column;
            gap: 3rem;
        }
    }

    input {
        opacity: 0;
        position: absolute;
    }
</style>
