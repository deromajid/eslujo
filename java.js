const toggleButton = document.querySelector('.menu-toggle');
const menuPhone = document.querySelector('.menu-phone ul');

toggleButton.addEventListener('click', () => {
  menuPhone.classList.toggle('show');
});
///////////////test///////////////
const products = [
  {
    id: 1,
    name: "هاتف ذكي",
    price: 1200,
    image: "https://via.placeholder.com/200x150?text=هاتف"
  },    {
    id: 2,
    name: "سماعات بلوتوث",
    price: 350,
    image: "https://via.placeholder.com/200x150?text=سماعات"
  }
];





const productsContainer = document.getElementById('products');

function displayProducts() {
productsContainer.innerHTML = ""; // تفريغ المحتوى أولاً
products.forEach(product => {
  const div = document.createElement('div');
  div.classList.add('product');
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} ريال</p>
    <button onclick="addToCart(${product.id})">أضف إلى السلة</button>
  `;
  productsContainer.appendChild(div);
});
}

// تشغيل العرض عند فتح الصفحة
displayProducts();

