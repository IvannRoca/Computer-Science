//1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. 
//Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.

/* class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    insertarSinDuplicados(dato) {
        if (!this.cabeza) {
            this.cabeza = new Nodo(dato);
            return;
        }

        let actual = this.cabeza;
        while (actual.siguiente) {
            if (actual.dato === dato) {
                return;
            }
            actual = actual.siguiente;
        }

        if (actual.dato !== dato) {
            actual.siguiente = new Nodo(dato);
        }
    }

    imprimir() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }
}

let lista = new ListaEnlazada();
lista.insertarSinDuplicados(10);
lista.insertarSinDuplicados(20);
lista.insertarSinDuplicados(10);
lista.imprimir(); */

//Metodo 2

 class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    insertarSinDuplicados(dato) {
        if (!this.cabeza) {
            this.cabeza = new Nodo(dato);
            return;
        }

        let actual = this.cabeza;

        while (actual.siguiente) {
            if (actual.dato === dato) return; // Si el dato ya existe, no insertamos
            actual = actual.siguiente;
        }

        if (actual.dato !== dato) actual.siguiente = new Nodo(dato); // Verificamos el último nodo
    }

    imprimir() {
        for (let actual = this.cabeza; actual; actual = actual.siguiente) {
            console.log(actual.dato);
        }
    }
}

// Ejemplo de uso:
let lista = new ListaEnlazada();
lista.insertarSinDuplicados(10);
lista.insertarSinDuplicados(20);
lista.insertarSinDuplicados(10); // No se inserta porque ya existe
lista.imprimir(); // Imprime: 10, 20
 



//2.- Escribir un programa para formar una lista que realice las siguientes tareas:
//Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
//Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
//Mostrar todos los Nodos que superen un valor determinado.

class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    insertarFinal(dato) {
        let nuevoNodo = new Nodo(dato);

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            return;
        }

        let actual = this.cabeza;
        while (actual.siguiente) {
            actual = actual.siguiente;
        }

        actual.siguiente = nuevoNodo;
    }

    imprimir() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }

    mostrarMayoresA(valor) {
        let actual = this.cabeza;
        console.log(`Números mayores a ${valor}:`);
        while (actual) {
            if (actual.dato > valor) {
                console.log(actual.dato);
            }
            actual = actual.siguiente;
        }
    }
}


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function crearListaAleatoria(tamano, min, max) {
    let lista = new ListaEnlazada();
    for (let i = 0; i < tamano; i++) {
        let numeroAleatorio = generarNumeroAleatorio(min, max);
        lista.insertarFinal(numeroAleatorio);
    }
    return lista;
}


let listaNumeros = crearListaAleatoria(10, 1, 100);
listaNumeros.imprimir(); 
listaNumeros.mostrarMayoresA(50); 
