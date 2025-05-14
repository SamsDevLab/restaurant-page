export const contact = function () {
  const contentDiv = document.querySelector("#content");
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contact-div");
  contentDiv.appendChild(contactDiv);

  const sections = [
    {
      header: "About",
      description:
        "Established in 1987, Mudgut's Cafe is a desert diner inspired by the Mad Max franchise. Named after Mudguts, a lawless member of Toecutter's gang of heathens, this desert oasis will leave you refreshed for your drive to the next town.",
    },
    {
      header: "Contact",
      addressHeader: "Address:",
      addressLineOne: "555 Middle of Nowhere Dr.",
      addressLineTwo: "Somewhere USA 55555",
      hoursHeader: "Hours:",
      hours: "24/7/365",
      phoneHeader: "Phone:",
      phoneNumber: "555-555-5555",
      emailHeader: "Email:",
      email: "mudgutscafe@someemail.com",
    },
  ];

  function createContactElements(sections) {
    const contactSections = sections;

    contactSections.forEach((element, index) => {
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("inner-div");
      innerDiv.classList.add(`div${index + 1}`);

      for (let [key, value] of Object.entries(element)) {
        if (key === "header") {
          const header = document.createElement("h2");
          header.classList.add("headerDiv");
          header.innerText = element.header;
          innerDiv.appendChild(header);
        } else if (key === "description") {
          const paragraph = document.createElement("p");
          paragraph.innerText = value;
          innerDiv.appendChild(paragraph);
        } else if (
          key === "addressHeader" ||
          key === "hoursHeader" ||
          key === "phoneHeader" ||
          key === "emailHeader"
        ) {
          const header = document.createElement("h3");
          header.innerText = value;
          innerDiv.appendChild(header);
        } else {
          const paragraph = document.createElement("p");
          paragraph.innerText = value;
          innerDiv.appendChild(paragraph);
        }
      }

      contactDiv.appendChild(innerDiv);
    });

    const image = document.createElement("img");
    image.src = require("./images/inside-mudguts-lightened.png");
    image.setAttribute("id", "inside-mudguts");
    contactDiv.appendChild(image);
  }

  createContactElements(sections);
};
