function removeItemCar(e) {

    const btnDelete = e.target;
    const tr = btnDelete.closest(".itemCarrito");
    const title = tr.querySelector('.title').textContent;

    for(i=0; i<carrito.length; i++){
        if(carrito[i].title.trim()===title.trim())
        carrito.splice(i,1)
    }

    tr.remove();
    carritoTotal()

    const alert = document.querySelector('.remove');

    setTimeout(function(){
        alert.classList.add('remove')
    },2000)
    alert.classList.remove('remove');
}