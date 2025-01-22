// Reemplaza con tu número de WhatsApp
const numeroWhatsApp = "543815496164";

document.getElementById("enviarPedido").addEventListener("click", function () {
    // Obtiene los valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const pedido = document.getElementById("pedido").value.trim();

    // Verifica que los campos no estén vacíos
    if (nombre === "" || direccion === "" || pedido === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Construye el mensaje de WhatsApp
    const mensaje = `Hola, mi nombre es ${nombre}. Quiero realizar un pedido con los siguientes detalles:\n\n` +
                    `Dirección: ${direccion}\n` +
                    `Pedido: ${pedido}`;

    // Abre WhatsApp Web con el mensaje
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});
