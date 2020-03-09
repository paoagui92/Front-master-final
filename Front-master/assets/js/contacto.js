window.onload = function () {
    //document.formContacto.name.focus();
    document.formContacto.addEventListener('submit', validar);
    } 

function validar(){
    var todo_correcto = true;
    var mensaje = "";


    if(document.getElementById('name').value.length < 2 ){
        todo_correcto = false;
         mensaje +=  "nombre";
    }

    if(document.getElementById('phone').value.length < 2 ){
        todo_correcto = false;
        mensaje +=  " , telefono";
    }

    var expresion = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    var email = document.formContacto.email.value;
    if (!expresion.test(email)){
        todo_correcto = false;
        mensaje +=  " , email";
    }


    if(!todo_correcto){
        alert(`Algunos campos no están correctos ${mensaje}, vuelva a revisarlos`);
        }

    if (todo_correcto == true){
        alert("Mensaje Enviado")
    }
    
    return todo_correcto;
}