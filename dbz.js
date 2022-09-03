const imagenes = [
    'https://areajugones.sport.es/wp-content/uploads/2020/02/DragonBalltitular.jpg',
    'https://assets-jpcust.jwpsrv.com/thumbnails/ujd89gqq-720.jpg',
    'https://i.ytimg.com/vi/J39nCoQTUg0/maxresdefault.jpg'
]

const contenedor = document.getElementById("contenedor");
const anterior = document.getElementById("ant");
const siguiente = document.getElementById("sgt");
const slidePrincipal = document.getElementById("slide");
const posicion = document.getElementById("posicion")

/* imagenes.forEach(function (url, indice) {
    slidePrincipal.innerHTML += 
    `<div id="slide-${indice}">
        <img class="img-responsive" src='${url}'/>
    </div>`;
}) */


for (let index = 0; index < imagenes.length; index++) {
    slidePrincipal.innerHTML += 
    `<div id="slide-${index}">
        <img class="img-responsive" src='${imagenes[index]}'/>
    </div>`;
    
}

setTimeout(function(){
    const slide0 = document.querySelector("#slide-0 img")
    slide0.classList.add("active")
    posicion.value = 0
    /* setTimeout(() => {
        limpiar()
    }, 5000); */


},2000);

anterior.addEventListener("click", function(){
    limpiar()
    posicion.value = (parseInt(posicion.value) != 0) ? parseInt(posicion.value) - 1 : 0;
    const slideNuevo = document.querySelector(`#slide-${posicion.value} img`)
    slideNuevo.classList.add("active")
})


siguiente.addEventListener("click", function(){
    limpiar()
    posicion.value = (parseInt(posicion.value) < imagenes.length-1) ? parseInt(posicion.value) + 1 : imagenes.length-1;
    const slideNuevo = document.querySelector(`#slide-${posicion.value} img`)
    slideNuevo.classList.add("active")
})

function limpiar(){
    const fotos = document.querySelectorAll(".slide img.img-responsive")
    console.log(fotos);
    fotos.forEach(function(elemento) {
        console.log(elemento.classList);
        if (elemento.classList.contains("active")) {
            elemento.classList.remove("active")
        }
    });
}

setTimeout(function(){
    setInterval(() => {
        siguiente.click(); 
    }, 3000);
},10000);

