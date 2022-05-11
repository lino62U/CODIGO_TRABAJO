const lista = ["APAZA APAZA NELZON JORGE","APAZA QUISPE ANGEL ABRAHAM","BENAVENTE AGUIRRE PAOLO DANIEL",
"CACSIRE SANCHEZ JHOSEP ANGEL","CARAZAS QUISPE ALESSANDER JESUS","CASTILLO SANCHO SERGIO","CAYLLAHUA GUTIERREZ DIEGO YAMPIER",
"CCAMA MARRON GUSTAVO ALONSO","CERPA GARCIA JEAN FRANCO","CONDORI CASQUINO EBERT LUIS","DAVIS COROPUNA LEON FELIPE",
"ESCARZA PACORI ALEXANDER RAUL","GONZALES CONDORI ALEJANDRO JAVIER","GUTIERREZ ZEVALLOS JAIME JOSÉ","HUALPA LOPEZ JOSE MAURICIO",
"HUAMAN COAQUIRA LUCIANA JULISSA","LAZO PAXI NATALIE MARLENY","LOPEZ CONDORI ANDREA DEL ROSARIO","LUPO CONDORI AVELINO",
"MALDONADO CASILLA BRAULIO NAYAP","MALDONADO P ROY ABEL","MARIÑOS HILARIO PRINCCE YORWIN","MARTÍNEZ CHOQUE ALDO RAÚL",
"MAYORGA VILLENA JHAROLD ALONSO","MENA QUISPE SERGIO SEBASTIAN SANTOS","MOGOLLON CACERES SERGIO DANIEL","MONTOYA CHOQUE LEONARDO",
"NIZAMA CESPEDES JUAN CARLOS ANTONIO","OLAZÁBAL CHÁVEZ NEILL ELVERTH","PARDAVÉ ESPINOZA CHRISTIAN","PARIZACA MOZO PAUL ANTONY",
"QUILCA HUAMANI BRYAN","QUISPE ROJAS JAVIER WILBER","ROQUE SOSA OWEN HAZIEL","RUIZ MAMANI EDUARDO GERMAN","SUCASACA CHIRE EDWARD HENRY",
"TAYA YANA SAMUEL OMAR","YAVAR GUILLEN ROBERTO GUSTAVO","ZAMALLOA MOLINA SEBASTIAN AGENOR","ZHONG CALLASI LINGHAI JOAQUIN"];

var matriz = [];

matriz = new Array(40);
for(let i=0;i<lista.length;i++){
    matriz[i] = new Array(4);
}

for(let i=0;i<lista.length;i++){
    matriz[i][0] = i+1;
    matriz[i][1] = lista[i];
    matriz[i][2];
    matriz[i][3] = "";
}

for(let i=0;i<lista.length;i++){
    const tabla_inicio = document.getElementById('inicio_cuerpo');
    tabla_inicio.insertAdjacentHTML('beforeend', `<tr></tr>`);

    let contenido = `   <td>${i+1}</td>
                        <td>${lista[i]}</td>
                        <td id="${i}">
                            <input type="submit" value="P" id="${1 + (i*3)}">
                            <input type="submit" value="T" id="${2 + (i*3)}">
                            <input type="submit" value="F" id="${3 + (i*3)}">
                        </td>`
    
    tabla_inicio.lastElementChild.insertAdjacentHTML('beforeend',contenido);                
}
function crearJusti(dni,estado){
    let texto = `<td><input type="text"></td>`
    const padre = document.getElementById(dni);
    const hijos = padre.parentElement.parentElement.childElementCount;
    if((estado == "T" || estado == "F") && hijos < 4){
        padre.parentElement.parentElement.lastElementChild.insertAdjacentHTML('afterend',texto);
    }
    if(estado == "P" && hijos > 3){
        padre.parentElement.parentElement.lastElementChild.remove();
    }
}

document.addEventListener('click' , (e) =>{

    const boton = e.target;
    getID = parseInt(boton.id);

    if(getID % 3 == 0){
        console.log("FALTA");
        matriz[parseInt(boton.parentElement.id)][2] = "F";
    }
    if(getID % 3 == 1){
        console.log("PRESENTE");
        matriz[parseInt(boton.parentElement.id)][2] = "P";

    }
    if(getID % 3 == 2){
        console.log("TARDANZA");
        matriz[parseInt(boton.parentElement.id)][2] = "T";
    }

    console.log(matriz[parseInt(boton.parentElement.id)]);

    crearJusti(getID, matriz[parseInt(boton.parentElement.id)][2])
})

