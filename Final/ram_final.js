// JavaScript code to generate HTML and CSS dynamically

const api_url = "https://raw.githubusercontent.com/Ramrachai/echologyx-test/master/dev/echologyx/Ram/products.json"

let productData = []

async function getProducts() {
  let res = await fetch(api_url)
  let data = await res.json()
  console.log("data-- ", data)
  productData = await data

  renderCategoriesAndProducts();
}

function renderCategoriesAndProducts() {
  const body = document.body;

  // Generate CSS styles
  const style = document.createElement('style');
  style.textContent = `
    .category-card, .product-card {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 10px;
      width: 200px;
      display: inline-block;
      cursor: pointer;
    }
    .hidden {
      display: none;
    }
  `;
  document.head.appendChild(style);

  // Create categories container
  const categoriesContainer = document.createElement('div');
  categoriesContainer.id = 'categories';
  body.appendChild(categoriesContainer);

  // Create products container
  const productsContainer = document.createElement('div');
  productsContainer.id = 'products';
  body.appendChild(productsContainer);

  // Render categories
  const categories = [...new Set(productData.map(product => product.category))];
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');
    categoryCard.textContent = category;
    let isHidden = false;
    categoryCard.addEventListener('click', () => {
      isHidden = !isHidden;
      toggleProducts(category, isHidden);
    });
    categoriesContainer.appendChild(categoryCard);
  });

  // Render products
  function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.id = `product-${product.id}`; // Set unique ID for each product card
      productCard.innerHTML = `
        <h3>${product.title}</h3>
        <p>${product.subtitle}</p>
        <ul>
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <button>${product.buttonText}</button>
        <img width="100" src="${product.imgLink}" alt="${product.title}">
      `;
      productsContainer.appendChild(productCard);
    });
  }

  function toggleProducts(category, isHidden) {
    const filteredProducts = productData.filter(product => product.category === category);
    filteredProducts.forEach(product => {
      const productCard = document.getElementById(`product-${product.id}`);
      if (productCard) {
        if (isHidden) {
          productCard.classList.add('hidden');
        } else {
          productCard.classList.remove('hidden');
        }
      }
    });
  }

  // Initially show all products
  renderProducts(productData);
}

getProducts();
