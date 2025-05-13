import "./styles.css";

import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

// Initial Page Load
home();

const contentDiv = document.querySelector("#content");

const callPage = function (button) {
  contentDiv.innerHTML = "";

  if (button === "Home") {
    home();
  } else if (button === "Menu") {
    menu();
  } else if (button === "Contact") {
    contact();
  }
};

const buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach((button) => {
  const buttonContents = button.innerText;
  button.addEventListener("click", () => callPage(buttonContents));
});
