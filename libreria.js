function leeCaja(caja) {
    return document.getElementById(caja).value;
}

function escribeCaja(caja,texto) {
    document.getElementById(caja).value=texto;
}

function escribeContenedor(contenedor, texto) {
    document.getElementById(contenedor).innerHTML = texto;
}

function agregaAContenedor(contenedor, texto) {
    document.getElementById(contenedor).innerHTML += texto;
}

function elemento(id) {
    return document.getElementById(id);
}

function aleatorioEntre(n1, n2) {
    return Math.round(Math.random() * (n2 - n1) + parseInt(n1));
}

function generaAleatorios(cuantos,menor,mayor){
    var bombo=[];
    var numerosAleatorios=[];

    //rellenamos el bombo con los números
    for(var i=menor;i<=mayor;i++){
        bombo.push(i);
    }
    //sacamos los números del bombo
    for(var i=0;i<cuantos;i++){
        numerosAleatorios.push(bombo.splice(aleatorioEntre(0, bombo.length-1), 1));
    }
    return numerosAleatorios;
}
