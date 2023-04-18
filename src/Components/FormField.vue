<script setup>
    import { useAppStore } from "../Store/AppStore";
    const store = useAppStore();

    const props = defineProps(["name", "placeholder", "label"]);
</script>

<template>
    <div class="Form--Input">
        <label :for="props.name" :class="store.classes[props.name]">{{
            props.label
        }}</label>
        <input
            :class="store.classes[props.name]"
            :id="props.name"
            :name="props.name"
            v-model="store.contract.customer[props.name]"
            :placeholder="props.placeholder"
            @focus="store.formElementFocus(props.name)"
            @blur="store.formElementBlur(props.name)"
        />
        <span class="error" v-if="store.errors[props.name]">{{
            store.errors[props.name]
        }}</span>
    </div>
</template>

<style lang="scss" scoped></style>
