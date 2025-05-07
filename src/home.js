export const home = function () {
  // Grab Content Div
  const contentDiv = document.querySelector("#content");

  // Text
  const slogan = document.createElement("h2");
  slogan.innerText = "Rust, Dust and Roadkill! Come visit Mudgut's Cafe";

  // Image
  const sideImg = document.createElement("img");
  sideImg.alt = "Post-apocalyptic diner";
  sideImg.src = require("./images/roadkill-cafe.png");

  // Append Elements
  contentDiv.appendChild(slogan);
  contentDiv.appendChild(sideImg);
};
