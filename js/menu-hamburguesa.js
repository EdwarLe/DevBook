// Funcionalidad del menu
const mediaQuery = window.matchMedia("(min-width: 744px)")
const hamburguesa = document.getElementById("hamburguesa")
const contenedorMenu = document.getElementById("contenedor-menu")
const cerrarMenu = document.getElementById("cerrar-menu")
const mostrarBuscador = document.getElementById("label")
const inputBuscador = document.getElementById("buscar-input")
const contenedorBuscador = document.getElementById("contenedorBuscador")
const logo = document.getElementById("logo-menu")
const btnBuscar = document.getElementById("buscar-boton")
const linkPagina = document.getElementsByClassName("nav-menu-item")
const url = window.location.pathname



// Esta funcion muestra el menu en pantallas moviles y en tablet
hamburguesa.addEventListener("click", function() {
    contenedorMenu.classList.toggle("mostrar-menu")
})

// Esta funcion cierra el menu en pantallas moviles y en tablet
cerrarMenu.addEventListener("click", function(){
    contenedorMenu.classList.remove("mostrar-menu")
})

// Esta funcion muestra el buscador en pantallas moviles
if(!mediaQuery.matches){
    mostrarBuscador.addEventListener("click", function(){
        contenedorBuscador.classList.toggle("mostrar-input")
        contenedorBuscador.style ="width: 250px"
        mostrarBuscador.style = "left: 90%" 
        logo.style = "display: none"
        btnBuscar.style = "display: flex"
        mostrarBuscador.style = "display: none"
    
    })
}


// Esta funcion indica en que pagina estas
const nombrePagina = Array.from(linkPagina)
const fracmentoNombrePagina = nombrePagina.map((ele)=>{
    ele.addEventListener("click", function(e){
        const numeralGato = e.target.hash
        const nombreReferencia = numeralGato.split("#")
        const nombreHash = nombreReferencia[1]

        if(url.includes(nombreHash)){
            ele.classList.add("nav-activo")
        }
        
        
    })
})
// Finaliza funcionalidad del menu