<script setup></script>

<template>
    <form @submit.prevent="">
        <div>
            <h1>Personal Info</h1>
            <p>Please provide ...</p>
            <div class="plan">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Arcade</h3>
                    <p>9€/mo</p>
                </div>
            </div>
            <div class="plan">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Advanced</h3>
                    <p>12€/mo</p>
                </div>
            </div>
            <div class="plan">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h3>Pro</h3>
                    <p>15€/mo</p>
                </div>
            </div>
            <div class="paymentSchedule">
                <p class="monthly"></p>
                <input type="radio" />
                <p class="yearly"></p>
            </div>
        </div>
        <div class="form--navigation">
            <a href="/">Go Back</a>
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
