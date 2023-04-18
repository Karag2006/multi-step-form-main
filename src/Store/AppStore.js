import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
    const navItems = [
        { id: 1, name: "Step1", text: "Your Info", url: "/" },
        { id: 2, name: "Step2", text: "Select Plan", url: "/step2" },
        { id: 3, name: "Step3", text: "Add-Ons", url: "/step3" },
        { id: 4, name: "Step4", text: "Summary", url: "/step4" },
    ];

    return { navItems };
});
