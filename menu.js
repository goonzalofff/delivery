// Selección de elementos
const menuHamburguesa = document.querySelector('.menu-hamburguesa');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links ul li a');

// Evento para el menú hamburguesa
menuHamburguesa.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active');
    menuHamburguesa.classList.toggle('open', isActive);
});

// Evento para los elementos del menú
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Cierra el menú
        menuHamburguesa.classList.remove('open'); // Restablece el icono de hamburguesa
    });
});