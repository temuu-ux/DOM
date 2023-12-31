const products = [
  {
    name: "Laptop",
    price: 999.99,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "Powerful laptop with high-performance specs for work and entertainment.",
  },
  {
    name: "Smartphone",
    price: 499.5,
    brand: "TechCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Cutting-edge smartphone with advanced features and a sleek design.",
  },
  {
    name: "Headphones",
    price: 99.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Comfortable headphones with excellent sound quality for immersive listening experiences.",
  },
  {
    name: "Camera",
    price: 799.0,
    brand: "PhotoTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Professional-grade camera capturing high-resolution photos and videos.",
  },
  {
    name: "Tablet",
    price: 299.99,
    brand: "TabCo",
    image_url: "https://via.placeholder.com/300",
    description:
      "Portable tablet perfect for entertainment and productivity on-the-go.",
  },
  {
    name: "Smartwatch",
    price: 199.5,
    brand: "WearableTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Smartwatch with health-tracking features and a stylish design.",
  },
  {
    name: "Desktop Computer",
    price: 1299.0,
    brand: "ExampleBrand",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-performance desktop computer for demanding tasks and gaming.",
  },
  {
    name: "Printer",
    price: 149.0,
    brand: "PrintTech",
    image_url: "https://via.placeholder.com/300",
    description: "Versatile printer suitable for both home and office use.",
  },
  {
    name: "Keyboard",
    price: 49.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Ergonomic keyboard designed for comfortable and efficient typing.",
  },
  {
    name: "Mouse",
    price: 29.99,
    brand: "InputTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Responsive and precise mouse for seamless navigation and control.",
  },
  {
    name: "Speaker System",
    price: 399.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description: "Immersive speaker system delivering rich and clear audio.",
  },
  {
    name: "External Hard Drive",
    price: 129.0,
    brand: "StorageTech",
    image_url: "https://via.placeholder.com/300",
    description: "High-capacity external hard drive for secure data storage.",
  },
  {
    name: "Gaming Console",
    price: 399.0,
    brand: "GameTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Next-gen gaming console offering stunning graphics and gaming experiences.",
  },
  {
    name: "Router",
    price: 79.99,
    brand: "ConnectTech",
    image_url: "https://via.placeholder.com/300",
    description: "Reliable router providing high-speed internet connectivity.",
  },
  {
    name: "Monitor",
    price: 349.5,
    brand: "DisplayTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-resolution monitor delivering vibrant and clear visuals.",
  },
  {
    name: "Scanner",
    price: 89.0,
    brand: "ScanTech",
    image_url: "https://via.placeholder.com/300",
    description: "Efficient scanner for digitizing documents and images.",
  },
  {
    name: "Fitness Tracker",
    price: 79.0,
    brand: "FitTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Fitness tracker monitoring activity levels and health metrics.",
  },
  {
    name: "Wireless Earbuds",
    price: 129.0,
    brand: "AudioTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Wireless earbuds with premium audio quality and long battery life.",
  },
  {
    name: "Security Camera",
    price: 199.99,
    brand: "SecureTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "High-definition security camera for home or business surveillance.",
  },
  {
    name: "Electric Toothbrush",
    price: 59.5,
    brand: "DentalTech",
    image_url: "https://via.placeholder.com/300",
    description:
      "Advanced electric toothbrush for thorough and effective dental care.",
  },
];
// root
// let root = document.getElementById("root");

// // cardDiv
// let cardDiv = document.createElement("div");
// cardDiv.setAttribute("class", "card");

// // name
// let cardName = document.createElement("p");
// cardName.innerText = products[0].name;
// cardDiv.appendChild(cardName);

// // price
// let cardPrice = document.createElement("p");
// cardPrice.innerText = products[0].price;
// cardDiv.appendChild(cardPrice);

// // brand
// let cardBrand = document.createElement("p");
// cardBrand.innerText = products[0].brand;
// cardDiv.appendChild(cardBrand);

// // image_url

// let cardImg = document.createElement("img");
// cardImg.setAttribute("src", `${products[0].image_url}`);
// cardDiv.appendChild(cardImg);

// // decs
// let cardDesc = document.createElement("p");
// cardDesc.innerText = products[0].description;
// cardDiv.appendChild(cardDesc);

// root.appendChild(cardDiv);

let root = document.getElementById("root");

function y(a) {
  let cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  root.appendChild(cardDiv);

  let cardName = document.createElement("p");
  cardName.innerText = a.name;
  cardDiv.appendChild(cardName);

  let cardPrice = document.createElement("p");
  cardPrice.innerText = a.price;
  cardDiv.appendChild(cardPrice);

  let cardBrand = document.createElement("p");
  cardBrand.innerText = a.brand;
  cardDiv.appendChild(cardBrand);

  let cardImage = document.createElement("img");
  cardImage.setAttribute("src", `${a.image_url}`);
  cardDiv.appendChild(cardImage);

  let cardDesc = document.createElement("p");
  cardDesc.innerText = a.description;
  cardDiv.appendChild(cardDesc);
  return cardDiv;
}
products.map((a) => {
  root.appendChild(y(a));
});
