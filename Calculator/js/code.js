let termina = false;

function insertText(elemID, text) {
    if(termina){
        document.getElementById(elemID).innerHTML = text;
        termina = false;
    }else{
        document.getElementById(elemID).innerHTML += text;
    }
}

function borra(elemID){
    let str = document.getElementById(elemID).value;
    let strN = str.substring(0, str.length - 1);
    document.getElementById(elemID).innerHTML = strN;
}

/**
 * todo 
 * --- Crear una función que opere sin eval();
 */
function res(elemID){
    let op = document.getElementById(elemID).value;

    document.getElementById(elemID).innerHTML = Math.round(eval(op)*100)/100;
    termina = true;
}