<script setup>
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
    const props = defineProps(["item"]);
</script>

<template>
    <li>
        <div>
            <input type="checkbox" :name="props.item.name" />
        </div>
        <div>
            <h3>{{ props.item.name }}</h3>
            <p>{{ props.item.description }}</p>
        </div>
        <div>
            <p class="addedPrice">
                {{
                    store.contract.plan.schedule == "monthly"
                        ? "+$" + item.mo + "/mo"
                        : "+$" + item.yr + "/yr"
                }}
            </p>
        </div>
    </li>
</template>

<style lang="scss" scoped></style>
