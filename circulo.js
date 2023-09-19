//Para el circulo

let diametro = document.getElementById("datoDiametro");
let botonCirculo = document.getElementById("botonCirculo");
let resultadoCirculo = document.getElementById("resultadoCirculo");

botonCirculo.addEventListener(`click`,function(){
    //Validamos los datos introducidos
    if(isNaN(diametro.value) || diametro.value == ""){
        alert("El dato introducido debe ser un numero");
    }
    //Si los datos se han introducido correctamente, realiza lo siguiente
    else{
        resultadoCirculo.textContent = parseInt(diametro.value)/2;
    }
});