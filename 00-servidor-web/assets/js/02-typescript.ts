console.log("Hola Typescript");
// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
let nombres = "Adrian";
nombres = "A";
nombres = 'C';
// nombres = 1;
let nombreTS: string = "";
console.log(typeof nombres, "nombres");
let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

// Truty y Falsy
let trutyFalsy:any;
trutyFalsy = "";
if(trutyFalsy){ // ""
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = "a";
if(trutyFalsy){ // "a"
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = -1;
if(trutyFalsy){ // -1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 0;
if(trutyFalsy){ // 0
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = 1;
if(trutyFalsy){ // 1
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = null;
if(trutyFalsy){ // null
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = {};
if(trutyFalsy){ // {}
    console.log("Truty");
}else{
    console.log("falsy");
}
trutyFalsy = [];
if(trutyFalsy){ // []
    console.log("Truty");
}else{
    console.log("falsy");
}

const adrian:any =  {
    "nombre" : "Adrian",
    'apellido': 'Eguez',
    edad: 36,
    hijos: 1,
    casado: true,
    zapatos: undefined,
    ropa: {
        color: "plomo",
        talla: 40
    },
    mascotas: ['Cache', 'Peque', 'Pandi'],
};
console.log(adrian);
// Acceder a las propiedades
adrian.nombre // "Adrian"
adrian["apellido"] // "Eguez"
// Modificar (reasignar)
adrian.nombre = "Vicente";
adrian["nombre"] = "Vicente";
// adrian = {}; ERROR
// Crear atributos
adrian.sueldo = 1.2;
adrian["gastos"] = 0.8;
// Eliminar propiedades
adrian.nombre = undefined;
delete adrian.nombre;






















