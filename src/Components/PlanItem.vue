<script setup>
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
    const props = defineProps(["plan"]);
</script>

<template>
    <li>
        <input
            type="radio"
            :value="plan.level"
            v-model="store.contract.plan.level"
            :id="'PlanLavel' + plan.level"
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
    .checkmark {
        display: block;
    }

    input {
        opacity: 0;
        position: absolute;

        &:checked ~ .checkmark {
            background-color: red;
        }
    }
</style>
