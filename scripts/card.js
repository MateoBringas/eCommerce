function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Busca si el producto ya está en el carrito
    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    updateCart(cart);
}


// En la página del carrito, agrega una función para mostrar el contenido del carrito
function displayCart() {
    let cartContainer = document.getElementById('cartContainer');
    
    // Obtén el carrito actual del almacenamiento local
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verifica si hay productos en el carrito
    if (cart.length > 0) {
        // Crea una lista para mostrar los productos en el carrito
        let cartList = document.createElement('ul');

        // Itera sobre los productos en el carrito y crea elementos de lista
        cart.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartList.appendChild(listItem);
        });

        // Agrega la lista al contenedor del carrito
        cartContainer.appendChild(cartList);
    } else {
        // Si el carrito está vacío, muestra un mensaje indicando eso
        cartContainer.textContent = 'El carrito está vacío.';
    }
}

function displayCart() {
    let cartContainer = document.getElementById('cartContainer');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        cartContainer.innerHTML = ''; // Limpiar el contenido del contenedor antes de volver a renderizar

        let totalQuantity = 0;
        let totalPrice = 0;

        // Iterar sobre los productos en el carrito
        cart.forEach((item, index) => {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cartItem');

            // Detalles del producto
            let cartItemDetails = document.createElement('div');
            cartItemDetails.classList.add('cartItemDetails');

            let productName = document.createElement('p');
            productName.textContent = item.name;

            let productPrice = document.createElement('p');
            productPrice.textContent = `$${item.price.toFixed(2)}`;

            cartItemDetails.appendChild(productName);
            cartItemDetails.appendChild(productPrice);
            cartItem.appendChild(cartItemDetails);

            // Cantidad del producto
            let cartItemQuantity = document.createElement('div');
            cartItemQuantity.classList.add('cartItemQuantity');

            let decreaseButton = document.createElement('button');
            decreaseButton.textContent = '-';
            decreaseButton.onclick = function() {
                decreaseQuantity(index);
                displayCart(); // Vuelve a renderizar el carrito después de actualizar la cantidad
            };

            let quantityDisplay = document.createElement('span');
            quantityDisplay.textContent = item.quantity || 1; // Muestra 1 si la cantidad no está definida

            let increaseButton = document.createElement('button');
            increaseButton.textContent = '+';
            increaseButton.onclick = function() {
                increaseQuantity(index);
                displayCart(); // Vuelve a renderizar el carrito después de actualizar la cantidad
            };

            cartItemQuantity.appendChild(decreaseButton);
            cartItemQuantity.appendChild(quantityDisplay);
            cartItemQuantity.appendChild(increaseButton);
            cartItem.appendChild(cartItemQuantity);

            // Total del producto
            let productTotal = document.createElement('p');
            productTotal.classList.add('cartItemTotal');
            let itemTotal = item.price * (item.quantity || 1); // Multiplica por 1 si la cantidad no está definida
            productTotal.textContent = `$${itemTotal.toFixed(2)}`;
            cartItem.appendChild(productTotal);

            // Actualizar el total global
            totalQuantity += item.quantity || 1; // Suma 1 si la cantidad no está definida
            totalPrice += itemTotal;

            // Agregar el elemento del producto al contenedor principal
            cartContainer.appendChild(cartItem);
        });

        // Mostrar la cantidad total y el precio total
        let totalQuantityDisplay = document.createElement('p');
        totalQuantityDisplay.textContent = `Cantidad total: ${totalQuantity}`;

        let totalPriceDisplay = document.createElement('p');
        totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;

        cartContainer.appendChild(totalQuantityDisplay);
        cartContainer.appendChild(totalPriceDisplay);
    } else {
        cartContainer.innerHTML = 'El carrito está vacío.';
    }
}

function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity = (cart[index].quantity || 1) + 1;
    updateCart(cart);
}

function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity && cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        // Eliminar el producto del carrito si la cantidad es 1 o menos
        cart.splice(index, 1);
    }
    updateCart(cart);
}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); // Vuelve a renderizar el carrito después de actualizar
}


