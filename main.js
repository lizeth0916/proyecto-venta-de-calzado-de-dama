// Función para comprobar la disponibilidad de la talla
function comprobarDisponibilidad(talla, producto) {
    const tallasDisponibles = ["36", "37", "38", "39"]; // Lista de tallas disponibles
    return tallasDisponibles.includes(talla) ? 
        `La talla ${talla} de ${producto} está disponible.` : 
        `Lo siento, la talla ${talla} de ${producto} no está disponible.`;
}

// Agregar el evento de submit al formulario de registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;

    // Validar que el correo sea de Gmail
    if (!correo.endsWith('@gmail.com')) {
        alert('Por favor, utiliza un correo de Gmail.');
        return;
    }

    // Aquí puedes agregar el código para guardar el usuario en la base de datos o realizar otra acción.

    // Redirigir a otra página después del registro (puedes cambiar 'pagina_de_bienvenida.html' por el nombre de tu página)
    window.location.href = 'pagina_de_bienvenida.html';
});

// Agregar eventos a los botones de búsqueda
const botonesBuscar = document.querySelectorAll('.buscar');
botonesBuscar.forEach(boton => {
    boton.addEventListener('click', function() {
        const producto = this.getAttribute('data-producto'); // Obtiene el nombre del producto
        const inputTalla = this.previousElementSibling; // Obtiene el input de talla
        const talla = inputTalla.value; // Obtiene el valor de la talla
        const mensaje = document.getElementById(`mensaje${Array.from(botonesBuscar).indexOf(this) + 1}`); // Obtiene el mensaje correspondiente

        // Comprobar la disponibilidad y mostrar el mensaje
        mensaje.textContent = comprobarDisponibilidad(talla, producto);
    });
});
