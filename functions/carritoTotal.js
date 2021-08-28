function carritoTotal(){

    let total=0;
    const itemCartTotal = document.querySelector('.itemCartTotal');
    carrito.forEach((item)=>{

        const precio = Number(item.price.replace("$",''));
        total = total + precio*item.cantidad;
    })

    itemCartTotal.innerHTML=`Total $${total}`;
    addLocalStorage();
}