console.clear();

var id=0;

var getId=()=>++id;
const isEmpty= (str) =>str.trim()==='';

function agregar(){
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var telefono = document.getElementById('telefono');

    nombreVal = nombre.value;
    apellidoVal = apellido.value;
    emailVal = email.value;
    telefonoVal = telefono.value;
    console.log(telefono);

    tablaUsuarios = document.getElementById('tablaUsuarios');

    if(isEmpty(nombreVal)|| isEmpty(apellidoVal)|| isEmpty(emailVal) || isEmpty(telefonoVal)){
        alert('Datos obligatorios');
        return;
    }
    let id = getId();
    
    let fila =  '<tr id="id"><td>'+id+'</td><td>'+ nombreVal + '</td><td>'+ apellidoVal + '</td><td>' +emailVal+ '</td><td>' +telefonoVal+ '</td>  <td> <button class="btnEliminar">Eliminar </button></td></tr>';
    
    tablaUsuarios.lastElementChild.insertAdjacentHTML('beforeend',fila);

    nombre.value=' ';
    apellidoVal.value=' ';
    emailVal.value=' ';
    telefono.value=' ';
    nombre.focus();    
}

document.addEventListener('click',(e) =>{
    if(e.target.classList.contains('btnEliminar')){
    e.target.parentElement.parentElement.remove();
    }
})
function asignar(){
    btnAgregar = document.getElementById('btnAgregar');
    console.log("HOLA MUNDO");
    btnAgregar.addEventListener('click',agregar);
}

window.addEventListener('load', asignar);

