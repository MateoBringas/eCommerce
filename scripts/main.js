document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var nav = document.getElementById("Nav");

    window.onscroll = function() {
        scrollFunction();
    };
    
    function scrollFunction() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            // Oculta el header y posiciona el nav en la parte superior
            header.style.display = 'none';
            nav.style.top = '0';
        } else {
            // Muestra el header y resetea la posición del nav
            header.style.display = 'block';
            nav.style.top = '';
        }
    }
});
