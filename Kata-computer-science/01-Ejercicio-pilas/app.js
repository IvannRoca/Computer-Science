//1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
//Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
//Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].

function extraerElementos(pila,num) {
    return pila.slice(0, num);
}

console.log(extraerElementos(['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandia', 'Melon'],));

//2. Función “reemplazar” que sustituye el primer valor viejo encontrado por el nuevo

function reemplazar(pila, nuevo, viejo) {
    let index = pila.lastIndexOf(viejo);
    if (index !== -1) {
        pila[index] = nuevo;
    }

    return pila.slice(0, index + 1);
}

console.log(reemplazar([3, 2, 3, 4, 6, 8, 1, 2, 5, 5], 7, 2));

//3. Mostrar el camino recorrido de ida y vuelta

function mostrarRecorrido(pueblos) {
    let ida = '';  
    let vuelta = '';  

    for (let i = 0; i < pueblos.length; i++) {
        ida += pueblos[i];
        if (i < pueblos.length - 1) {
            ida += ' → ';
        }
    }

    for (let i = pueblos.length - 1; i >= 0; i--) {
        vuelta += pueblos[i];
        if (i > 0) {
            vuelta += ' → ';
        }
    }

    return { ida, vuelta };
}

let pueblos = ['Pueblo Origen', 'Pueblo 1', 'Pueblo 2', 'Destino'];
let recorrido = mostrarRecorrido(pueblos);
console.log("Ida:", recorrido.ida);
console.log("Vuelta:", recorrido.vuelta);

//4. Retirar un contenedor específico de una pila

function retirarContenedor(pila, id) {
    let temporal = [];
    while (pila.length > 0 && pila[pila.length - 1] !== id) {
        temporal.push(pila.pop());
    }

    pila.pop();
    while (temporal.length > 0) {
        pila.push(temporal.pop());
    }

    return pila;
}

let contenedores = [1, 2, 3, 4, 4, 5, 6, 7];
console.log(retirarContenedor(contenedores, 4));
