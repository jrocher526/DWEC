
    function main() {

    let numeros = pedirNumeros();

    if (numeros === null) {
    alert("Programa cancelado.");
    return;
}

    let media = calcularMedia(numeros);
    let rango = calcularRango(numeros);
    let moda = calcularModa(numeros);

    alert(
    "Resultados\n" +
    "Numeros: " + numeros.join(", ") + "\n" +
    "Media: " + media + "\n" +
    "Rango: " + rango + "\n" +
    "Moda: " + moda
    );
}


    // Pedir los números al usuario
    function pedirNumeros() {

    let cantidad;

    do {
    let entrada = prompt("¿Cuántos números quieres introducir?");

    if (entrada === null) {
    return null;
}

    cantidad = Number(entrada);

} while (!Number.isInteger(cantidad) || cantidad <= 0);

    let numeros = [];

    for (let i = 0; i < cantidad; i++) {

    let numero;

    do {
    let entrada = prompt(
    "Introduce el número " + (i + 1)
    );

    if (entrada === null) {
    return null;
}

    numero = Number(entrada);

    if (entrada.trim() === "") { // .trim() elimina los espacios en blanco al principio y al final de la cadena
    numero = NaN;
}

} while (!Number.isInteger(numero) || numero < 0); // Esto comprueba si son enteros positivos

    numeros.push(numero); // Usadmos push para añadir el numero al array
}

    return numeros;
}


    // Calcular la media
    function calcularMedia(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros.length; i++) { // length es la propiedad que nos da el tamaño del array
    suma = suma + numeros[i];
}

    return suma / numeros.length;
}


    // Calcular el rango
    function calcularRango(numeros) {

    let mayor = numeros[0];
    let menor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {

    if (numeros[i] > mayor) {
    mayor = numeros[i];
}

    if (numeros[i] < menor) {
    menor = numeros[i];
}
}

    return mayor - menor;
}


    // Calcular la moda
    function calcularModa(numeros) {

    let mayorFrecuencia = 0;
    let modas = [];

    for (let i = 0; i < numeros.length; i++) {

    let frecuencia = 0;

    for (let j = 0; j < numeros.length; j++) {

    if (numeros[i] === numeros[j]) {
    frecuencia++;
}
}

    if (frecuencia > mayorFrecuencia) {

    mayorFrecuencia = frecuencia;
    modas = [numeros[i]];

} else if (frecuencia === mayorFrecuencia &&
    !modas.includes(numeros[i])) { // includes() comprueba si un elemento está en el array

    modas.push(numeros[i]);
}
}

    if (mayorFrecuencia === 1) {
    return "No hay moda";
}

    return modas.join(", "); // Join() convierte un array en una cadena de texto
}


    // Iniciar el programa
    main();
