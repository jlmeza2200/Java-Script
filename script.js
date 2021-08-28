// clickButton captura el botón "Añadir al carrito de cada item de producto con la clase button"
const clickButton = document.querySelectorAll('.button');
// tbody captura el div con la clase tbody que utilizaremos para cargar los items de productos añadidos al carrito.
const tbody = document.querySelector('.tbody');
// carrito será el array que utilizaremos para guardar el título, el precio, la imagen y cantidad de producto añadido al carrito.
var carrito = [];

// forEach aplicado al botón Añadir al carrito para que por cada clic llame a la función addToCartItem.
clickButton.forEach(btn => {

    btn.addEventListener('click', addToCartItem)

} 
)

// Función para guardar en local Storage todo lo almacenado en el array carrito.
function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// llamar a la función que renderiza todos los productos al cargar la página o actualizar la misma.
window.onload = function (){
    const storage = JSON.parse(localStorage.getItem('carrito'))
    if(storage){
        carrito = storage;
        renderCarrito();
    }
}