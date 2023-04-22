<script setup>
    import { RouterLink } from "vue-router";
    const props = defineProps(["item"]);
</script>

<template>
    <li>
        <RouterLink :to="{ name: item.name }">
            <span class="id">{{ item.id }}</span>
            <div>
                <span class="name">
                    {{ item.name }}
                </span>
                <h2>{{ item.text }}</h2>
            </div>
        </RouterLink>
    </li>
</template>

<style lang="scss" scoped>
    @use "../scss/imports/mixins" as *;

    a {
        text-decoration: none;
        font-size: 0.9rem;
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
