import "./button.css";
import buttonPrimary from "./button-primary.html";
import buttonSecondary from "./button-secondary.html";
import buttonBigContent from "./button-big-content.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Button", decorators: [centered] };

export const primary = () => buttonPrimary;
export const secondary = () => buttonSecondary;
export const bigContent = () => buttonBigContent;
