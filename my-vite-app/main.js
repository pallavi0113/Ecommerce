import { showProductContainer } from "./homeProductCards";

fetch("/api/products.json")  // ✅ Fetch JSON file
  .then(response => response.json())  // Convert response to JSON
  .then(products => console.log(products))  // Log the data
  .catch(error => console.error("Error loading JSON:", error));
//define function named
showProductContainer(products);