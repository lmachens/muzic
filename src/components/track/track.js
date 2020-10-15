import "./track.css";
import playActionSrc from "../../assets/play-action.svg";
import pauseActionSrc from "../../assets/icon-pause-gradient.svg";
import { createElement } from "../../utils/elements";

export const createTrackElement = (track) => {
  const audioElement = new Audio(track.audioSrc);
  const playActionElement = createElement("img", {
    src: playActionSrc,
  });

  const trackElement = createElement("div", {
    className: "track",
    children: [
      createElement("img", {
        className: "track__image",
        src: track.imgSrc,
        alt: `Image of ${track.artist}`,
      }),
      createElement("div", {
        className: "track__description",
        children: [
          createElement("h3", {
            innerText: track.title,
          }),
          createElement("p", {
            innerText: track.artist,
          }),
        ],
      }),
      createElement("button", {
        className: "track__button",
        children: [playActionElement],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            setPlayIcon(playActionElement);
          } else {
            audioElement.play();
            setPauseIcon(playActionElement);
          }
        },
      }),
    ],
  });
  return trackElement;
};

const setPlayIcon = (element) => {
  element.src = playActionSrc;
  element.alt = "Play Button";
};

const setPauseIcon = (element) => {
  element.src = pauseActionSrc;
  element.alt = "Pause Button";
};
