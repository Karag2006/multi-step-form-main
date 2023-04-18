import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./Router/routes";
import "./scss/global.scss";
import App from "./App.vue";

const pinia = createPinia();
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount("#app");
