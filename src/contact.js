export const contact = function () {
  const contentDiv = document.querySelector("#content");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-div");

  function createContactElements() {
    for (let i = 0; i < 2; i++) {
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("inner-div");

      const header = document.createElement("h2");
      header.classList.add("header");

      const description = document.createElement("p");
      description.classList.add("description");

      innerDiv.appendChild(header);
      innerDiv.appendChild(description);
      contactDiv.appendChild(innerDiv);
    }
  }

  createContactElements();

  contentDiv.appendChild(contactDiv);
};
