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
    alert(JSON.stringify(event_properties));
    amplitude.track("impression", event_properties);
  });
});
