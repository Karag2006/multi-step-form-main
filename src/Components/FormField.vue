<script setup>
    import { useAppStore } from "../Store/AppStore";
    const store = useAppStore();

    const props = defineProps(["name", "placeholder", "label"]);
</script>

<template>
    <div class="Form--Input">
        <div>
            <label
                :for="props.name"
                :class="store.classes[props.name]"
                class="small"
                >{{ props.label }}</label
            >
            <span class="error small" v-if="store.errors[props.name]">{{
                store.errors[props.name]
            }}</span>
        </div>
        <input
            :class="store.classes[props.name]"
            :id="props.name"
            :name="props.name"
            v-model="store.contract.customer[props.name]"
            :placeholder="props.placeholder"
            @focus="store.formElementFocus(props.name)"
        />
    </div>
</template>

<style lang="scss" scoped>
    .Form--Input {
        div {
            display: flex;
            justify-content: space-between;
        }
    }
    input {
        width: 100%;
        padding: 0.8rem;
        margin-block-start: 0.5rem;
        border: 1px solid var(--cool-gray);
        border-radius: 0.5rem;
        font-size: 1.1rem;
        &:hover,
        &:focus {
            border-color: var(--purplish-blue);
            outline: none;
        }

        &.error {
            border-color: var(--error-color);
        }
    }

    span.error {
        color: var(--error-color);
        font-weight: 500;
    }
</style>
