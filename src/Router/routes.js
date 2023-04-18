import { Step1, Step2 } from "../Pages";

export const routes = [
    { path: "/", name: "Step1", component: () => Step1 },
    { path: "/step2", name: "Step2", component: () => Step2 },
];
