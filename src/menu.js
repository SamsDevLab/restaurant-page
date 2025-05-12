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

        const itemHeaderDiv = document.createElement("div");
        itemHeaderDiv.classList.add("item-header-div");

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("item-price");

        itemHeaderDiv.appendChild(itemHeader);
        itemHeaderDiv.appendChild(itemPrice);
        itemDiv.appendChild(itemHeaderDiv);
        itemDiv.appendChild(itemDescription);
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
      "$5.00",
      "Got desert mouth from travelin' across The Wasteland? Wash it all away with one (or five) of our sudsy beers!"
    ),

    createMenuItem(
      "Coffee",
      "$2.00",
      "Smackin' yourself in the face just to stay awake?! You may be overdue for a cup of joe!"
    ),

    createMenuItem(
      "Soda",
      "$3.00 ",
      "Fuel yourself with some Aqua Cola! All major brands available."
    ),
  ];

  const starters = [
    createMenuItem(
      "Wasteland Waffle Fries",
      "$3.50",
      "Trademark snack of The Wasteland! Fried to golden perfection in 100% beef tallow."
    ),
    createMenuItem(
      "Thunderdome Sliders",
      "$6.00",
      "Enter the Thunderdome! ...Sliders, that is. 100% Angus beef sliders come on a Hawaiian sweet roll, with Worcestershire sauce and your choice of cheese."
    ),
  ];

  const meals = [
    createMenuItem(
      "Bullet Farm Burger",
      "$8.00",
      "This 100% Angus beef patty comes armed and dangerous. Complete with bacon, caramelized onions, and your choice of cheese."
    ),

    createMenuItem(
      "Dink-Di Meat and Three",
      "$12.00",
      "We can't legally serve you actual Dinki-Di dog food. So, take our meat and three option instead! Your choice of chicken-fried steak, meatloaf, or porkchop."
    ),

    createMenuItem(
      "The Green Place Veggie Plate",
      "$6.50",
      "Veggie plate from far away in The Green Place, where the rivers flow and the foilage grows."
    ),
  ];

  addItemsToMenu("drinks", drinks);
  addItemsToMenu("starters", starters);
  addItemsToMenu("meals", meals);
};
