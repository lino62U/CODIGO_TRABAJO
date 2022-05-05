/*
var putas = [];
var i=0;
var aux=0;
function suma(){
    numero1 = parseInt(document.getElementById('primerNum').value);  
    putas[i] = numero1;
    i++;
}
function mostrar(){
    for(var h in putas){
        for(var j in putas){
            if(putas[j] < putas[j+1]){
                aux = putas[j];
                putas[j] = putas[j+1];
                putas[j+1] = aux;
            }
        }
    }
    console.log("Consola: " + putas);
}
*/

var i=0;
class Asistencia{
    constructor(lista,estado){
        this.lista = lista;
        this.estado = estado;
    }
}

var estudiantes = [];

function suma(){
    nombre = document.getElementById('primerNum').value;
    estado = parseInt(document.getElementById('segundoNum').value);
    estudiantes[i] = new Asistencia(nombre,estado);
    i++;
}

function mostrar() {
    for(let h in estudiantes){
        document.write("Alumno: " + estudiantes[h].lista + "   Estado: " + estudiantes[h].estado + "<br>" );
    }   
}

