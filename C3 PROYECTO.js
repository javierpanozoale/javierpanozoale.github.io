function validarFormulario(event){

    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var edad = document.getElementById("Edad").value;
    var dni = document.getElementById("DNI").value;
    var email = document.getElementById("email").value;


    if (edad < 18){
        alert("Eres menor de edad")}
    else if(edad > 120){
        alert("Eres superior de edad")
    }

    if (nombre == "" || apellido == "" || edad == "" || dni == "" || email == ""){
        alert("Por favor, complete todos los campos del formulario.");
        return false;
    }

    const tabla = document.getElementById("table");
    const formulario = document.getElementById("miformulario");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const fila = tabla.insertRow();
        const celdaNombre = fila.insertCell(0);
        const celdaApellido = fila.insertCell(1);
        const celdaEdad = fila.insertCell(2);
        const celdaDNI = fila.insertCell(3);
        const celdaEmail = fila.insertCell(4);
    
        celdaNombre.innerHTML = nombre;
        celdaApellido.innerHTML = apellido;
        celdaEdad.innerHTML = edad;
        celdaDNI.innerHTML = dni;
        celdaEmail.innerHTML = email;
        
        formulario.removeEventListener("submit", arguments.callee);
        formulario.reset();
    });
}




