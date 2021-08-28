function sumaCantidad(e) {

    const sumaInput = e.target;
    const tr = sumaInput.closest(".itemCarrito");
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item =>{
        if(item.title.trim()===title){
            sumaInput.value < 1 ? (sumaInput.value=1) : sumaInput.value;
            item.cantidad= sumaInput.value;
            carritoTotal()
        }
    })
    console.log(carrito);
}