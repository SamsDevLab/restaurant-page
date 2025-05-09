export const menu = function () {
  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  const menuHeader = document.createElement("h2");
  menuHeader.innerText = "Menu";
  menuDiv.appendChild(menuHeader);

  function createSection(menuSection, sectionHeader, itemNumber) {
    // Section (Drink, Apps, Meal)
    const section = document.createElement("div");
    section.classList.add(`${menuSection}-div`);

    const sectionHeading = document.createElement("h3");
    sectionHeading.innerText = sectionHeader;
    section.appendChild(sectionHeading);

    const createItems = function () {
      for (let i = 0; i < itemNumber; i++) {
        const itemDiv = document.createElement("div");
        const itemHeader = document.createElement("h4");
        const itemDescription = document.createElement("p");

        itemDiv.appendChild(itemHeader);
        itemDiv.appendChild(itemDescription);
        section.appendChild(itemDiv);
      }
    };

    createItems();
    menuDiv.appendChild(section);
  }

  createSection("drinks", "Drinks", 3);
  createSection("starters", "Starters", 2);
  createSection("meals", "Meals", 3);
  contentDiv.appendChild(menuDiv);
};
