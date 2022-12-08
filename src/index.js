//const cipher = {}

//cipher.encode("ABCD", 3)
//console.log(cipher.encode("ABCD", 3))

//DEFINO EL BOTÓN CIFRAR


function cifrar(){
  const nuevoMensaje=document.getElementById('mensajeADescifrar').value;
  console.log(nuevoMensaje);

  const desplazamiento=document.getElementById("Desplazamiento").value;

  const mensajeCodificado = encode(nuevoMensaje,desplazamiento);

  document.getElementById('cifrado').value=mensajeCodificado;
}

function descifrar(){
  var mensajeCodificado=document.getElementById('cifrado').value;
  console.log(mensajeCodificado);

  const desplazamiento=document.getElementById("Desplazamiento").value;

  var mensajeCodificado = encode(mensajeCodificado,-desplazamiento);

  document.getElementById('descifrado').value=mensajeCodificado;
}

function encode (mensaje,desplazamiento) { // esta función establece los párametros de "codificar"
  let resultado = ""; //el resultado es el mensaje que esperamos tener al final de la función y es una variable

  for(let i=0;i<mensaje.length;i++){ //este es el loop, necesita 3 elementos = i=0="A", largo del mensaje que va a recorrer y el i++ que significa que añade +1

    if(mensaje.charCodeAt(i)>=65 && mensaje.charCodeAt(i) <=90){ // ASCII A empieza en 65 y Z termina en 90
      resultado+=String.fromCharCode((mensaje.charCodeAt(i)+(desplazamiento-65))%26+65); // CharCode y CharCodeAt
    }else{
      resultado+=String.fromCharCode(mensaje.charCodeAt(i));
    }
  }

  return resultado; 

}

document.getElementById('Cifrar Mensaje').addEventListener('mousedown', cifrar);
document.getElementById('Descifrar Mensaje').addEventListener('mousedown', descifrar);


//OBTENER EL MENSAJE        //GET THE MESSAGE
//OBTENER DESPLAZAMMIENTO   //OBTAIN DISPLACEMENT
//LLAMAR ENCODE             //CALL ENCODE
//OBTENER RESULTADO         //RESULT
//PRESENTAR RESULTADO       //PRESENT RESULT

//window.encode=function codificar (){
//const nuevoMensaje=document.getElementById("cifrado").addEventListener("click",() => {
      
// })
//};


