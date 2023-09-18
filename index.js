//para el cuadrado

let longitud = document.getElementById("datoLongitud");

let botonCuadrado = document.getElementById("botonCuadrado");

let resultadoCuadrado = document.getElementById("resultadoCuadrado");

botonCuadrado.addEventListener(`click`,function(){
   resultadoCuadrado.textContent = longitud.value*4;
});

//para el circulo

let diametro = document.getElementById("datoDiametro");
let botonCirculo = document.getElementById("botonCirculo");
let resultadoCirculo = document.getElementById("resultadoCirculo");

botonCirculo.addEventListener(`click`,function(){
    resultadoCirculo.textContent = diametro.value/2;
    console.log("ss");
});