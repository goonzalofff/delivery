// Datos simulados de productos
const products = [
    { id: 1, name: "Coca Cola", category: "bebidas", price: 1.5, image: "image/cocacola.jpg" },
    {id: 7, name: "Pepsi" , category: "bebidas" , price: 3000, image:"image/pepsi.jpg"},
    { id: 5, name: "Mirinda", category: "bebidas", price: 0.8, image: "image/mirinda.jpg" },
    {id: 8, name: "Secco" , category: "bebidas" , price: 3000, image:"image/secco.jpg"},
    {id: 11, name: "Fresh" , category: "bebidas" , price: 3000, image:"image/jugo.jpg"},
    { id: 2, name: "Aceite", category: "alimentos", price: 3, image: "image/aceite.jpeg" },
    { id: 3, name: "Detergente", category: "limpieza", price: 2, image: "images/detergente.jpg" },
    { id: 4, name: "Pasta", category: "alimentos", price: 1, image: "images/pasta.jpg" },
    {id: 6, name: "Pizza" , category: "delivery" , price: 3000, image:""},
    {id: 9, name: "Arroz" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 10, name: "Harina" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Brio" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Cepita" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Agua" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Cerveza" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "7up" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Fanta 2lt. Retornable" , category: "bebidas" , price: 3000, image:"image/fanta.jpg"},
    {id: 11, name: "Vino Nativo" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Vino Termidor" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Vodka" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Cerveza Lata" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Vodka Smirnof" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Vino Mendoza" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Speed" , category: "bebidas" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Dulce de Leche" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Fideos" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Pure de tomates" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Yerba Mate" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Sal" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Leche" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Chocolatada" , category: "alimentos" , price: 3000, image:"image.jpg"},
    {id: 11, name: "Fideos" , category: "alimentos" , price: 3000, image:"image.jpg"},
    { id: 3, name: "Javon en Polvo", category: "limpieza", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Javon tocador", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Shampo", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Jardin", category: "limpieza", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Poet", category: "limpieza", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Virulana", category: "limpieza", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Lady Soft", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Dentrifico", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Cepillo de Dientes", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Prestobarba", category: "cuidadopersonal", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Sabrosito", category: "forrageria", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Velas", category: "almacen", price: 2, image: "images/detergente.jpg" },
    { id: 3, name: "Rollo de Cocina", category: "almacen", price: 2, image: "images/detergente.jpg" },




  ];
  
  // Elementos DOM
  const productList = document.getElementById("productList");
  const searchBar = document.getElementById("searchBar");
  const categoryFilter = document.getElementById("categoryFilter");
  
  // Renderizar productos
  const renderProducts = (filteredProducts) => {
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      `;
      productList.appendChild(productCard);
    });
  };
  
  // Filtros y búsqueda
  const filterProducts = () => {
    const searchValue = searchBar.value.toLowerCase();
    const categoryValue = categoryFilter.value;
  
    const filteredProducts = products.filter((product) => {
      const matchesCategory = categoryValue === "all" || product.category === categoryValue;
      const matchesSearch = product.name.toLowerCase().includes(searchValue);
      return matchesCategory && matchesSearch;
    });
  
    renderProducts(filteredProducts);
  };
  
  // Inicializar
  searchBar.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);
  
  // Renderizar todos los productos inicialmente
  renderProducts(products);
  
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>Precio: $${product.price.toFixed(2)}</p>
    <a href="product.html?id=${product.id}">Ver Detalles</a>
    <button onclick="addToCart(${product.id})">Agregar al carrito</button>
  `;
  
  let btnMenu = document.getElementById('btn-menu');
  let mainNav = document.getElementById('main-nav');
  btnMenu.addEventListener('click', function(){
    mainNav.classList.toggle('mostrar');
  });

  