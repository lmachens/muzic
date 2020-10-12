import "./bottom-nav.css";
import bottomNavHome from "./home.html";
import bottomNavSongs from "./songs.html";
import bottomNavSettings from "./settings.html";
import bottomNavNone from "./none.html";
import centered from "@storybook/addon-centered/html";

export default {
  title: "Components/Bottom Navigation",
  decorators: [centered],
};

export const home = () => bottomNavHome;
export const songs = () => bottomNavSongs;
export const settings = () => bottomNavSettings;
export const none = () => bottomNavNone;
