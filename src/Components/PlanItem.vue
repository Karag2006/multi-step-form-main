<script setup>
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
    const props = defineProps(["plan"]);
</script>

<template>
    <li>
        <button @click="">
            <div>
                <img :src="'/assets/images/' + plan.img" :alt="plan.alt" />
            </div>
            <div>
                <h3>{{ plan.name }}</h3>
                <p>
                    {{
                        store.contract.plan.schedule == "monthly"
                            ? "$" + plan.mo + "/mo"
                            : "$" + plan.yr + "/yr"
                    }}
                </p>
            </div>
        </button>
    </li>
</template>

<style lang="scss" scoped></style>
