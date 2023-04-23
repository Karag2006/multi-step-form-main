<script setup>
    import { useAppStore } from "../Store/AppStore";

    const store = useAppStore();
    const props = defineProps(["item"]);
</script>

<template>
    <li :class="store.contract.addOns.includes(props.item) ? 'active' : ''">
        <input
            type="checkbox"
            :name="props.item.name"
            :id="props.item.name"
            v-model="store.contract.addOns"
            :value="props.item"
        />
        <label class="checkmark" :for="props.item.name">
            <div class="marker"></div>
            <div>
                <h3>{{ props.item.name }}</h3>
                <p>{{ props.item.description }}</p>
            </div>
            <div>
                <p class="addedPrice">
                    {{
                        store.contract.plan.monthly == true
                            ? "+$" + item.mo + "/mo"
                            : "+$" + item.yr + "/yr"
                    }}
                </p>
            </div>
        </label>
    </li>
</template>

<style lang="scss" scoped>
    li {
        border: 1px solid var(--cool-gray);
        border-radius: 0.5rem;

        &:hover,
        &:focus {
            border-color: var(--purplish-blue);
        }

        &.active {
            background-color: hsla(var(--hsl-magnolia), 0.8);
            border-color: var(--purplish-blue);

            &:hover,
            &:focus {
                border-color: var(--cool-gray);
            }
            .marker {
                background-color: var(--purplish-blue);
                background-image: url("../assets/images/icon-checkmark.svg");
                background-size: 80%;
                background-repeat: no-repeat;
                background-position: center;
            }
        }
    }
    .checkmark {
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        cursor: pointer;

        .marker {
            display: grid;
            place-content: center;
            width: 1.3rem;
            height: 1.3rem;
            border: 1px solid var(--cool-gray);
            border-radius: 4px;
        }

        div:last-of-type {
            margin-inline-start: auto;
            font-size: 0.9rem;

            .addedPrice {
                color: var(--purplish-blue);
            }
        }
    }

    input {
        opacity: 0;
        position: absolute;
    }
</style>
