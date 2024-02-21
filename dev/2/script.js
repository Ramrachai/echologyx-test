// JavaScript code to generate HTML and CSS dynamically

const api_url = "https://raw.githubusercontent.com/Ramrachai/echologyx-test/master/dev/echologyx/Ram/products.json";

let productData = [];

async function getProducts() {
  let res = await fetch(api_url);
  let data = await res.json();
  console.log("data-- ", data);
  productData = await data;

  renderCategoriesAndProducts();
}

function renderCategoriesAndProducts() {
  // Clear the current body
  document.body.innerHTML = "";

  // Generate CSS styles
  const style = document.createElement("style");
  style.textContent = `

   * {
      margin: 0; 
      padding: 0; 
   }
    body {

      box-sizing: border-box; 
      font-family: Arial;
    }

    .header {
      color: #fff;
      padding: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
      width: 80%;
      margin: 2rem auto; 
      background: #f5f5f5; 
      height: 80px;
    }
    
    .header img {
      width: 40px;
    }
    
    .header p {
      color: #464646;
    }

    #categories {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: 80%; 
      margin: 0 auto; 
      flex-wrap: wrap; 
    }
    .category-card{
      background: #1e9fc4;
      flex: 1; 
      min-height: 200px;
      display:flex; 
      justify-content: center;
      align-items:center; 
      flex-direction: column;
      color: white;
      gap: 12px;
    }
    .category-title {
      width: 80%; 
      text-align: left; 
      margin: 16px auto;
      padding-top: 1rem;
    }
    .category-card p {
      font-size: 13px;
      text-align: center;
    }

    .category-card, .product-card {
      margin: 16px;
      width: 100%;
      cursor: pointer;
      position: relative;
    }

    div#result {
      width: 80%;
      margin: 1rem auto;
      font-size: 18px;
    }

    div#products {
      width: 80%;
      margin: 1rem auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .product-card {
      background: #f5f5f5;
      display: flex;
      gap: 4rem;
      align-items: center;
  }

    .product-card div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .product-card div li {
        list-style: none;
        font-size: 16px;
        margin-bottom: 12px;
    }

    .product-card div button{
      background: #3db1c9;
      border: none;
      padding: 1rem 2rem;
      font-size: 1.2rem;
      color: white;
      width: fit-content;
      border-radius: 6px;
    }
    .product-card div h3 {
      font-size: 2rem;
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
    .category-icon {
      width: 50px;
      height: 50px;
    }
  `;
  document.head.appendChild(style);


  // header section  

  // Create a CSS class for styling the header
  const headerClass = "header";

  // header section
  const header = document.createElement("header");
  header.classList.add(headerClass); // Add the class to the header

  const logo = document.createElement("img");
  logo.src =
    "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/logo_white_consors.png";
  logo.alt = "Logo";
  header.appendChild(logo);

  const headerText = document.createElement("p");
  const boldText = document.createElement("b");
  boldText.textContent = "Unsere besten Angebote";
  headerText.appendChild(boldText);
  headerText.innerHTML += "<br>";

  const spanText = document.createElement("span");
  spanText.textContent = " Willkommen bei der Consorsbank ";
  headerText.appendChild(spanText);

  header.appendChild(headerText);

  const headerRight = document.createElement("img");
  headerRight.src =
    "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/bester_online_broker_2023.jpg";
  headerRight.alt = "Header Right";
  headerRight.style.marginLeft = "auto";
  header.appendChild(headerRight);

  // Append the header to the document body
  document.body.appendChild(header);


  const categoryTitle = document.createElement("h2")
  categoryTitle.textContent = "Wofür interessieren Sie sich?"
  categoryTitle.classList.add("category-title")
  document.body.appendChild(categoryTitle)

  // Create categories container
  const categoriesContainer = document.createElement("div");
  categoriesContainer.id = "categories";
  document.body.appendChild(categoriesContainer);

  // Create result container
  const resultContainer = document.createElement("div");
  resultContainer.id = "result";
  document.body.appendChild(resultContainer);

  // Create products container
  const productsContainer = document.createElement("div");
  productsContainer.id = "products";
  document.body.appendChild(productsContainer);



  // Render categories
  const categories = [...new Set(productData.map((product) => product.category))];
  categories.forEach((category, index) => {
    const product = productData.find((product) => product.category === category);
    const categoryCard = document.createElement("div");
    categoryCard.classList.add("category-card");

    const categoryIcon = createCategoryIcon(product); // Create category icon
    if (categoryIcon) {
      categoryCard.appendChild(categoryIcon); // Append category icon to category card
    }

    const categoryTitle = document.createElement("h2")
    categoryTitle.textContent = category;
    categoryCard.appendChild(categoryTitle)

    const categoryText = document.createElement("p")
    categoryText.textContent = product.categoryText
    categoryCard.appendChild(categoryText)
    console.log("category ==", category, "product==", product)

    let isHidden = false;

    const checkmark = createCheckmarkIcon(); // Create checkmark icon
    categoryCard.appendChild(checkmark); // Append checkmark icon to category card
    checkmark.style.display = "block"; // Display the checkmark by default
    categoryCard.addEventListener("click", () => {
      isHidden = !isHidden;
      toggleProducts(category, isHidden);
      // Toggle checkmark visibility based on isHidden value
      checkmark.style.display = isHidden ? "none" : "block";
    });
    categoriesContainer.appendChild(categoryCard);
  });

  // Render products
  function renderProducts(products) {
    productsContainer.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.id = `product-${product.id}`; // Set unique ID for each product card
      productCard.innerHTML = `
      
        <img width="40%" src="${product.imgLink}" alt="${product.title}">
        <div> 
          <h3>${product.title}</h3>
          <p>${product.subtitle}</p>
          <ul>
            ${product.features.map((feature) => `<li> <span style="color: green;">&#x2713;</span> ${feature}</li>`).join("")}
          </ul>
          <button>${product.buttonText} &rang; </button>
        </div>
      `;
      productsContainer.appendChild(productCard);
    });

    updateResult(
      products.filter((product) => !productCardIsHidden(product.id)).length
    );
  }

  function toggleProducts(category, isHidden) {
    const filteredProducts = productData.filter(
      (product) => product.category === category
    );
    filteredProducts.forEach((product) => {
      const productCard = document.getElementById(`product-${product.id}`);
      if (productCard) {
        if (isHidden) {
          productCard.classList.add("hidden");
        } else {
          productCard.classList.remove("hidden");
        }
      }
    });

    updateResult(
      productData.filter((product) => !productCardIsHidden(product.id)).length
    );
  }

  // Update result container with the number of visible products
  function updateResult(count) {
    resultContainer.innerHTML = `Wir haben <b> ${count} Produkte </b> gefunden, die zu Ihren Interessen passen.`;
  }

  // Check if a product card is hidden
  function productCardIsHidden(id) {
    const productCard = document.getElementById(`product-${id}`);
    return productCard && productCard.classList.contains("hidden");
  }

  // Create category icon
  function createCategoryIcon(product) {
    if (product && product.categoryIcon) {
      const icon = document.createElement("img");
      icon.classList.add("category-icon");
      icon.src = product.categoryIcon;
      return icon;
    }
    return null;
  }

  // Create checkmark icon
  function createCheckmarkIcon() {
    const checkmark = document.createElement("i");
    checkmark.classList.add("checkmark");
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 35 35");
    svg.setAttribute("fill", "none");
    svg.innerHTML = `
      <circle cx="17.5" cy="17.5" r="16.5" fill="#61AF34" stroke="white" stroke-width="2"/>
      <path d="M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z" fill="white"/>
    `;
    checkmark.appendChild(svg);
    return checkmark;
  }

  // Initially show all products
  renderProducts(productData);
}

getProducts();
