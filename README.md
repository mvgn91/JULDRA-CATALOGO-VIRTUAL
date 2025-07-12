# JULDRA UNIFORMES - Catálogo Digital

Un catálogo digital interactivo y moderno para JULDRA UNIFORMES, diseñado con HTML5, Tailwind CSS y JavaScript vanilla.

## 🎯 Características

### Diseño y UX
- **Diseño responsivo** que se adapta a todos los dispositivos
- **Identidad visual coherente** con azul marino como color principal
- **Tipografía elegante**: Fraunces para títulos, Poppins para texto
- **Animaciones suaves** y transiciones fluidas
- **Iconografía moderna** con Lucide Icons

### Funcionalidades
- **Catálogo de productos** con imágenes de alta calidad
- **Sistema de filtros** por categoría, color y precio
- **Carrito de compras** funcional con gestión de cantidades
- **Integración con WhatsApp** para envío de pedidos
- **Guía de tallas** interactiva
- **Sección de personalización** con servicios detallados

### Tecnologías
- **HTML5** semántico y accesible
- **Tailwind CSS** para estilos modernos y responsivos
- **JavaScript vanilla** sin dependencias externas
- **Lucide Icons** para iconografía
- **Google Fonts** (Fraunces y Poppins)

## 📁 Estructura del Proyecto

```
JULDRA CATALOGO VIRTUAL/
├── index.html          # Página principal
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
└── PROPUESTAS_IDENTIDAD_MARCA.md  # Propuestas de marca
```

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Conexión a internet (para CDNs)

### Pasos de instalación
1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. ¡Listo! El catálogo está funcionando

### Desarrollo local
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Luego abre http://localhost:8000
```

## 🎨 Paleta de Colores

- **Azul Marino**: `#1a3a63` (Color principal)
- **Azul**: `#2c5aa0` (Acentos)
- **Rojo**: `#e74c3c` (Acentos limitados)
- **Naranja**: `#f39c12` (Acentos limitados)
- **Gris**: `#f8fafc` (Fondos)

## 📱 Secciones del Catálogo

### 1. Portada
- Logo tipográfico elegante
- Navegación principal
- Llamadas a la acción

### 2. Productos
- Grid responsivo de productos
- Filtros dinámicos
- Información detallada de cada producto
- Selectores de color y talla

### 3. Guía de Tallas
- Tabla de medidas estándar
- Instrucciones de medición
- Diseño claro y accesible

### 4. Personalización
- Servicios de bordado
- Proceso de personalización
- Información de contacto

### 5. Contacto
- Información de la empresa
- Redes sociales
- Datos de contacto

## 🛒 Funcionalidades del Carrito

### Gestión de Productos
- Agregar productos con color y talla específicos
- Modificar cantidades
- Eliminar productos individuales
- Vaciar carrito completo

### Integración WhatsApp
- Generación automática de mensaje
- Inclusión de todos los detalles del pedido
- Formato profesional y claro

## 🔧 Personalización

### Modificar Productos
Los productos se definen en el array `productos` en `script.js`:

```javascript
{
    id: 1,
    nombre: "Nombre del Producto",
    categoria: "categoria",
    color: "color-principal",
    precio: 85,
    imagen: "URL-de-la-imagen",
    descripcion: "Descripción del producto",
    tallas: ["S", "M", "L", "XL"],
    colores: ["azul", "blanco", "gris"]
}
```

### Modificar Colores
Los colores se definen en la configuración de Tailwind en `index.html`:

```javascript
colors: {
    navy: '#1a3a63',
    rojo: '#e74c3c',
    naranja: '#f39c12',
    azul: '#2c5aa0',
    gris: '#f8fafc'
}
```

### Modificar Información de Contacto
Actualiza los datos en la sección de contacto del HTML y en las funciones de WhatsApp.

## 📞 Integración WhatsApp

El catálogo incluye:
- Botón flotante de WhatsApp
- Envío automático de pedidos desde el carrito
- Formato profesional de mensajes

### Configurar Número
Cambia el número en `script.js`:
```javascript
const numeroWhatsApp = '573001234567'; // Tu número real
```

## 🎯 Optimizaciones Implementadas

### Rendimiento
- Carga asíncrona de iconos
- Optimización de imágenes
- Código JavaScript modular

### Accesibilidad
- HTML semántico
- Navegación por teclado
- Contraste adecuado
- Textos alternativos

### SEO
- Meta tags apropiados
- Estructura HTML semántica
- Títulos descriptivos

## 🔄 Versiones

### v2.0 (Actual)
- Reestructuración completa del código
- Mejoras en rendimiento y mantenibilidad
- Diseño más limpio y profesional
- Funcionalidades optimizadas

### v1.0
- Versión inicial del catálogo

## 📞 Soporte

Para soporte técnico o consultas sobre el catálogo:
- Email: info@juldra.com
- WhatsApp: +52 33 1234 5678

## 📄 Licencia

© 2024 JULDRA UNIFORMES. Todos los derechos reservados.

---

**Desarrollado con ❤️ para JULDRA UNIFORMES** 