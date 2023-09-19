//Para el cuadrado

let longitud = document.getElementById("datoLongitud");
let botonCuadrado = document.getElementById("botonCuadrado");
let resultadoCuadrado = document.getElementById("resultadoCuadrado");

botonCuadrado.addEventListener(`click`,function(){
   //Validamos los datos introducidos
   if(isNaN(longitud.value) || longitud.value == ""){
      alert("El dato introducido debe ser un numero");
   }
   //Si los datos se han introducido correctamente, realiza lo siguiente
   else{
      resultadoCuadrado.textContent = parseInt(longitud.value)*4;
   }
});

