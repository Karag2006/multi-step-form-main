import { defineStore } from "pinia";
import { ref } from "vue";
import { router } from "../Router";

export const useAppStore = defineStore("app", () => {
    const navItems = ref([
        { id: 1, name: "Step1", text: "Your Info" },
        { id: 2, name: "Step2", text: "Select Plan" },
        { id: 3, name: "Step3", text: "Add-Ons" },
        { id: 4, name: "Step4", text: "Summary" },
    ]);
    const plans = ref([
        {
            level: 1,
            name: "Arcade",
            img: "icon-arcade.svg",
            alt: "Arcade Plan Icon",
            mo: 9,
            yr: 90,
        },
        {
            level: 2,
            name: "Advanced",
            img: "icon-advanced.svg",
            alt: "Advanced Plan Icon",
            mo: 12,
            yr: 120,
        },
        {
            level: 3,
            name: "Pro",
            img: "icon-pro.svg",
            alt: "Pro Plan Icon",
            mo: 15,
            yr: 150,
        },
    ]);
    const addOns = ref([
        {
            id: 1,
            name: "Online Service",
            description: "Access to multiplayer games",
            mo: 1,
            yr: 10,
        },
        {
            id: 2,
            name: "Larger Storage",
            description: "Extra 1TB of cloud save",
            mo: 2,
            yr: 20,
        },
        {
            id: 3,
            name: "Customizable Profile",
            description: "Custom Theme on your profile",
            mo: 2,
            yr: 20,
        },
    ]);
    const classes = ref({
        name: "",
        email: "",
        phone: "",
    });
    const errors = ref({
        name: "",
        email: "",
        phone: "",
    });
    const contract = ref({
        customer: {
            name: "",
            email: "",
            phone: "",
        },
        plan: {
            level: "",
            monthly: true,
        },
        addOns: {
            selected: [],
        },
    });

    const formElementFocus = (name) => {
        classes.value[name] = "";
        errors.value[name] = "";
    };

    const handleStepValidation = (step) => {
        if (step == 1) {
            let valid = true;
            const fields = Object.keys(contract.value.customer);
            fields.forEach((element) => {
                if (!contract.value.customer[element]) {
                    errors.value[element] = "This field is required";
                    classes.value[element] = "error";
                    valid = false;
                }
            });
            return valid;
        }
    };

    const handleSubmit = (step) => {
        // Do step related validation check
        if (handleStepValidation(step)) {
            // if valid router push next step.
            const nextStep = step + 1;
            console.log(step);
            router.push({ name: "Step" + nextStep });
        }
    };

    return {
        navItems,
        plans,
        addOns,
        classes,
        errors,
        contract,
        handleSubmit,
        formElementFocus,
    };
});
