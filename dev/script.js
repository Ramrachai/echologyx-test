const productData = [
    {
      id: 1,
      name: "Product 1",
      description: "Description for product 1",
      price: 19.99,
      category: 1,
      image: "image/path/to/product1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description for product 2",
      price: 24.99,
      category: 2,
      image: "image/path/to/product2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description for product 3",
      price: 39.99,
      category: 2,
      image: "image/path/to/product3.jpg", // Replace with actual image path
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description for product 4",
      price: 14.99,
      category: 2,
      image: "image/path/to/product4.jpg", // Replace with actual image path
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description for product 5",
      price: 49.99,
      category: 3,
      image: "image/path/to/product5.jpg", // Replace with actual image path
    },
    {
      id: 6,
      name: "Product 6",
      description: "Description for product 6",
      price: 29.99,
      category: 3,
      image: "image/path/to/product6.jpg", // Replace with actual image path
    },
  ];
  


  // script.js


const categoryCards = document.querySelectorAll('.category.card');
const productContainer = document.querySelector('.products');

// Function to display products based on selected categories
function displayProducts() {
  const selectedCategories = Array.from(categoryCards)
    .filter(card => card.querySelector('input').checked)
    .map(card => card.dataset.category);

  productContainer.innerHTML = '';

  productData.forEach(product => {
    if (selectedCategories.includes(String(product.category))) {
      const productCard = createProductCard(product);
      productContainer.appendChild(productCard);
    }
  });
}

// Function to create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card');

  // Add elements to the card based on your product data structure

  return card;
}

// Add event listeners to category cards
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const checkbox = card.querySelector('input');
    checkbox.checked = !checkbox.checked;

    const label = card.querySelector('label');
    label.textContent = checkbox.checked ? '✓' : '';

    displayProducts();
  });
});

// Display all products initially
displayProducts();


