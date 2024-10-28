// Guardar carrito en Local Storage
function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Cargar carrito desde Local Storage
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// Agregar un producto al carrito
function agregarAlCarrito(producto) {
    const carrito = cargarCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    mostrarCarrito();
}

// Eliminar un producto del carrito
function eliminarDelCarrito(productoId) {
    const carrito = cargarCarrito();
    const nuevoCarrito = carrito.filter(producto => producto.id !== productoId);
    guardarCarrito(nuevoCarrito);
    mostrarCarrito();
}

// Vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem('carrito');
    mostrarCarrito();
}

// Mostrar el carrito en la lista
function mostrarCarrito() {
    const carrito = cargarCarrito();
    const carritoLista = document.getElementById('carritoLista');
    carritoLista.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        
        // Botón para eliminar producto
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => eliminarDelCarrito(producto.id);
        
        li.appendChild(btnEliminar);
        carritoLista.appendChild(li);
    });
}

// Mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);
