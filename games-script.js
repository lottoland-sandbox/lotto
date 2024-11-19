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
    var trackProduct = tile.getAttribute("data-track-product") || "";
    var trackContainer = tile.getAttribute("data-track-container") || "";

    // Get the label text and its data-track attributes (if present)
    var label = tile.querySelector(".label");
    var labelText = label ? label.textContent.trim() : "No Label";
    var labelTrackCategory = label ? label.getAttribute("data-track-category") || "" : "";

    // Get the header text and its data-track attributes (if present)
    var header = tile.querySelector(".header");
    var headerText = header ? header.textContent.trim() : "No Header";
    var headerTrackDescription = header ? header.getAttribute("data-track-description") || "" : "";

    // Get the amount text
    var amount = tile.querySelector(".amount");
    var amountText = amount ? amount.textContent.trim() : "No Amount";

    // Log the values to the console
    console.log(`Tile ${index + 1}:`);
    
    console.log(`  Amount: ${amountText}`);

    console.log(`  data-track-container: ${trackContainer}`);
    console.log(`  data-track-category: ${labelTrackCategory}`);
    console.log(`  data-track-subcategory: ${labelText}`);
    console.log(`  data-track-product: ${trackProduct}`);
    console.log(`  data-track-description: ${headerTrackDescription}`);

    // Tracking
    var Feature = 'games';
    var Domain="www.lotto.com";  
    event_properties['Domain'] = Domain;
    event_properties['Feature'] = Feature;

    
    event_properties['Object'] = "tile";
    event_properties['Container'] = trackContainer;
    event_properties['Category'] = labelTrackCategory;
    event_properties['Subcategory'] = labelText;
    event_properties['Genre'] = "lottery";
    event_properties['Product'] = trackProduct;
    event_properties['Description'] = headerTrackDescription;
    
    
    amplitude.track('impression', event_properties);


    
  });
});
