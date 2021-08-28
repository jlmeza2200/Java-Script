function renderCarrito(){

    tbody.innerHTML = "";    
    carrito.map(item=>{

        const tr = document.createElement('tr')
        tr.classList.add('itemCarrito')
        const content = `
        <th scope="row">1</th>
                <td class="table__productos">
                    <img src=${item.imagge} alt="">
                    <h6 class="title">${item.title}</h6>
                </td>
                <td class="table__precio"><p>${item.price}</p></td>
                <td class="table__cantidad">
                    <input type="number" min="1" value=${item.cantidad} class="input__element">
                    <button class="delete btn btn-danger">X</button>
                </td>
        `
        tr.innerHTML = content;
        tbody.append(tr);

        tr.querySelector(".delete").addEventListener('click', removeItemCar);
        tr.querySelector('.input__element').addEventListener('change', sumaCantidad);


    })
    
    carritoTotal();

}