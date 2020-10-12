export function createTrackElement() {
  const divElement = document.createElement("div"); // <div></div>
  //   divElement.innerText = "This is a track"; // <div>This is a track</div>

  const h3Element = document.createElement("h3"); // <h3></h3>
  h3Element.innerText = "Michael Jackson"; // <h3>Michael Jackson</h3>

  divElement.append(h3Element); // <div><h3>Michael Jackson</h3></div>
  return divElement;
}
