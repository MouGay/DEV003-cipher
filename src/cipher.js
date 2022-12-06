

const cipher = {

export default cipher; 
}

function encode (mensaje,desplazamiento) { // esta función establece los párametros de "codificar"
    let resultado = ""; //el resultado es el mensaje que esperamos tener al final de la función y es una variable

    for(let i=0;i<mensaje.length;i++){ //este es el loop, necesita 3 elementos = i=0="A", largo del mensaje que va a recorrer y el i++ que significa que añade +1

      if(mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i) <=90){ // ASCII A empieza en 65 y Z termina en 90
         resultado+=String.fromCharCode((mensaje.charCodeAt(i)+ (desplazamiento-65))%26+65); // CharCode y CharCodeAt
      }else{
         resultado+=String.fromCharCode(mensaje.charCodeAt(i));
      }
    }

    return resultado; 

}
 //No borrar lo de arriba


