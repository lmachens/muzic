import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const thriller = () =>
  createTrackElement({
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  });
export const billieJean = () =>
  createTrackElement({
    title: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
  });
export const beatIt = () =>
  createTrackElement({
    title: "Beat It",
    artist: "Michael Jackson",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
  });

export const christmasAdventure = () =>
  createTrackElement({
    title: "A Christmas adventure",
    artist: "TRG Banks",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
  });

export const songs = () => {
  const christmasAdventureTrack = {
    title: "A Christmas adventure",
    artist: "TRG Banks",
    imgSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/images/albums/TRG_Banks_-_TRG_Banks_Christmas_Album_-_20180915194354202.png?method=crop&width=290&height=290",
  };
  const beatItTrack = {
    title: "Beat It",
    artist: "Michael Jackson",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
  };
  const thrillerTrack = {
    title: "Thriller",
    artist: "Michael Jackson",
    imgSrc:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e73ZzgeVfHsS-kcyVn5ZSQHaMp%26pid%3DApi&f=1",
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  };

  const playlist = [christmasAdventureTrack, beatItTrack, thrillerTrack];

  const container = document.createElement("section");

  playlist.forEach((track) => {
    const trackElement = createTrackElement(track);
    container.append(trackElement);
  });
  // for (let index = 0; index < playlist.length; index++) {
  //   const track = playlist[index];
  //   const trackElement = createTrackElement(track);
  //   container.append(trackElement);
  // }

  return container;
};
