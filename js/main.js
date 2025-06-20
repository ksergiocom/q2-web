// BOTON INICIO____________________________________
var botonInicio = document.getElementById("boton-inicio");

var scrollBotonInicio = function () {
    var y = window.scrollY;
    if (y >= 150){
        botonInicio.style.display = "grid";
    }
    else{
        botonInicio.style.display = "none";
    }
}

window.addEventListener("scroll", scrollBotonInicio);




// MENU HAMBURGUESA_________________________________

// Abrir o cerrar el menu al pulsar sobre el icono.
var botonHamburguesa = document.getElementById("boton-hamburguesa");
var opcionesHamburguesa = document.getElementById("navbar-hamburguesa-opciones");

function botonMenuHamburguesa() { 
    if (opcionesHamburguesa.style.display == "none"){
        opcionesHamburguesa.style.display = "block";
    }
    else{
        opcionesHamburguesa.style.display = "none";
    }
}
botonHamburguesa.addEventListener("click",botonMenuHamburguesa)

// Funcion Cerrar el menu.
function cerrarMenuHamburguesa() {
    opcionesHamburguesa.style.display = "none";
}

// Cerrar el menu si se selecciona una opcion.
lista_elementos_opciones = document.getElementsByClassName("opcion-hamburguesa");
for (i=0;i<lista_elementos_opciones.length;i++){
    lista_elementos_opciones[i].addEventListener("click",cerrarMenuHamburguesa)
    
}

// Cerrar el menu si se hace click fuera del menu.
var divMenuHamburguesa = document.getElementById("navbar-hamburguesa");
// Listen for click events on body
document.body.addEventListener('click', function (event) {
    if (divMenuHamburguesa.contains(event.target)==false) {
        cerrarMenuHamburguesa();
    }
});



//Para cada opcion del menu hamburguesa (cada <li>), al clickar que se accione el hiperlink del <a> interno. (PARA QUE SEA TODO EL AREA DE LA OPCION, NO SOLO EL TEXTO.)
var lista_li = opcionesHamburguesa.querySelectorAll("li")

function find_internal_href(element){
    var children = element.children[0]
    var link = children.href
    window.location.href=link
    cerrarMenuHamburguesa()
}

lista_li.forEach(element => {
    element.addEventListener("click",function(){ find_internal_href(element)})
});


