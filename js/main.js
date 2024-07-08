document.addEventListener("DOMContentLoaded", () => {
  fetch("https://strapi-store-server.onrender.com/api/products")
    .then((response) => response.json())
    .then((data) => {
      const product = data.data[0].attributes;

      const productTitle = document.createElement("h1");
      productTitle.className = "product-title";
      productTitle.innerText = product.title;
      document.querySelector(".product-details").appendChild(productTitle);

      const productBrand = document.createElement("p");
      productBrand.className = "product-brand";
      productBrand.innerText = product.brand;
      document.querySelector(".product-details").appendChild(productBrand);

      const productPrice = document.createElement("p");
      productPrice.className = "product-price";
      productPrice.innerText = product.price + " dollar";
      document.querySelector(".product-details").appendChild(productPrice);

      const productDescription = document.createElement("p");
      productDescription.className = "product-description";
      productDescription.innerText = product.description;
      document
        .querySelector(".product-details")
        .appendChild(productDescription);

      document.querySelector(".product-image img").src = product.image;
    })
    .catch((error) => console.error("Error fetching the product data:", error));
});
