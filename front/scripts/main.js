window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var nav = document.getElementById("Nav"); // Reemplaza "myNav" con el ID de tu barra de navegación
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.style.top = '0';
    } else {
        nav.style.top = ''; // Restablece la posición a su estado original
    }
}

function displayProducts(productsList) {
    let productHTML = '';

    productsList.forEach(element => {
        productHTML +=
            `<div class="product-container">
                <h3>${element.name} Gota</h3>
                <img src="${element.image}">
                <h2 class="precio">$${element.price}</h2>
                <button class="add">Agregar</button>
            </div>`;
    });

    document.getElementById('products').innerHTML = productHTML;
}

function displayPromociones(promocionesList) {
    let promocionesHTML = '';

    promocionesList.forEach(element => {
        promocionesHTML +=
            `<div class="product-container">
                <h3>${element.name} Gota</h3>
                <img src="${element.image}">
                <h2 class="precio">$${element.price}</h2>
                <button class="add">Agregar</button>
            </div>`;
    });

    document.getElementById('promociones').innerHTML = promocionesHTML;
}

window.onload = async () => {
    try {
        const response = await fetch("/api/products");
        const productsList = await response.json();
        console.log(productsList);
        displayProducts(productsList);
        displayPromociones(productsList);
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

