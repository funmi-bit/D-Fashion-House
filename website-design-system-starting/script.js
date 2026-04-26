document.addEventListener("DOMContentLoaded", () => {

// products to search for 
const products = [
  { name: "Red Dress" },
  { name: "Black Shoes" },
  { name: "White Shirt" },
  { name: "Blue Jeans" },
  { name: "Leather Jacket" }
];

// Get the input element using its ID
const input = document.getElementById("searchInput");

// This is the container where results will be displayed
const resultsContainer = document.getElementById("results");

// Async function to simulate searching (like calling an API)
async function searchProduct(query) {

    // Return a Promise (simulates async behavior like fetch)
    return new Promise((resolve) => {

        // Filter products based on search query
        const result = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        // Send results back
        resolve(result);
    });
}

// Listen for user input
input.addEventListener("input",  async () => {

  
    const query = input.value; 

    const result = await searchProduct(query);

    resultsContainer.innerHTML = "";

    result.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.name;
        resultsContainer.appendChild(div);
    });

});

console.log("this is working now");
});