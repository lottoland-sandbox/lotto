document.addEventListener("DOMContentLoaded", () => {
  // Select all game tiles
  const gameTiles = document.querySelectorAll(".card");

  gameTiles.forEach((tile, index) => {
    // Check if the tile or its child elements have `data-track-*` attributes
    const hasDataTrackAttributes =
      Array.from(tile.attributes).some(attr => attr.name.startsWith("data-track-")) ||
      Array.from(tile.querySelectorAll("*")).some(element =>
        Array.from(element.attributes).some(attr => attr.name.startsWith("data-track-"))
      );

    // If no data-track attributes, skip this tile
    if (!hasDataTrackAttributes) return;

    // Get data-track attributes for the card
    const trackProduct = tile.getAttribute("data-track-product") || "";
    const trackContainer = tile.getAttribute("data-track-container") || "";

    // Get the label text and its data-track attributes (if present)
    const label = tile.querySelector(".label");
    const labelText = label ? label.textContent.trim() : "No Label";
    const labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

    // Get the header text and its data-track attributes (if present)
    const header = tile.querySelector(".header");
    const headerText = header ? header.textContent.trim() : "No Header";
    const headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

    // Get the amount text
    const amount = tile.querySelector(".amount");
    const amountText = amount ? amount.textContent.trim() : "No Amount";

    // Log the values to the console
    console.log(`Tile ${index + 1}:`);
    console.log(`  Amount: ${amountText}`);
    console.log(`  data-track-container: ${trackContainer}`);
    console.log(`  data-track-category: ${labelTrackCategory}`);
    console.log(`  data-track-subcategory: ${labelText}`);
    console.log(`  data-track-product: ${trackProduct}`);
    console.log(`  data-track-description: ${headerTrackDescription}`);

    // Create a new event_properties object for each tile
    const event_properties = {
      Domain: "www.lotto.com",
      Feature: "games",
      Object: "tile",
      Container: trackContainer,
      Category: labelTrackCategory,
      Subcategory: labelText,
      Genre: "lottery",
      Product: trackProduct,
      Description: headerTrackDescription,
    };

    // Alert and track the event
    //alert(JSON.stringify(event_properties));
    amplitude.track("impression", event_properties);
  });
});


function trackCardData(clickedElement) {
  // Find the parent card element
  const card = clickedElement.closest(".card");

  if (!card) {
    console.error("Card element not found!");
    return;
  }

  // Get data-track attributes for the card
  const trackProduct = card.getAttribute("data-track-product") || "";
  const trackContainer = card.getAttribute("data-track-container") || "";

  // Get the label text and its data-track attributes
  const label = card.querySelector(".label");
  const labelText = label ? label.textContent.trim() : "No Label";
  const labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

  // Get the header text and its data-track attributes
  const header = card.querySelector(".header");
  const headerText = header ? header.textContent.trim() : "No Header";
  const headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

  // Get the amount text
  const amount = card.querySelector(".amount");
  const amountText = amount ? amount.textContent.trim() : "No Amount";

  // Create a new event_properties object
  const event_properties = {
    Domain: "www.lotto.com",
    Feature: "games",
    Object: "tile",
    Container: trackContainer,
    Category: labelTrackCategory,
    Subcategory: labelText,
    Genre: "lottery",
    Product: trackProduct,
    Description: headerTrackDescription,

  };

  // Log the properties for debugging
  console.log("Tracked Event Properties:", event_properties);

  // Track the event
  amplitude.track("click", event_properties);
  alert(labelText);
}


function play(clickedElement) {
  // Find the parent card element
  const card = clickedElement.closest(".card");

  if (!card) {
    console.error("Card element not found!");
    return;
  }

  // Get data-track attributes for the card
  const trackProduct = card.getAttribute("data-track-product") || "";
  const trackContainer = card.getAttribute("data-track-container") || "";

  // Get the label text and its data-track attributes
  const label = card.querySelector(".label");
  const labelText = label ? label.textContent.trim() : "No Label";
  const labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

  // Get the header text and its data-track attributes
  const header = card.querySelector(".header");
  const headerText = header ? header.textContent.trim() : "No Header";
  const headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

  // Get the amount text
  const amount = card.querySelector(".amount");
  const amountText = amount ? amount.textContent.trim() : "No Amount";

  // Create a new event_properties object
  const event_properties = {
    Domain: "www.lotto.com",
    Feature: "games",
    Object: "button",
    Container: trackContainer,
    Category: labelTrackCategory,
    Subcategory: labelText,
    Name: "play",
    Genre: "lottery",
    Product: trackProduct,
    Description: headerTrackDescription,

  };

  // Log the properties for debugging
  console.log("Tracked Event Properties:", event_properties);

  // Track the event
  amplitude.track("click", event_properties);
  alert("Play Now");
}

function quickPicks(clickedElement) {
  // Find the parent card element
  const card = clickedElement.closest(".card");

  if (!card) {
    console.error("Card element not found!");
    return;
  }

  // Get data-track attributes for the card
  const trackProduct = card.getAttribute("data-track-product") || "";
  const trackContainer = card.getAttribute("data-track-container") || "";

  // Get the label text and its data-track attributes
  const label = card.querySelector(".label");
  const labelText = label ? label.textContent.trim() : "No Label";
  const labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

  // Get the header text and its data-track attributes
  const header = card.querySelector(".header");
  const headerText = header ? header.textContent.trim() : "No Header";
  const headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

  // Get the amount text
  const amount = card.querySelector(".amount");
  const amountText = amount ? amount.textContent.trim() : "No Amount";

  // Create a new event_properties object
  const event_properties = {
    Domain: "www.lotto.com",
    Feature: "games",
    Object: "button",
    Container: trackContainer,
    Category: labelTrackCategory,
    Subcategory: labelText,
    Name: "quickPicks",
    Genre: "lottery",
    Product: trackProduct,
    Description: headerTrackDescription,

  };

  // Log the properties for debugging
  console.log("Tracked Event Properties:", event_properties);

  // Track the event
  amplitude.track("click", event_properties);
  alert("Quick Picks");
}

function scratch(clickedElement) {
  // Find the parent card element
  const card = clickedElement.closest(".card");

  if (!card) {
    console.error("Card element not found!");
    return;
  }

  // Get data-track attributes for the card
  const trackProduct = card.getAttribute("data-track-product") || "";
  const trackContainer = card.getAttribute("data-track-container") || "";

  // Get the label text and its data-track attributes
  const label = card.querySelector(".label");
  const labelText = label ? label.textContent.trim() : "No Label";
  const labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

  // Get the header text and its data-track attributes
  const header = card.querySelector(".header");
  const headerText = header ? header.textContent.trim() : "No Header";
  const headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

  // Get the amount text
  const amount = card.querySelector(".amount");
  const amountText = amount ? amount.textContent.trim() : "No Amount";

  // Create a new event_properties object
  const event_properties = {
    Domain: "www.lotto.com",
    Feature: "games",
    Object: "button",
    Container: trackContainer,
    Category: labelTrackCategory,
    Subcategory: labelText,
    Name: "play",
    Genre: "lottery",
    Product: trackProduct,
    Description: headerTrackDescription,

  };

  // Log the properties for debugging
  console.log("Tracked Event Properties:", event_properties);

  // Track the event
  amplitude.track("click", event_properties);
  alert("Scratch Now");
}

