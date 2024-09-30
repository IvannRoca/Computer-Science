class Nodo{

    constructor(valor){
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }

}

class ArbolBinario{

    constructor(){
        this.raiz = null;
    }

    insertar(nuevoValor){

        // Revisar si ya hay una raíz, en caso de que no, el nuevo nodo tomaría ese lugar.
        if(this.raiz == null){
            this.raiz = new Nodo(nuevoValor);
            return;
        }

        // Si ya hay una raíz, tenemos que empezar a recorrer el árbol.
        let aux = this.raiz;
        while(true){
            if(nuevoValor <= aux.valor){
                // Verificar la izquierda.
                if(aux.izquierdo == null){
                    // El nuevo nodo toma el lugar disponible.
                    let nuevoNodo = new Nodo(nuevoValor);
                    aux.izquierdo = nuevoNodo;
                    return;
                }else{
                    // Nos movemos a la izquierda.
                    aux = aux.izquierdo;
                }
            }else{
                // Verificar la derecha.
                if(aux.derecho == null){
                    // El nuevo nodo toma el lugar disponible.
                    let nuevoNodo = new Nodo(nuevoValor);
                    aux.derecho = nuevoNodo;
                    return;
                }else{
                    // Nos movemos a la derecha.
                    aux = aux.derecho;
                }
            }
        }
    }

    // Nuestro primero algoritmo de búsqueda.
    buscar(valorABuscar){

        if(this.raiz == null){
            return null;
        }

        let aux = this.raiz;
        while(aux != null){
            if(aux.valor == valorABuscar){
                return aux;
            }

            if(valorABuscar <= aux.valor){
                // Nos movemos a la izquierda.
                aux = aux.izquierdo;
            }else{
                // Nos movemos a la derecha.
                aux = aux.derecho;
            }
        }

        return null;
    }

    // Es nuestro primer algoritmo de ordenamiento.
    inorden(nodo, arreglo){

        if(nodo == null) return;

        this.inorden(nodo.izquierdo, arreglo);
        arreglo.push(nodo.valor);
        this.inorden(nodo.derecho, arreglo);
    }

}


// Recursividad: Una función que se manda a llamar a sí misma.
/*
    Las funciones recursivas SIEMPRE tienen que tener una condición de paro para evitar tener bucles infinitos.
    Dato curioso: Cualquier cosa que se puede hacer con un ciclo (for, while) se puede hacer con recursividad.
    Factorial = x! = x * (x-1) * (x-2) * (x-3) * ... * 2 * 1
    Factorial 5 = 5! = 5 * 4 * 3 * 2 * 1 = 120
                     = 5 * 4!
                           4! = 4 * 3!
                                    3! = 3 * 2!
                                             2! = 2 * 1!
                                                      1! = 1
*/

function factorial(x){
    if(x == 1){
        return 1;
    }
    return x * factorial(x - 1);
}

let valorFactorialACalcular = 5;
console.log(`El factorial de ${valorFactorialACalcular} es ${factorial(valorFactorialACalcular)}`);
valorFactorialACalcular = 10;
console.log(`El factorial de ${valorFactorialACalcular} es ${factorial(valorFactorialACalcular)}`);
valorFactorialACalcular = 1;
console.log(`El factorial de ${valorFactorialACalcular} es ${factorial(valorFactorialACalcular)}`);

let numeros = [15, 5, 8, 21, 1, 15, 18, 24, 19];

let arbolBinarioNumeros = new ArbolBinario();

for(let i = 0; i < numeros.length; i++){
    arbolBinarioNumeros.insertar(numeros[i]);
}

let valoresABuscar = [15, 25, 19, 9];
for(let i = 0; i < valoresABuscar.length; i++){
    let valorABuscar = valoresABuscar[i];
    if(arbolBinarioNumeros.buscar(valorABuscar) == null){
        console.log(`El valor ${valorABuscar} NO está en el árbol binario`);
    }else{
        console.log(`El valor ${valorABuscar} SÍ está en el árbol binario`);
    }
}

arbolBinarioNumeros.insertar(2);
arbolBinarioNumeros.buscar(8);

let arregloOrdenado = [];
console.log(`Arreglo desordenado: ${numeros}`);
arbolBinarioNumeros.inorden(arbolBinarioNumeros.raiz, arregloOrdenado);
console.log(`Arreglo ordenado: ${arregloOrdenado}`);

// boleta = [año de inscripción -> 4 dígitos][ID de la escuela -> 3 dígitos][ID único -> 3 dígitos]
let boletas = [2015090234, 2014090111, 2020090254, 2014090001];
let arbolBoletas = new ArbolBinario();
for(let i = 0; i < boletas.length; i++){
    arbolBoletas.insertar(boletas[i]);
}
let boletasOrdenadas = [];
arbolBoletas.inorden(arbolBoletas.raiz, boletasOrdenadas);
console.log(`Boletas desordenadas: ${boletas}`);
console.log(`Boletas ordenadas: ${boletasOrdenadas}`);

let nombres = ['Juan', 'Hector', 'Richard', 'Oskar', 'Espe', 'Alfredo', 'Isaac'];
let arbolNombres = new ArbolBinario();
for(let i = 0; i < nombres.length; i++){
    arbolNombres.insertar(nombres[i]);
}
let nombresOrdenados = [];
arbolNombres.inorden(arbolNombres.raiz, nombresOrdenados);
console.log(`Boletas desordenadas: ${nombres}`);
console.log(`Boletas ordenadas: ${nombresOrdenados}`);