function proximoEnFila(arreglo,elemento) {
    arreglo.push(elemento); //Agregar al final del arreglo
    return arreglo.shift(); //Borrar el primer elemento
}

let miArreglo = [1,2,3,4,5];

console.log("Antes " + JSON.stringify(miArreglo));

console.log(proximoEnFila(miArreglo, 6));

console.log("Después " + JSON.stringify(miArreglo));