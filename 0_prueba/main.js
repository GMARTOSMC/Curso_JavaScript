// //Tabla de multiplicar

// //Switch

// let dia = "lunes";
// switch (dia) {
//   case "lunes":
//     console.log("Hoy es lunes");
//     break;
//   case "martes":
//     console.log("Hoy es martes");
//     break;
//   default:
//     console.log("Hoy no es lunes ni martes");
//     break;
// }

// //Ciclo for
// let numero = 5;
// console.log(`La tabla del ${numero} es:`);
// for(let i = 0; i<= 10; i ++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }    


// i++
//i = i + 1

//do

// let z = 1
// do{
//     console.log(`Iteracion ${z}`)
//     z++
// } while (z < 4)

//for ...of

// let frutas =['manzanas', 'bananas', 'peras'];

// for (let fruta of frutas) {
//     console.log(fruta)
// }

// let persona = {
//     nombre: "Pepe",
//     edad: 30
// }

// // for ..in

// for (let key in persona){
//     console.log(`La clave es ${key} y tiene valor ${persona[key]}`)
// }

//Valor de referencia
//Tipos primitivos

// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); //20

// // POR REFERENCIA

// let persona1 = {nombre: "Ana"};
// let persona2 = persona1

// persona2.nombre = "Juan"

// console.log (persona1); // Juan
// console.log(persona2); // Juan

// Porque el objeto apunta a un espacio de memoria. Por tanto al igualar persona2 a persona1 ambos pasan a tener el mismo contenido
// Es como la foreign key de MySQL

// let numeros = [1,2,3];
// let nuevosNumeros = [...numeros, 4, 5];

// let persona = {nombre: "Ana", edad: 30};
// let nuevaPersona = {...persona, ciudad: "Madrid"};

// console.log(nuevaPersona);
// console.log(persona);

// structuredClone

// structuredClone

// let persona = {nombre: "Ana", edad: 30};
// let nuevaPersona = structuredClone(persona);

// console.log(persona);
// console.log(nuevaPersona);

// Desestructuracion

// function obtenerCoordenadas(){
//     return {x : 10, y : 20};
// }

// let {x, y} =obtenerCoordenadas();
// console.log(x,y);

// Desestructuracion funcion

