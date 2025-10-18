import { manejarAgregarAlCarrito } from "./carrito.js";

/**
 * @description FUNCION QUE OBTIENE EL LISTADO DE PRODUCTOS DE LA API
 * @returns {object}
 */
async function obtenerListaProductos() {
  const response = await fetch("https://fakestoreapi.com/products?limit=3");
  const data = await response.json();

  return data;
}

/**
 * @description Funcion que muestra la tarjeta de producto
 */
export async function mostrarCardsProductos() {
  try {
    const productList = await obtenerListaProductos();

    productList.forEach((producto) => {
      crearTarjetaProducto(producto);
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * @description Funcion que crea la tarjeta del producto
 * @param {object} producto
 */
function crearTarjetaProducto(producto) {
  const div = document.getElementById("output");
  const tarjeta = document.createElement("div");

  tarjeta.innerHTML = `
   <img src="${producto.image}" alt="${producto.title}" class="product-image">
    <h4>${producto.title}</h4>
    <p class="product-price">$${producto.price}</p>
    <button class="btn-comprar">Agregar</button>
  `;

  const botonComprar = tarjeta.querySelector(".btn-comprar");

  botonComprar.addEventListener("click", function () {
    manejarAgregarAlCarrito(producto.id, producto.title, producto.price);
  });

  div.appendChild(tarjeta);
}
