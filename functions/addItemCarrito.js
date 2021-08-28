function addItemCarrito(newItem){

    const alert = document.querySelector('.alert');

    setTimeout(function(){
        alert.classList.add('hide')
    },4000)
    alert.classList.remove('hide');

    const inputElement = tbody.getElementsByClassName('input__element')
    for(let i=0; i < carrito.length; i++){
        if(carrito[i].title.trim() === newItem.title.trim()){
            carrito[i].cantidad ++;
            const inputValue = inputElement[i];
            inputValue.value++;
            carritoTotal();
            // console.log(carrito);
            return null;
        }
    }

    carrito.push(newItem);
    renderCarrito();

}