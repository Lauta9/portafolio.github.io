var formNombre = document.querySelector(".nombre")
var formEmail = document.querySelector(".email")
var enviarForm = document.querySelector(".botonEnviar")

enviarForm.onclick = validarNombre;

function validarNombre(){
    var entrada = document.querySelector(".form")
    if(entrada.value.length == 0){
        alert("Tienes que ingresar un nombre")
    }
    return
}








