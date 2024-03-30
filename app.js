// FUNCIONES


// FUNCION FLECHA - Arrow Function

// const sumarDosNumeros = (num1, num2) => {
//     return num1 + num2
// }

// - - - - - - - - - - - - - - - - -


// FUNCION NORMAL SIN RETORNO

// function Saludar() {
    
//     console.log("Bienvenidos a JavaScript.")

// }

// Saludar();

// - - - - - - - - - - - - - - - - -

// FUNCION NORMAL CON PARAMETROS

// let nombre = "Ismael";

// function Saludar2(name) {

// console.log(`Bienvenido ${name}`)
    
// }

// Saludar2(nombre);

// - - - - - - - - - - - - - - - - -


// Funcion Anonima 

// () => {}


// ARROW FUNCTION - FUNCION FLECH

// let edad = 19;

// const SaludarPersona = () => {console.log(`${nombre} tiene ${edad} años!`)}

// SaludarPersona();



// - - - - - - - - - - - - - - - - -


// let personas = [];
// let numeros = [2, 4, 24, 8, 6, 12, 31];
// let resultado = 0;

// function Sumar(misnumeros){

// for (let i = 0; i < misnumeros.length; i++) {

//     resultado += misnumeros[i];
    
// // return resultado;

//     }

//     console.log(`La suma de mi array de numeros es: ${resultado}`)
// }

// Sumar(numeros)


// - - - - - - - - - - - - - - - - -


let nombrePerros = ["Doki", "Firu", "", "Rock", "", "milo", "brad"]
let perrosMayuscula = []


const perrosMayus = () => {

    for (const perro of nombrePerros) {
    
        let perritos = perro.toUpperCase().trim()
        perrosMayuscula.push(perritos)

    }

}

perrosMayus(nombrePerros)
console.log(perrosMayuscula.join(" - "))