import "./title.css";
import title from "./title.html";
import centered from "@storybook/addon-centered/html";

export default { title: "Components/Title", decorators: [centered] };

export const main = () => title;
