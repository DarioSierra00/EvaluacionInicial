//Para el triangulo
let base = document.getElementById("datoBase");
let altura = document.getElementById("datoAltura");

let botonTriangulo = document.getElementById("botonTriangulo");
let resultadoTriangulo = document.getElementById("resultadoTriangulo");

botonTriangulo.addEventListener(`click`,function(){
    //Validamos los datos introducidos
    if((isNaN(base.value) || isNaN(altura.value)) || (altura.value == "" || base.value == "")){
        alert("El dato introducido debe ser un numero");
    }
    //Si los datos se han introducido correctamente, realiza lo siguiente
    else{
        resultadoTriangulo.textContent = ((parseInt(base.value))*parseInt(altura.value))/2;
    }
});