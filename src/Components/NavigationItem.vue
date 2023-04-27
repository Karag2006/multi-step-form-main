<script setup>
    import { computed } from "vue";
    import { RouterLink, useRoute } from "vue-router";

    const props = defineProps(["item"]);
    const route = useRoute();

    const currentRouteNumber = computed(() => {
        if (route.name) return Number(route.name.substring(4, 5));
    });
    const itemNumber = computed(() => {
        if (props.item) return Number(props.item.name.substring(4, 5));
    });

    const classes = computed(() => {
        let classString = "";
        if (
            route.name == props.item.name ||
            (route.name == "Step5" && props.item.name == "Step4")
        ) {
            classString += "active ";
        }
        if (itemNumber.value > currentRouteNumber.value) {
            classString += "disabled";
        }
        return classString;
    });
</script>

<template>
    <li>
        <RouterLink
            :to="{ name: item.name }"
            :class="classes"
            v-if="!classes.includes('disabled')"
        >
            <span class="id">{{ item.id }}</span>
            <div>
                <span class="name">
                    {{ item.name }}
                </span>
                <h2>{{ item.text }}</h2>
            </div>
        </RouterLink>
        <a href="#" :class="classes" v-else>
            <span class="id">{{ item.id }}</span>
            <div>
                <span class="name">
                    {{ item.name }}
                </span>
                <h2>{{ item.text }}</h2>
            </div>
        </a>
    </li>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;

    a {
        text-decoration: none;
        font-size: 0.8rem;

        &.active,
        &:hover,
        &:focus {
            .id {
                background: var(--magnolia);
                color: var(--marine-blue);
            }

            .name {
                color: var(--light-gray);
            }
        }

        &.disabled {
            opacity: 0.5;
            cursor: default;
            &:hover,
            &:focus {
                .id {
                    background: transparent;
                    color: var(--light-gray);
                }

                .name {
                    color: var(--light-gray);
                }
            }
        }

        .id {
            display: grid;
            place-content: center;
            background: transparent;
            width: 2rem;
            height: 2rem;
            border: 1px solid white;
            border-radius: 50%;
        }
        .name {
            display: none;

            text-transform: uppercase;
        }
        h2 {
            display: none;
        }
        @include breakpoint {
            display: flex;
            gap: 1rem;
            .name {
                display: block;
            }
            h2 {
                display: inline-block;
            }
        }
    }
</style>
