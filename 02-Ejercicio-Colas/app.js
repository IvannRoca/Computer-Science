//1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. 
//los pares en una y los nones en otra.
//Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
//Cola 1: [ amarillo, rojo, azul, morado]
//Cola 2: [rosa, verde, negro, blanco]

/* let colaOriginal = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco',];

let cola1 = [];
let cola2 = [];

colaOriginal.forEach((color, index) => {
    if (index % 2 === 0) {
        cola1.push(color);
    } else {
        cola2.push(color);
    }
});

console.log('Cola original:', colaOriginal);
console.log('Cola 1:', cola1);
console.log('Cola 2:', cola2);
 */

/* ----------------------------Metodo 2-------------------------- */

const colaOriginal= ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
const { cola1, cola2 } = dividirCola(colaOriginal);

function dividirCola(colaOriginal) {
    const cola1 = [];
    const cola2 = [];

    colaOriginal.forEach((elemento, indice) => {
        if (indice % 2 === 0) {
           cola1.push(elemento);
        } else {
            cola2.push(elemento);
        }
        
    });

    return { cola1, cola2 };
}
console.log("Ejercicio 1:");
console.log("Cola original:", colaOriginal);
console.log("Cola 1:", cola1);
console.log("Cola 2:", cola2);


//2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, 
//es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, 
//qué elementos fueron retirados de la cola y la cola final.
//Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.

/* let colaUsuarios = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
]

let colaFinal = [];
let eliminados = [];

colaUsuarios.forEach(persona => {
    if (persona.ticket) {
        colaFinal.push(persona);
    } else {
        eliminados.push(persona);
    }
});

console.log('Cola inicial:', colaUsuarios);
console.log('Eliminados:', eliminados);
console.log('Cola final:', colaFinal); */

/* ----------------------------Metodo 2-------------------------- */

function filtrarColaPorTickets(cola) {
    const colaFinal = [];
    const elementosRetirados = [];

    cola.forEach(usuario => {
        if (usuario.ticket) {
            colaFinal.push(usuario);
        } else {
            elementosRetirados.push(usuario);
        }
     });

     return { colaFinal, elementosRetirados };
}

const colaInicial = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true },
];

const resultado = filtrarColaPorTickets(colaInicial);

console.log("\nEjercicio 2:");
console.log("Cola inicial:", colaInicial);
console.log("Elementos retirados:", resultado.elementosRetirados);
console.log("Cola final:", resultado.colaFinal);