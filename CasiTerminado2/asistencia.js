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

for(let i=0;i<lista.length;i++){
    let tabla = document.getElementById('inicio');

    let txt;
    let txtID;
    if(i==39){
        txt ="finalFila"
    }else{
        txt="fila";
    }


    if(i<9){
        txtID=`0${i+1}`;
    }else{
        txtID=i+1;
    }

    let texto =`<tr class ="${txt}">
                <td id="ID">${txtID}</td>
                <td><input type="hidden" class="nombres" name="nombre${i}" id="${i}n"}" value ="${lista[i]}">${lista[i]}</td>
                <td id="estadoAsistencia">
                    <input name="estado${i}" value="P" type="radio">
                    <input name="estado${i}" value="T" type="radio">
                    <input name="estado${i}" value="F" type="radio">
                </td>
                <td><input name="justi${i}" type="text"></td>
                </tr>
    `
    tabla.insertAdjacentHTML('beforeend',texto);
}

addEventListener('click', (e) =>{
    if(e.target.id == "enviar"){
        let xhr = new XMLHttpRequest();
        let data = document.getElementById("registro");
        let form = new FormData(data);

        xhr.open('POST',"asistencia.php");
        xhr.onload;
        xhr.send(form)
    }   

    if(e.target.id == "consultar"){
        let win = window.open('consulta.html','_blank');
        win.focus();
    }
})
