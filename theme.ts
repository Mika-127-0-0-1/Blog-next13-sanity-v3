import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#lalala",
    "--brand": "#F7AB0A",
    "--my-red": "#bd4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
    // Base theme colors
    "--black": "#lalala",
    "--white": "#fff",

    "--gray": "#666",
    "--gray-base": "#666",

    "--component-bg": "#lalala",
    "--component-text-color": "#fff",

    // Brand
    "--brand-primary": "#F7AB0A",

    // Default button
    "--default-button-color": "#666",
    "--default-button-primary-color": "#F7AB0A",
    "--default-button-danger-color": "#bd4437",
    "--default-button-success-color": "#0f9d58",
    "--default-button-warning-color": "#f4b400",

    // State
    "--state-danger-color": "#bd4437",
    "--state-info-color": "#F7AB0A",
    "--state-success-color": "#0f9d58",
    "--state-warning-color": "#f4b400",

    // Navbar
    "--main-navigation-color": "#lalala",
    "--main-navigation-color--inverted": "#fff",

    "--focus-color": "#F7AB0A"
});

// export const myTheme = buildLegacyTheme({
//     // Base theme colors
//     "--black": props["--my-black"],
//     "--white": props["--my-white"],

//     "--gray": "#666",
//     "--gray-base": "#666",

//     "--component-bg": props["--my-black"],
//     "--component-text-color": props["--my-white"],

//     // Brand
//     "--brand-primary": props["--brand"],

//     // Default button
//     "--default-button-color": "#666",
//     "--default-button-primary-color": props["--brand"],
//     "--default-button-danger-color": props["--my-red"],
//     "--default-button-success-color": props["--my-green"],
//     "--default-button-warning-color": props["--my-yellow"],

//     // State
//     "--state-danger-color": props["--my-red"],
//     "--state-info-color": props["--brand"],
//     "--state-success-color": props["--my-green"],
//     "--state-warning-color": props["--my-yellow"],

//     // Navbar
//     "--main-navigation-color": props["--my-black"],
//     "--main-navigation-color--inverted": props["--my-white"],

//     "--focus-color": props["--brand"]
// });
