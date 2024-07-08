document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");

  fetch("https://strapi-store-server.onrender.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const products = data.data;
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.attributes.image;
        productImage.alt = product.attributes.name;

        const productName = document.createElement("h3");
        productName.textContent = product.attributes.company;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = `$${product.attributes.price}`;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productContainer.appendChild(productCard);
        productCard.addEventListener("click", () => {
          window.location.href = "main.html";
        });
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
});
