const products = [
  { id: 1, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 2, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 3, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 4, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 5, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 6, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" }, 
  { id: 7, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 8, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
  { id: 9, name: "product", print: 10, image: "image/WhatsApp Image 2025-01-04 at 10.37.58.jpeg" },
]













  const productsContainer = document.getElementById('products');
  
  function displayProducts() {
    productsContainer.innerHTML = "";
    products.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <h3>${product.name}</h3>
      <p>${product.print} $</p>
      <button onlick ="addtoToCart(${product.id})">Add To Cart</button>
      `;
      productsContainer.appendChild(div);
    });
  }
  displayProducts();