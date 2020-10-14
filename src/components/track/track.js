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

  let isPlaying = false;

  buttonElement.onclick = function () {
    if (isPlaying) {
      audioElement.pause();
      playActionElement.src = playActionSrc;
      playActionElement.alt = "Play Button";
    } else {
      audioElement.play();
      playActionElement.src = pauseActionSrc;
      playActionElement.alt = "Pause Button";
    }

    isPlaying = !isPlaying;
  };

  return trackElement;
}
