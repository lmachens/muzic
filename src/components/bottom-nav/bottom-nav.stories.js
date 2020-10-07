import "./bottom-nav.css";
import bottomNavHome from "./home.html";
import bottomNavSongs from "./songs.html";
import bottomNavSettings from "./settings.html";
import bottomNavNone from "./none.html";

export default {
  title: "Components/Bottom Navigation",
};

export const home = () => bottomNavHome;
export const songs = () => bottomNavSongs;
export const settings = () => bottomNavSettings;
export const none = () => bottomNavNone;
