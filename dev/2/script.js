// JavaScript code to generate HTML and CSS dynamically

const api_url = "https://raw.githubusercontent.com/Ramrachai/echologyx-test/master/dev/echologyx/Ram/products.json"

const icon1 = "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/ou9hjlu8orzfig3o5jd2.svg"
const icon2 = "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/x8mzqfnnxa55opyfvuft.svg"
const icon3 = "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/gstunorpjfyaugsf97sa.svg"


let productData = []

async function getProducts() {
  let res = await fetch(api_url)
  let data = await res.json()
  console.log("data-- ", data)
  productData = await data

  renderCategoriesAndProducts();
}

function renderCategoriesAndProducts() {
  // Clear the current body
  document.body.innerHTML = '';

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
      position: relative;
    }
    .hidden {
      display: none;
    }
    .checkmark {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 20px;
      height: 20px;
      fill: green;
    }
  `;
  document.head.appendChild(style);

  // Create categories container
  const categoriesContainer = document.createElement('div');
  categoriesContainer.id = 'categories';
  document.body.appendChild(categoriesContainer);

  // Create products container
  const productsContainer = document.createElement('div');
  productsContainer.id = 'products';
  document.body.appendChild(productsContainer);

  // Create result container
  const resultContainer = document.createElement('div');
  resultContainer.id = 'result';
  document.body.appendChild(resultContainer);

  // Render categories
  const categories = [...new Set(productData.map(product => product.category))];
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('category-card');
    categoryCard.textContent = category;
    let isHidden = false;
    const checkIcon = createCheckmarkSVG(); // Create checkmark SVG
    categoryCard.appendChild(checkIcon); // Append checkmark to category card
    categoryCard.addEventListener('click', () => {
      isHidden = !isHidden;
      toggleProducts(category, isHidden);
      // Toggle checkmark visibility based on isHidden value
      checkIcon.style.display = isHidden ? 'none' : 'block';
    });
    categoriesContainer.appendChild(categoryCard);

    // Initially hide checkmark if products are hidden
    if (isHidden) {
      checkIcon.style.display = 'none';
    }
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

    updateResult(products.filter(product => !productCardIsHidden(product.id)).length);
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

    updateResult(productData.filter(product => !productCardIsHidden(product.id)).length);
  }

  // Update result container with the number of visible products
  function updateResult(count) {
    resultContainer.textContent = `Result: ${count} Product${count !== 1 ? 's' : ''}`;
  }

  // Check if a product card is hidden
  function productCardIsHidden(id) {
    const productCard = document.getElementById(`product-${id}`);
    return productCard && productCard.classList.contains('hidden');
  }

  // Create checkmark SVG
  function createCheckmarkSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('checkmark');
    svg.setAttribute('width', '20');
    svg.setAttribute('height', '20');
    svg.setAttribute('viewBox', '0 0 35 35');
    svg.setAttribute('fill', 'none');
    svg.innerHTML = `
      <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
      <path d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
    `;
    return svg;
  }

  // Initially show all products
  renderProducts(productData);
}

getProducts();
