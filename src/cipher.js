

const cipher = {
}
export default cipher; 
 //No borrar lo de arriba

// Necesito guardar los valores del mensaje

function cipher(str) {
    var nuevoMensaje="";
    for(var i=0;i<str.length;i++){
        if(string.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
            nuevoMensaje+=String.fromCharCode((str.charCodeAt(i)+13-65)%26+65);
        }else{
            nuevoMensaje+=String.fromCharCode(str.charCodeAt(i));
        }
    }
    return nuevoMensaje;
}
cipher ("Hola")