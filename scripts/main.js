window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var nav = document.getElementById("Nav"); // Reemplaza "myNav" con el ID de tu barra de navegación
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.style.top = "0";
    } else {
        nav.style.top = ""; // Restablece la posición a su estado original
    }
}

