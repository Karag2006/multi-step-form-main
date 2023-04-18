<script setup></script>

<template>
    <form @submit.prevent="">
        <div>
            <h1>Personal Info</h1>
            <p>Please provide ...</p>
            <div>
                <label></label>
                <input type="text" />
                <span></span>
            </div>
            <div>
                <label></label>
                <input type="email" />
                <span></span>
            </div>
            <div>
                <label></label>
                <input type="text" />
                <span></span>
            </div>
        </div>
        <div class="form--navigation">
            <button type="submit">Next Step</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>
