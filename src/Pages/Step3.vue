<script setup></script>

<template>
    <form @submit.prevent="">
        <div>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <ul>
                <li>
                    <div>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <h3>Online Service</h3>
                        <p>Access to multiplayer Games</p>
                    </div>
                    <div>
                        <p class="addedPrice">+1€/mo</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="form--navigation">
            <a href="/step2">Go Back</a>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
