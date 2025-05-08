export const home = function () {
  const contentDiv = document.querySelector("#content");
  const homeDiv = document.createElement("div");
  const textDiv = document.createElement("div");

  homeDiv.classList.add("home-div");
  textDiv.classList.add("text-div");

  contentDiv.appendChild(homeDiv);
  homeDiv.appendChild(textDiv);

  function createBrandName() {
    const brandName = document.createElement("h2");
    brandName.innerText = "Mudgut's Cafe";
    textDiv.appendChild(brandName);
  }

  function createSlogan() {
    const slogan = document.createElement("h3");
    slogan.innerText =
      "Rust, dust, and roadkill - last stop before the end of the world!";
    textDiv.appendChild(slogan);
  }

  function createSideImg() {
    const sideImg = document.createElement("img");
    sideImg.alt = "Post-apocalyptic diner";
    sideImg.src = require("./images/mudguts-cafe.png");
    // sideImg.src = require("./images/roadkill-cafe.png");
    homeDiv.appendChild(sideImg);
  }

  createBrandName();
  createSlogan();
  createSideImg();
};
