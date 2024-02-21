const title = document.createElement("title");
title.textContent = "Project by Ramrachai Marma";
document.head.appendChild(title);

const icon1 = document.createElement("img");
icon1.setAttribute(
  "src",
  "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/ou9hjlu8orzfig3o5jd2.svg"
);

const icon2 = document.createElement("img");
icon2.setAttribute(
  "src",
  "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/x8mzqfnnxa55opyfvuft.svg"
);

const icon3 = document.createElement("img");
icon3.setAttribute(
  "src",
  "https://res.cloudinary.com/ramrachai/image/upload/v1708434932/gstunorpjfyaugsf97sa.svg"
);

// body section
const body = document.createElement("body");
body.style.fontFamily = "Arial, sans-serif";
body.style.margin = "0 auto";
body.style.padding = "0";
body.style.maxWidth = "80%";
body.style.color = "#464646";

// header section
const header = document.createElement("header");
header.style.color = "#fff";
header.style.padding = "20px";
header.style.display = "flex";
header.style.justifyContent = "flex-start";
header.style.alignItems = "center";
header.style.gap = "40px";
body.appendChild(header);

const logo = document.createElement("img");
logo.src =
  "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/logo_white_consors.png";
logo.alt = "Logo";
logo.style.width = "40px";
header.appendChild(logo);

const headerText = document.createElement("p");
headerText.style.color = "#464646";

const boldText = document.createElement("b");
boldText.textContent = "Unsere besten Angebote";

const lineBreak = document.createElement("br");

const spanText = document.createElement("span");
spanText.textContent = " Willkommen bei der Consorsbank ";

headerText.appendChild(boldText);
headerText.appendChild(lineBreak);
headerText.appendChild(spanText);
header.appendChild(headerText);

const headerRight = document.createElement("img");
headerRight.src =
  "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/bester_online_broker_2023.jpg";
headerRight.alt = "Header Right";
headerRight.style.width = "40px";
headerRight.style.marginLeft = "auto";
header.appendChild(headerRight);

// category section ======
const categoryContainer = document.createElement("div");
categoryContainer.style.display = "flex";
categoryContainer.style.flexDirection = "column";
categoryContainer.style.alignItems = "flex-start";
categoryContainer.style.justifyContent = "center";
categoryContainer.style.height = "auto";
categoryContainer.style.backgroundColor = "#f0f0f0";
body.appendChild(categoryContainer);

const createCard = (title, content, icon) => {
  const card = document.createElement("div");
  Object.assign(card.style, {
    position: "relative",
    backgroundColor: "#1E9FC4",
    padding: "20px",
    color: "#fff",
    display: "flex",
    gap: "10px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "200px",
    flex: "1",
    cursor: "pointer",
  });

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = title;
  cardTitle.style.margin = "0px";

  const cardContent = document.createElement("p");
  cardContent.style.margin = "0px";
  cardContent.style.textAlign = "center";
  cardContent.style.fontSize = ".8em";
  cardContent.textContent = content;

  const tikIcon = document.createElement("i");

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "35");
  svg.setAttribute("height", "35");
  svg.setAttribute("viewBox", "0 0 35 35");
  svg.setAttribute("fill", "none");

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", "17.5");
  circle.setAttribute("cy", "17.5");
  circle.setAttribute("r", "16.5");
  circle.setAttribute("fill", "#61AF34");
  circle.setAttribute("stroke", "white");
  circle.setAttribute("stroke-width", "2");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M15.6083 27L8 19.7309L9.99623 18.283L15.2316 23.2768L25.7778 8L28 9.06376L15.6083 27Z"
  );
  path.setAttribute("fill", "white");

  // Append elements to the SVG
  svg.appendChild(circle);
  svg.appendChild(path);

  // Append SVG to the icon element
  tikIcon.appendChild(svg);

  tikIcon.style.position = "absolute";
  tikIcon.style.top = "10px";
  tikIcon.style.right = "10px";

  //   set id in the card. id value will be title
  card.id = title;

  card.append(icon, cardTitle, cardContent, tikIcon);

  card.addEventListener("click", (e) => {
    if (tikIcon.style.display == "none") {
        tikIcon.style.display = "block"
    } else {
        tikIcon.style.display = "none"
    }
    

    // how to get id from div element
    let prod1 = document.querySelector("#product-1").style.display
    let prod1Title = document.querySelector("#categoryTitle-Tagesgeldkonto")
    if(e.target.id == "Tagesgeldkonto" && prod1 == "flex"  ){ 
        document.querySelector("#product-1").style.display = "none"
        prod1Title.style.display = "none"
        console.log("Entered if block");
    } else {
        document.querySelector("#product-1").style.display = "flex"
        prod1Title.style.display = ""
    }


    let prod2Title = document.querySelector("#categoryTitle-Wertpapiere")
    let prod2 = document.querySelector("#product-2").style.display

    if(e.target.id == "Wertpapiere" && prod2 == "flex"){ 
        document.querySelector("#product-2").style.display = "none"
        document.querySelector("#product-3").style.display = "none"
        document.querySelector("#product-4").style.display = "none"
        prod2Title.style.display = "none"
    } else {
        document.querySelector("#product-2").style.display = "flex"
        document.querySelector("#product-3").style.display = "flex"
        document.querySelector("#product-4").style.display = "flex"
        prod2Title.style.display = ""
    }



    let prod3Title = document.querySelector("#categoryTitle-Girokonto")
    let prod5 = document.querySelector("#product-5").style.display

    if(e.target.id == "Girokonto" && prod5 == "flex"){ 
        document.querySelector("#product-5").style.display = "none"
        document.querySelector("#product-6").style.display = "none"
        prod3Title.style.display = "none"
    } else {
        document.querySelector("#product-5").style.display = "flex"
        document.querySelector("#product-6").style.display = "flex"
        prod2Title.style.display = ""
    }





  });
  return card;
};

const helloText = document.createElement("h2");
helloText.textContent = "Wofür interessieren Sie sich?";
Object.assign(helloText.style, {
  fontSize: "1.2em",
  marginBottom: "20px",
});
categoryContainer.appendChild(helloText);

const cardContainer = document.createElement("div");
Object.assign(cardContainer.style, {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",
  width: "100%",
  flexWrap: "wrap",
});
categoryContainer.appendChild(cardContainer);

const card1 = createCard(
  "Tagesgeldkonto",
  "Geld parken und 0,6 % Zinsen p. a. sichern",
  icon1
);
const card2 = createCard("Wertpapiere", "Vermögensaufbau und Sparen", icon2);
const card3 = createCard(
  "Girokonto",
  "Unsere Klassiker mit Top-Konditionen",
  icon3
);

cardContainer.append(card1, card2, card3);

// category section finish

// product list section
const productListContainer = document.createElement("div");

Object.assign(productListContainer.style, {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  marginTop: "20px",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  height: "auto",
  width: "100%",
  background: "white",
});

body.appendChild(productListContainer);

const showProducts = 6;

const productListTitle = document.createElement("p");
boldText.textContent = `${showProducts} Produkte`;
const textNode1 = document.createTextNode("Wir haben");
const textNode2 = document.createTextNode(", die zu Ihren Interessen passen.");

productListTitle.appendChild(textNode1);
productListTitle.appendChild(boldText);
productListTitle.appendChild(textNode2);

Object.assign(productListTitle.style, {
  fontSize: "1em",
  marginBottom: "20px",
  borderBottom: "1px solid #464646",
  paddingBottom: "10px",
  display: "block",
  width: "100%",
});
productListContainer.appendChild(productListTitle);

const productData = [
  {
    id: 1,
    category: "Tagesgeldkonto",
    title: "Tagesgeldkonto",
    subtitle: "Kostenlos und sicher Vermögen parken",
    features: [
      "0,60 % p. a. auf Ihr Tagesgeld bis 250.000 Euro für 6 Monate",
      "Ihr Geld ist jederzeit verfügbar.",
    ],
    buttonText: "Zum Tagesgeldkonto",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/2023-10-05-HEIMAT-CONSORS-BANK-kwk.jpg",
  },

  {
    id: 2,
    category: "Wertpapiere",
    title: "Sparplan",
    subtitle: "Kleine Sparrate, große Träume",
    features: [
      "20 Euro Prämie für den Abschluss Ihres ersten Sparplans",
      "Sparrate schon ab 10 Euro",
    ],
    buttonText: "Zum Sparplan",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/Beste_Angebot_482x247.jpg",
  },

  {
    id: 3,
    category: "Wertpapiere",
    title: "Wertpapierdepot",
    subtitle: "Vielfältige Möglichkeiten zum Vermögensaufbau",
    features: [
      "6 Monate für 0 Euro Ordergebühr traden (zzgl. marktüblicher Spreads)",
      "Kostenlose Depotführung",
    ],
    buttonText: "Zum Wartpapierdepot",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/Girokonto_Vergleichsseite_Beste-Angebote-1_482x247.jpg",
  },

  {
    id: 4,
    category: "Wertpapiere",
    title: "Junior Depot",
    subtitle: "Mittel- bis langfristig vorsorgen für Ihr Kind",
    features: [
      "kostenlose Depotführung",
      "Schnell und einfach über das Geld verfügen",
    ],
    buttonText: "Zum Junior-Deport",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/2023-10-05-HEIMAT-CONSORS-BANK-kwk.jpg",
  },

  {
    id: 5,
    category: "Girokonto",
    title: "Girokonto Essential",
    subtitle: "Sehr gut bewertet mit vielfältigen Bezahlmöglichkeiten",
    features: [
      "kostenloses Girokonto bei monatlichem Geldeingang ab 700 Euro oder für alle unter 28 Jahren*",
      "Kostenlose Visa Card inklusive",
    ],
    buttonText: "Zum Girokonto Essential",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/Beste_Angebot_482x247.jpg",
  },

  {
    id: 6,
    category: "Girokonto",
    title: "Girokonto Unlimited",
    subtitle: "Premium-Girokonto mit Visa Card Gold",
    features: [
      "Für nur 9€ mtl.: weltweit gebührenfrei bezahlen und Bargeld abheben**",
      "Reiseversicherungen, Handy-Schutzbrief und weitere Services inklusive",
    ],
    buttonText: "Zum Girokonto Unlimited",
    imgLink:
      "https://aktionen.consorsbank.de/ev/ev_beste_angebote/assets/images/Girokonto_Vergleichsseite_Beste-Angebote-1_482x247.jpg",
  },
];

function productCategoryTitle(name, count, icon) {
  const container = document.createElement("div");
  Object.assign(container.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const textDiv = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = name;
  Object.assign(title.style, {
    fontSize: "1em",
    margin: "10px 0 0 0 ",
  });
  const subtitle = document.createElement("p");
  subtitle.textContent = count + " Produkte";
  Object.assign(subtitle.style, {
    fontSize: ".8em",
    margin: "0px",
    color: "#464646",
  });

  textDiv.appendChild(title);
  textDiv.appendChild(subtitle);
  container.id = `categoryTitle-${name}`;
  container.appendChild(icon);
  container.appendChild(textDiv);
  return container;
}

// create a product card for each product. there are 3 categories in the productData. First filter 3 categories. make 3 sections for 3 categories. in each section create the product cards which belong to that category.

const productCard = (product) => {
  const card = document.createElement("div");
  Object.assign(card.style, {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    width: "100%",
    height: "auto",
    padding: "10px",
    marginBottom: "20px",
  });
  card.setAttribute("id", `product-${product.id}`);
  card.setAttribute("class", "product-card");
  productListContainer.appendChild(card);

  const cardImage = document.createElement("img");
  cardImage.src = product.imgLink;
  Object.assign(cardImage.style, {
    width: "40%",
    height: "auto",
    objectFit: "cover",
  });
  card.appendChild(cardImage);

  const textContainer = document.createElement("div");
  textContainer.setAttribute("id", `text-container-${product.id}`);
  Object.assign(textContainer.style, {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "60%",
  });
  card.appendChild(textContainer);

  const cardTitle = document.createElement("h3");
  cardTitle.textContent = product.title;
  textContainer.appendChild(cardTitle);

  const cardSubtitle = document.createElement("p");
  cardSubtitle.textContent = product.subtitle;
  Object.assign(cardSubtitle.style, {
    fontSize: "0.8em",
    marginBottom: "10px",
  });
  textContainer.appendChild(cardSubtitle);

  const cardFeatures = document.createElement("div");
  cardFeatures.setAttribute("id", `features-${product.id}`);
  Object.assign(cardFeatures.style, {});
  textContainer.appendChild(cardFeatures);
  const featuresList = product.features.map((feature) => {
    const featureItem = document.createElement("p");
    featureItem.textContent = feature;
    Object.assign(featureItem.style, {
      fontSize: "0.8em",
      marginBottom: "10px",
    });
    cardFeatures.appendChild(featureItem);
  });

  const cardButton = document.createElement("button");
  cardButton.textContent = product.buttonText;
  cardButton.setAttribute("id", `button-${product.id}`);
  Object.assign(cardButton.style, {
    width: "100%",
    height: "40px",
    background: "#1e9fc4",
    border: "none",
    borderRadius: "10px",
    fontSize: "1em",
    cursor: "pointer",
    color: "white",
  });
  textContainer.appendChild(cardButton);
  return card;
};

const icon1Dark = document.createElement("img");
icon1Dark.src =
  "https://res.cloudinary.com/ramrachai/image/upload/v1708437327/echologyx/eruu4einmvi8gggu9d0e.png";

let tagCategoryTitle = productCategoryTitle("Tagesgeldkonto", "1", icon1Dark);
productListContainer.appendChild(tagCategoryTitle);

//  filter Tagesgeldkonto products and store in a variable
const TagesgeldkontoProducts = productData.filter((product) => {
  return product.category === "Tagesgeldkonto";
});

TagesgeldkontoProducts.forEach((product) => {
  productCard(product);
});

// 2nd category=======
const WertpapiereProducts = productData.filter((product) => {
  return product.category === "Wertpapiere";
});

const icon2Dark = document.createElement("img");
icon2Dark.src =
  "https://res.cloudinary.com/ramrachai/image/upload/v1708437327/echologyx/kkgfrxdmyphmfxns6oez.png";

let tagCategoryTitle2 = productCategoryTitle("Wertpapiere", "3", icon2Dark);

productListContainer.appendChild(tagCategoryTitle2);

WertpapiereProducts.forEach((product) => {
  productCard(product);
});

//  3rd category =========
const icon3Dark = document.createElement("img");
icon3Dark.src =
  "https://res.cloudinary.com/ramrachai/image/upload/v1708437327/echologyx/l4vf5i3ozbdlgtfpog2h.png";

let tagCategoryTitle3 = productCategoryTitle("Girokonto", "2", icon3Dark);
productListContainer.appendChild(tagCategoryTitle3);

const GirokontoProducts = productData.filter((product) => {
  return product.category === "Girokonto";
});

GirokontoProducts.forEach((product) => {
  productCard(product);
});

document.body.appendChild(body);
