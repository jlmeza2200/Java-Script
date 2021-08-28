function addToCartItem(e) {

    const button = e.target;
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImagge = item.querySelector('.card-img-top').src;
    
    const newItem = {
        title: itemTitle,
        price: itemPrice,
        imagge: itemImagge,
        cantidad: 1
    }
    addItemCarrito(newItem);
    }