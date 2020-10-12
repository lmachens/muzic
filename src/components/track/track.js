import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
/*
<div class="track">
  <img class="track__image" src="../michael.png"/>
  <h3 class="track__title">Billie Jean</h3>
  <p class="track__artist">Michael Jackson</p>
  <button>
    <img src="../play.svg" />
  </button>
</div>

*/
export function createTrackElement() {
  const title = "Thriller";
  const artist = "Michael Jackson";

  const trackElement = document.createElement("div"); // <div></div>
  //   divElement.innerText = "This is a track"; // <div>This is a track</div>
  trackElement.className = "track";

  const titleElement = document.createElement("h3"); // <h3></h3>
  titleElement.innerText = title; // <h3>Billie Jean</h3>
  const artistElement = document.createElement("p"); // <p></p>
  artistElement.innerText = artist; // <p>Michael Jackson</p>
  const imgElement = document.createElement("img");
  imgElement.src =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1";
  imgElement.alt = `Image of ${artist}`;
  imgElement.className = "track__image";
  const buttonElement = document.createElement("button"); // <button></button>
  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;
  //   buttonElement.innerHTML = `<img src="${playActionSrc}" />`;

  trackElement.append(imgElement, titleElement, artistElement, buttonElement); // <div><h3>Billie Jean</h3><p>Michael Jackson</p></div>
  buttonElement.append(playActionElement);

  return trackElement;
}
