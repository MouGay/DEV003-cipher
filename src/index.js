/* eslint-disable no-var */
import cipher from './cipher.js';
//cipher.encode("ABCD", 3)
//console.log(cipher.encode("ABCD", 3))

//DEFINO EL BOTÓN CIFRAR

function encodejs() {
  const nuevoMensaje = document.getElementById("mensajeADescifrar").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  const mensajeCodificado = cipher.encode(desplazamiento, nuevoMensaje);
  document.getElementById("cifrado").value = mensajeCodificado;
  console.log(mensajeCodificado);
}
document.getElementById("cifrarMensaje").addEventListener("click", encodejs);
console.log(encodejs)

function decodejs() {
  const mensajeCodificado = document.getElementById("cifrado").value;
  console.log(mensajeCodificado);
  const desplazamiento = document.getElementById("desplazamiento").value;
  const mensajeCodificado1 = cipher.decode(desplazamiento, mensajeCodificado);
  console.log(mensajeCodificado1);
  document.getElementById("descifrado").value = mensajeCodificado1;
}
document.getElementById("descifrarMensaje").addEventListener("click", decodejs);
console.log(decodejs)

console.log(cipher); 

cipher.encode (null,[]);

//OBTENER EL MENSAJE        //GET THE MESSAGE
//OBTENER DESPLAZAMMIENTO   //OBTAIN DISPLACEMENT
//LLAMAR ENCODE             //CALL ENCODE
//OBTENER RESULTADO         //RESULT
//PRESENTAR RESULTADO       //PRESENT RESULT