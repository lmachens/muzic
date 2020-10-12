import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const thriller = () => createTrackElement("Thriller", "Michael Jackson");
export const billieJean = () =>
  createTrackElement("Billie Jean", "Michael Jackson");
export const beatIt = () => createTrackElement("Beat It", "Michael Jackson");
