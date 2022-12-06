

const cipher = {
}
export default cipher; 
 //No borrar lo de arriba


//Establecer cuál es la función, qué tengo que hacer, cómo se va a llamar
function cipher(str) {
//Poner nombre a la variable
    var nuevoMensaje="";
//Establecer la variable i y el largo de esa variable
    for(var i=0;i<str.length;i++){
//Crear una condición para el string usar el charCodeAt y llamar a i
//Establecer el ASCII 
        if(string.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
            nuevoMensaje+=String.fromCharCode((str.charCodeAt(i)+13-65)%26+65);
        }else{
            nuevoMensaje+=String.fromCharCode(str.charCodeAt(i));
        }
    }
    return nuevoMensaje;
}
