let allProducts = [];
let filteredProducts = [];

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();

    allProducts = data;
    filteredProducts = data;

    document.getElementById('loader').style.display = 'none';
    displayProducts(data);

  } catch (error) {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('error').innerText = 'Error loading data';
  }
}

function displayProducts(products) {
  const container = document.getElementById('products');
  container.innerHTML = '';

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${p.image}">
      <h4>${p.title.slice(0,20)}...</h4>
      <p>${p.description.slice(0,60)}...</p>
      <button class="price-btn">$${p.price}</button>
      <button onclick='viewDetails(${JSON.stringify(p)})'>View More</button>
    `;

    container.appendChild(card);
  });
}

function sortLowHigh() {
  filteredProducts.sort((a,b) => a.price - b.price);
  displayProducts(filteredProducts);
}

function sortHighLow() {
  filteredProducts.sort((a,b) => b.price - a.price);
  displayProducts(filteredProducts);
}

function filterCategory() {
  const cat = document.getElementById('category').value;

  if (cat === 'all') {
    filteredProducts = [...allProducts];
  } else {
    filteredProducts = allProducts.filter(p => p.category === cat);
  }

  displayProducts(filteredProducts);
}

document.getElementById('search').addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();

  const result = filteredProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  displayProducts(result);
});

function viewDetails(product) {
  const modal = document.getElementById('modal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <h3>${product.title}</h3>
    <img src="${product.image}" style="width:100%">
    <p>${product.description}</p>
    <p><b>Price:</b> $${product.price}</p>
  `;

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

fetchProducts();