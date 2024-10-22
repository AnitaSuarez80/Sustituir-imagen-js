var nombre;

var foto = document.querySelectorAll(".foto")
for(var i = 0; i < foto.length; i++){

    //Al dar clic a un elemento en especifico de las fotos
    foto[i].addEventListener("click", mostrarInformacion)
}


function mostrarInformacion(){

     nombre = this.dataset.nombre

    //Crear la etiqueta p
    var parrafoCreado = document.createElement("p")

    //colocamos la clase "activado" a nuestra etiqueta <p>
    parrafoCreado.classList.add("activado")

    //Crear el texto 
    parrafoCreado.innerText = "Seleccionó la imagen de: " + nombre

    //Seleccionar en donde queremos mostrar la nueva etiqueta
    var lugarColocacion = document.querySelector("div")

    //No cree una etiqueta <p> muchas veces
    //remuevo las etiquetas que se ecnuentren en Colocación , agrego la etiqueta que se creo
    while(lugarColocacion.firstChild){
        lugarColocacion.removeChild(lugarColocacion.firstChild)

    }

    //Agregar la etiqueta <p> dentro del <div>
    lugarColocacion.appendChild(parrafoCreado)

    //Manipulación de css
    //var parrafoVisible = document.querySelector("p.activado")

    //Remover la clase de las etiquetas existentes
    //parrafoVisible.classList.remove("activado")


}

var cuadro = document.querySelectorAll(".cuadro")
for( var i = 0; i < cuadro.length; i++){
    
    cuadro[i].addEventListener("click", mostrarImagen)

}

function mostrarImagen(){
   
    var etiquetaImg = document.createElement("img")
    etiquetaImg.src= "img/"+nombre+".jpg"
    var idCuadro = this.getAttribute("id")
    var cuadro = document.getElementById(idCuadro)
    

 if(etiquetaImg != null){

    var primerImg = cuadro.firstChild
    
    if(primerImg != null){
        primerImg.parentNode.removeChild(primerImg)
    }
    etiquetaImg.setAttribute("width","100%")
    cuadro.appendChild(etiquetaImg)


 }

}



