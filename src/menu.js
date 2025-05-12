export const menu = function () {
  const contentDiv = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-div");

  const menuHeader = document.createElement("h2");
  menuHeader.innerText = "Menu";
  menuDiv.appendChild(menuHeader);

  function createSection(menuSection, itemNumber) {
    // Section (Drink, Apps, Meal)
    const section = document.createElement("div");
    section.setAttribute("id", `${menuSection}`);
    section.classList.add("section");

    const sectionHeading = document.createElement("h3");
    sectionHeading.classList.add("section-header");
    section.appendChild(sectionHeading);

    const createItems = function () {
      for (let i = 0; i < itemNumber; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-div");

        const itemHeader = document.createElement("h4");
        itemHeader.classList.add("item-header");

        const itemDescription = document.createElement("p");
        itemDescription.classList.add("item-description");

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");

        itemDiv.appendChild(itemHeader);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);
        section.appendChild(itemDiv);
      }
    };

    createItems();
    menuDiv.appendChild(section);
  }

  createSection("drinks", 3);
  createSection("starters", 2);
  createSection("meals", 3);
  contentDiv.appendChild(menuDiv);

  // Add Content to the DOM Below
  function addHeader(menuSection, sectionHeader) {
    const section = document.querySelector(`#${menuSection}`);
    const header = section.querySelector("h3");
    header.innerText = sectionHeader;
  }

  addHeader("drinks", "Drinks");
  addHeader("starters", "Starters");
  addHeader("meals", "Meals");

  // Add Items to DOM:
  function addItemsToMenu(menuSection, menuItems) {
    const grandparent = document.querySelector(`#${menuSection}`);
    const parent = Array.from(grandparent.querySelectorAll(".item-div"));
    const items = menuItems;

    parent.forEach((element, index) => {
      const itemName = element.querySelector(".item-header");
      const itemPrice = element.querySelector(".item-price");
      const itemDescription = element.querySelector(".item-description");

      itemName.innerText = items[index].name;
      itemPrice.innerText = items[index].price;
      itemDescription.innerText = items[index].description;
    });
  }

  function createMenuItem(name, price, description) {
    return {
      name,
      price,
      description,
    };
  }

  // Drinks
  const drinks = [
    createMenuItem(
      "Beer",
      "$5",
      "Got desert mouth from travelin' across the wasteland? Wash it all away with one (or five) of our sudsy beers!"
    ),

    createMenuItem(
      "Coffee",
      "$2",
      "Smackin' yourself in the face just to stay awake?! Time for a cup of joe!"
    ),

    createMenuItem(
      "Soda",
      "$3.00 with Free Refills",
      "It may be poison, but at least it tastes good!"
    ),
  ];

  const starters = [
    createMenuItem("Waffle Fries", "$4.50", "Dank Fries, Bruh"),
    createMenuItem("Sliders", "$6.00", "These slidies are BTD Big Time Dank"),
  ];

  const meals = [
    createMenuItem(
      "Burger with Wasteland Waffle Fries",
      "$8.00",
      "Feast on a dank burger"
    ),

    createMenuItem(
      "Dink-Di Meat and Three",
      "$9.00",
      "This ain't no dog food!"
    ),

    createMenuItem(
      "The Green Place Veggie Plate",
      "$6.50",
      "Dank veggies, dawg"
    ),
  ];

  addItemsToMenu("drinks", drinks);
  addItemsToMenu("starters", starters);
  addItemsToMenu("meals", meals);
};

/* 
Drinks
- Beer
- Coffee
- Tea

Appetizers
- Sliders
- Fries

Meals
- Burger w/ Fries
- Dinki-Di Meat and Three
- Vegetable Plate
*/
