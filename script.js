// Carrito de compras
let cart = [];

// Obtener todos los botones de "Agregar al carrito"
const addButtons = document.querySelectorAll('.add-to-cart');

// Asignar el evento de clic a cada botón para agregar el producto al carrito
addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productId = parseInt(button.dataset.productId);
    addToCart(productId);
  });
});

// Ejemplo de productos en tu tienda
const products = [
  { id: 1, name: "Producto 1", price: 100 },
  { id: 2, name: "Producto 2", price: 150 },
  { id: 3, name: "Producto 3", price: 200 }
];

// Función para agregar producto al carrito
function addToCart(productId) {
  const product = products.find(p => p.id === productId);

  if (product) {
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    alert(`${product.name} ha sido agregado al carrito.`);
  }
}

// Actualizar la interfaz del carrito
function updateCartUI() {
  const cartContainer = document.getElementById("cart-items");
  const totalContainer = document.getElementById("cart-total");
  cartContainer.innerHTML = "";

  let total = 0;

  // Crear elementos para cada producto en el carrito
  cart.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
      <p>${item.name} - $${item.price} x ${item.quantity}</p>
      <button onclick="removeFromCart(${item.id})">Eliminar</button>
    `;
    cartContainer.appendChild(itemElement);

    total += item.price * item.quantity;
  });

  // Mostrar el total
  totalContainer.textContent = `Total: $${total}`;
}

// Eliminar producto del carrito
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  alert("Producto eliminado del carrito.");
}

// Finalizar compra
function checkout() {
  if (cart.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  alert("Gracias por tu compra. Total: $" + cart.reduce((sum, item) => sum + item.price * item.quantity, 0));

  cart = [];
  updateCartUI();
}
