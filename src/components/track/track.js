import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import pauseActionSrc from "../../assets/icon-pause-gradient.svg";
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
export function createTrackElement(track) {
  const trackElement = document.createElement("div");
  trackElement.className = "track";

  const trackDescription = document.createElement("div");
  trackDescription.className = "track__description";

  const titleElement = document.createElement("h3");
  titleElement.innerText = track.title;
  const artistElement = document.createElement("p");
  artistElement.innerText = track.artist;

  trackDescription.append(titleElement, artistElement);

  const imgElement = document.createElement("img");
  imgElement.src = track.imgSrc;
  imgElement.alt = `Image of ${track.artist}`;
  imgElement.className = "track__image";
  const buttonElement = document.createElement("button");
  buttonElement.className = "track__button";

  const playActionElement = document.createElement("img");
  playActionElement.src = playActionSrc;

  trackElement.append(imgElement, trackDescription, buttonElement);
  buttonElement.append(playActionElement);

  const audioElement = new Audio(track.audioSrc);

  buttonElement.onclick = function () {
    if (!audioElement.paused) {
      audioElement.pause();
      setPlayIcon(playActionElement);
    } else {
      audioElement.play();
      setPauseIcon(playActionElement);
    }
  };

  return trackElement;
}

const setPlayIcon = (element) => {
  element.src = playActionSrc;
  element.alt = "Play Button";
};

const setPauseIcon = (element) => {
  element.src = pauseActionSrc;
  element.alt = "Pause Button";
};
