export const home = function () {
  const contentDiv = document.querySelector("#content");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("home-container");

  const slogan = document.createElement("h2");
  slogan.innerText = "Rust, Dust and Roadkill! Come visit Mudgut's Cafe";

  const sideImg = document.createElement("img");
  sideImg.alt = "Post-apocalyptic diner";
  sideImg.src = require("./images/roadkill-cafe.png");

  homeDiv.appendChild(slogan);
  homeDiv.appendChild(sideImg);
  contentDiv.appendChild(homeDiv);
};

// For Commit Purposes: Last thing I did was remove comments
