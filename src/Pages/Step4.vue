<script setup></script>

<template>
    <form @submit.prevent="">
        <div>
            <h1>Finishing up</h1>
            <p>Double check ....</p>
            <div class="selectedPlan">
                <div>
                    <h3>Online Service</h3>
                    <a href="/step1">Change</a>
                </div>
                <p>9€/mo</p>
            </div>
            <div class="selectedAddOns">
                <ul>
                    <li>
                        <p>Online Service</p>
                        <p>+1€/mo</p>
                    </li>
                </ul>
            </div>
            <div class="total">
                <p></p>
                <p class="totalSum"></p>
            </div>
        </div>
        <div class="form--navigation">
            <a href="/step3">Go Back</a>
            <button type="submit">Confirm</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
