// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Camisa Ejecutiva Azul",
        categoria: "camisas",
        color: "azul",
        precio: 85,
        imagen: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        descripcion: "Camisa ejecutiva de alta calidad en azul marino",
        tallas: ["S", "M", "L", "XL"],
        colores: ["azul", "blanco", "gris"]
    },
    {
        id: 2,
        nombre: "Pantalón de Trabajo",
        categoria: "pantalones",
        color: "gris",
        precio: 65,
        imagen: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        descripcion: "Pantalón resistente para trabajo pesado",
        tallas: ["S", "M", "L", "XL", "XXL"],
        colores: ["gris", "negro", "azul"]
    },
    {
        id: 3,
        nombre: "Chaleco de Seguridad",
        categoria: "chalecos",
        color: "naranja",
        precio: 45,
        imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
        descripcion: "Chaleco de alta visibilidad para seguridad",
        tallas: ["M", "L", "XL"],
        colores: ["naranja", "amarillo", "verde"]
    },
    {
        id: 4,
        nombre: "Uniforme Completo Ejecutivo",
        categoria: "uniformes",
        color: "azul",
        precio: 120,
        imagen: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
        descripcion: "Conjunto completo ejecutivo",
        tallas: ["S", "M", "L", "XL"],
        colores: ["azul", "negro", "gris"]
    },
    {
        id: 5,
        nombre: "Camisa Polo Corporativa",
        categoria: "camisas",
        color: "blanco",
        precio: 55,
        imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        descripcion: "Camisa polo para uso corporativo",
        tallas: ["S", "M", "L", "XL"],
        colores: ["blanco", "azul", "gris"]
    },
    {
        id: 6,
        nombre: "Pantalón Cargo",
        categoria: "pantalones",
        color: "verde",
        precio: 75,
        imagen: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        descripcion: "Pantalón cargo con múltiples bolsillos",
        tallas: ["S", "M", "L", "XL", "XXL"],
        colores: ["verde", "gris", "negro"]
    },
    {
        id: 7,
        nombre: "Chaleco Térmico",
        categoria: "chalecos",
        color: "negro",
        precio: 95,
        imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
        descripcion: "Chaleco térmico para bajas temperaturas",
        tallas: ["M", "L", "XL"],
        colores: ["negro", "gris", "azul"]
    },
    {
        id: 8,
        nombre: "Uniforme de Chef",
        categoria: "uniformes",
        color: "blanco",
        precio: 110,
        imagen: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
        descripcion: "Uniforme completo para chef profesional",
        tallas: ["S", "M", "L", "XL"],
        colores: ["blanco", "negro"]
    }
];

// Estado del carrito
let carrito = [];

// Elementos del DOM
const productosGrid = document.getElementById('productosGrid');
const filtroCategoria = document.getElementById('filtroCategoria');
const filtroColor = document.getElementById('filtroColor');
const filtroPrecio = document.getElementById('filtroPrecio');
const btnCarrito = document.getElementById('btnCarrito');
const carritoContador = document.getElementById('carritoContador');
const modalCarrito = document.getElementById('modalCarrito');
const carritoItems = document.getElementById('carritoItems');
const carritoTotal = document.getElementById('carritoTotal');
const cerrarModal = document.getElementById('cerrarModal');
const vaciarCarrito = document.getElementById('vaciarCarrito');
const enviarWhatsApp = document.getElementById('enviarWhatsApp');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    inicializarEventos();
    inicializarLucide();
});

// Cargar productos
function cargarProductos(productosFiltrados = productos) {
    productosGrid.innerHTML = '';
    
    productosFiltrados.forEach(producto => {
        const productoElement = crearElementoProducto(producto);
        productosGrid.appendChild(productoElement);
    });
}

// Crear elemento de producto
function crearElementoProducto(producto) {
    const div = document.createElement('div');
    div.className = 'producto-card bg-white rounded-lg shadow-md overflow-hidden';
    
    div.innerHTML = `
        <div class="relative">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="w-full h-40 sm:h-48 object-cover">
            <div class="absolute top-2 right-2 bg-navy text-white px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                $${producto.precio}
            </div>
        </div>
        <div class="p-3 sm:p-4">
            <h3 class="font-fraunces font-bold text-navy text-base sm:text-lg mb-2">${producto.nombre}</h3>
            <p class="text-gray-600 text-xs sm:text-sm mb-3">${producto.descripcion}</p>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 space-y-2 sm:space-y-0">
                <div class="flex items-center space-x-2 w-full sm:w-auto">
                    <span class="text-xs sm:text-sm text-gray-500">Color:</span>
                    <select class="text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 flex-1 sm:flex-none">
                        ${producto.colores.map(color => `<option value="${color}">${color.charAt(0).toUpperCase() + color.slice(1)}</option>`).join('')}
                    </select>
                </div>
                <div class="flex items-center space-x-2 w-full sm:w-auto">
                    <span class="text-xs sm:text-sm text-gray-500">Talla:</span>
                    <select class="text-xs sm:text-sm border border-gray-300 rounded px-2 py-1 flex-1 sm:flex-none">
                        ${producto.tallas.map(talla => `<option value="${talla}">${talla}</option>`).join('')}
                    </select>
                </div>
            </div>
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                <span class="font-bold text-navy text-base sm:text-lg">$${producto.precio}</span>
                <button class="agregar-carrito bg-navy text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-azul transition-colors text-xs sm:text-sm font-semibold w-full sm:w-auto" 
                        data-id="${producto.id}">
                    Agregar
                </button>
            </div>
        </div>
    `;
    
    return div;
}

// Inicializar eventos
function inicializarEventos() {
    // Filtros
    filtroCategoria.addEventListener('change', aplicarFiltros);
    filtroColor.addEventListener('change', aplicarFiltros);
    filtroPrecio.addEventListener('change', aplicarFiltros);
    
    // Carrito
    btnCarrito.addEventListener('click', abrirModalCarrito);
    cerrarModal.addEventListener('click', cerrarModalCarrito);
    vaciarCarrito.addEventListener('click', vaciarCarritoFuncion);
    enviarWhatsApp.addEventListener('click', enviarPorWhatsApp);
    
    // Cerrar modal al hacer clic fuera
    modalCarrito.addEventListener('click', function(e) {
        if (e.target === modalCarrito) {
            cerrarModalCarrito();
        }
    });
    
    // Eventos de agregar al carrito (delegación)
    productosGrid.addEventListener('click', function(e) {
        if (e.target.classList.contains('agregar-carrito')) {
            const productoId = parseInt(e.target.dataset.id);
            agregarAlCarrito(productoId);
        }
    });
}

// Aplicar filtros
function aplicarFiltros() {
    const categoria = filtroCategoria.value;
    const color = filtroColor.value;
    const precio = filtroPrecio.value;
    
    let productosFiltrados = productos.filter(producto => {
        let cumpleFiltros = true;
        
        if (categoria && producto.categoria !== categoria) {
            cumpleFiltros = false;
        }
        
        if (color && !producto.colores.includes(color)) {
            cumpleFiltros = false;
        }
        
        if (precio) {
            const [min, max] = precio.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            if (producto.precio < min || (max !== Infinity && producto.precio > max)) {
                cumpleFiltros = false;
            }
        }
        
        return cumpleFiltros;
    });
    
    cargarProductos(productosFiltrados);
}

// Funciones del carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;
    
    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1,
            colorSeleccionado: producto.colores[0],
            tallaSeleccionada: producto.tallas[0]
        });
    }
    
    actualizarCarrito();
    mostrarNotificacion('Producto agregado al carrito');
}

function actualizarCarrito() {
    // Actualizar contador
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    carritoContador.textContent = totalItems;
    carritoContador.classList.toggle('hidden', totalItems === 0);
    
    // Actualizar modal
    actualizarModalCarrito();
}

function actualizarModalCarrito() {
    carritoItems.innerHTML = '';
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<p class="text-gray-500 text-center py-4">El carrito está vacío</p>';
        carritoTotal.textContent = '$0';
        return;
    }
    
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carrito-item flex items-center justify-between p-3 bg-gray-50 rounded-lg';
        
        itemElement.innerHTML = `
            <div class="flex items-center space-x-3">
                <img src="${item.imagen}" alt="${item.nombre}" class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded">
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-navy text-sm sm:text-base truncate">${item.nombre}</h4>
                    <p class="text-xs sm:text-sm text-gray-600">${item.colorSeleccionado} - ${item.tallaSeleccionada}</p>
                </div>
            </div>
            <div class="flex items-center space-x-1 sm:space-x-2">
                <button class="cambiar-cantidad bg-gray-200 text-navy w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center hover:bg-gray-300 text-xs sm:text-sm" data-id="${item.id}" data-accion="menos">-</button>
                <span class="cantidad w-6 sm:w-8 text-center text-xs sm:text-sm">${item.cantidad}</span>
                <button class="cambiar-cantidad bg-gray-200 text-navy w-5 h-5 sm:w-6 sm:h-6 rounded flex items-center justify-center hover:bg-gray-300 text-xs sm:text-sm" data-id="${item.id}" data-accion="mas">+</button>
                <span class="font-semibold text-navy text-xs sm:text-sm">$${item.precio * item.cantidad}</span>
                <button class="eliminar-item text-red-500 hover:text-red-700" data-id="${item.id}">
                    <i data-lucide="trash-2" class="w-3 h-3 sm:w-4 sm:h-4"></i>
                </button>
            </div>
        `;
        
        carritoItems.appendChild(itemElement);
    });
    
    // Calcular total
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    carritoTotal.textContent = `$${total}`;
    
    // Eventos para cambiar cantidad y eliminar
    carritoItems.addEventListener('click', function(e) {
        if (e.target.classList.contains('cambiar-cantidad')) {
            const id = parseInt(e.target.dataset.id);
            const accion = e.target.dataset.accion;
            cambiarCantidad(id, accion);
        } else if (e.target.closest('.eliminar-item')) {
            const id = parseInt(e.target.closest('.eliminar-item').dataset.id);
            eliminarDelCarrito(id);
        }
    });
}

function cambiarCantidad(id, accion) {
    const item = carrito.find(item => item.id === id);
    if (!item) return;
    
    if (accion === 'mas') {
        item.cantidad++;
    } else if (accion === 'menos' && item.cantidad > 1) {
        item.cantidad--;
    }
    
    actualizarCarrito();
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
    mostrarNotificacion('Producto eliminado del carrito');
}

function vaciarCarritoFuncion() {
    carrito = [];
    actualizarCarrito();
    cerrarModalCarrito();
    mostrarNotificacion('Carrito vaciado');
}

function abrirModalCarrito() {
    modalCarrito.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarModalCarrito() {
    modalCarrito.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function enviarPorWhatsApp() {
    if (carrito.length === 0) {
        mostrarNotificacion('El carrito está vacío', 'error');
        return;
    }
    
    const mensaje = generarMensajeWhatsApp();
    const numeroWhatsApp = '523312345678'; // Número de Guadalajara, Jalisco
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    window.open(url, '_blank');
    cerrarModalCarrito();
}

function generarMensajeWhatsApp() {
    let mensaje = '🛍️ *JULDRA UNIFORMES - Pedido*\n\n';
    mensaje += 'Hola, me interesa realizar el siguiente pedido:\n\n';
    
    carrito.forEach(item => {
        mensaje += `• ${item.nombre}\n`;
        mensaje += `  Color: ${item.colorSeleccionado}\n`;
        mensaje += `  Talla: ${item.tallaSeleccionada}\n`;
        mensaje += `  Cantidad: ${item.cantidad}\n`;
        mensaje += `  Precio: $${item.precio * item.cantidad}\n\n`;
    });
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    mensaje += `*Total: $${total}*\n\n`;
    mensaje += 'Por favor, contactenme para coordinar la entrega.';
    
    return mensaje;
}

// Utilidades
function mostrarNotificacion(mensaje, tipo = 'success') {
    // Crear notificación
    const notificacion = document.createElement('div');
    notificacion.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-semibold ${
        tipo === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

function inicializarLucide() {
    // Inicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', () => {
    const elementosAnimacion = document.querySelectorAll('.producto-card, .bg-gray-50, .bg-white');
    elementosAnimacion.forEach(el => observer.observe(el));
}); 