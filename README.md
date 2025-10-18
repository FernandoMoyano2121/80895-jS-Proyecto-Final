# Proyecto: Librerías (Clase 10)

---

## Resumen

- Aplicación front-end simple para mostrar productos y gestionar un carrito de compras en el navegador.
- Implementada con HTML, CSS y JavaScript (módulos ES). Usa SweetAlert2 vía CDN para diálogos.

## Estructura del carpetas

```
📁index.html    -> Archivo de inicio
📁css
  - styles.css  -> Estilos de la interfaz
📁js
  - app.js      -> Lógica de renderizado y gestión del carrito
🗒️README.md    -> Documentación (este archivo)
```

## Funcionalidad principal

- Renderizado de productos en la página (elemento `#output`).
- Gestión visual de un carrito de compras (`#carrito`), con añadidos y eliminaciones.
- Notificaciones y confirmaciones usando SweetAlert2.

## Arquitectura y decisiones

- Patrón: Aplicación cliente (SPA muy simple).
- Separación de responsabilidades:
  - index.html: estructura y referencias a recursos.
  - css/styles.css: estilos visuales.
  - js/app.js: estado de la UI y manipulación del DOM.
- Dependencias: SweetAlert2 (CDN). Sin backend por ahora.

## Cómo ejecutar

##### 1. Clonar el repositorio

```bash
git clone https://github.com/FernandoMoyano2121/80895-jS-Proyecto-Final
```

##### 2. npm install

```bash
npm install
```

##### 3. Abrir `index.html` en un navegador moderno.

##### 4. (Opcional) Levantar un servidor local para evitar restricciones CORS:

- usar Live Server en VSCode.

## Notas para desarrolladores

- Añadir persistencia con `localStorage` para conservar el carrito entre sesiones.
- Desacoplar la lógica en módulos más pequeños para facilitar pruebas.
- Si se integra backend, exponer una API REST para productos y órdenes.

## Sugerencias de mejora

- Búsqueda y filtrado de productos.
- Soporte de cantidades y cálculo de totales.
- Validaciones y pruebas unitarias para la lógica del carrito.

## Licencia

- Uso educativo y modificaciones personales. Añadir una licencia explícita si se publica.
