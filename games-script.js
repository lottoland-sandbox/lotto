document.addEventListener("DOMContentLoaded", () => {
  // Select all game tiles
  const gameTiles = document.querySelectorAll(".card");

  gameTiles.forEach((tile, index) => {
    // Get the label text (if present)
    const label = tile.querySelector(".label");
    const labelText = label ? label.textContent.trim() : "No Label";

    // Get the header text
    const header = tile.querySelector(".header");
    const headerText = header ? header.textContent.trim() : "No Header";

    // Get the amount text
    const amount = tile.querySelector(".amount");
    const amountText = amount ? amount.textContent.trim() : "No Amount";

    // Get data-track attributes
    const trackProduct = tile.getAttribute("data-track-product") || "No data-track-product";
    const trackCategory = label ? label.getAttribute("data-track-category") || "No data-track-category" : "No data-track-category";

    // Log the values to the console
    console.log(`Tile ${index + 1}:`);
    console.log(`  Label: ${labelText}`);
    console.log(`  Header: ${headerText}`);
    console.log(`  Amount: ${amountText}`);
    console.log(`  data-track-product: ${trackProduct}`);
    console.log(`  data-track-category: ${trackCategory}`);
  });
});
