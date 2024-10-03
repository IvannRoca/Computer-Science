//1.- Crea una función que ordene de forma descendente un arreglo de números.
//Entrada -> [9,3,1,6,5,88,-1,2,7]
//Salida -> [88,9,7,6,5,3,1,-1]

function ordenarDescendente(arr) {
    return arr.sort((a, b) => b - a);
}

const numeros = [9, 3, 1, 6, 5, 88, -1, 2, 7];
const resultado = ordenarDescendente(numeros);

console.log(resultado);

//2.- Crear una función que ordene una lista de caracteres según su valor decimal de acuerdo a la tabla ascii ref: http://www.asciitable.com/.
//Entrada -> [‘b’,‘h’,‘w’,‘e’,‘a’]
//Salida -> [‘a’,‘b’,‘e’,‘h’,‘w’]

function ordenarPorAscii(arr) {
    const asciiValues = arr.map(char => ({ char, ascii: char.charCodeAt(0) }));
    asciiValues.sort((a, b) => a.ascii -b.ascii);
    return asciiValues.map(item => item.char);
}

const caracteres = ['b', 'h', 'w', 'e', 'a'];
const resultado = ordenarPorAscii(caracteres);

console.log(resultado);

//3.- Crear una clase Alumno con los siguientes datos:
//Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio.
//Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio.

class Alumno {
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    obtenerPromedio() {
        const suma = this.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return suma / this.calificaciones.length;
    }
 }

 class Salon {
    constructor(alumnos) {
        this.alumnos = alumnos;
    } 

    ordenarPorPromedio() {
        return this.alumnos.sort((a, b) => b.obtenerPromedio() - a.obtenerPromedio());
    }

 }

 const alumno1 = new Alumno('Alfredo', [90, 80, 85, 70, 95]);
 const alumno2 = new Alumno('Laura', [75, 85, 90, 80, 88]);
 const alumno3 = new Alumno('Lucas', [60, 70, 65, 75, 80]);

 const salon = new Salon([alumno1, alumno2, alumno3]);

 const alumnosOrdenados = salon.ordenarPorPromedio();

 alumnosOrdenados.forEach(alumno => {
    console.log(`Nombre: ${alumno.nombre}, Promedio: ${alumno.obtenerPromedio()}`);

 });
 

 //4.- Crear una funcion que ordene palabras de menor numero de letras a mayor.
 //Entrada -> [“adios”,“hola”,“maximo”,“uno”,“despedida”]
 //Salida -> [“uno”,“hola”,“adios”,“maximo”,“despedida”]

 function ordenarPorLongitud(arr) {
    return arr.sort((a, b) => a.length - b.length);
 }

 const entrada = ["adios", "hola", "maximo", "uno", "despedida"];
 const salida = ordenarPorLongitud(entrada);

 console.log(salida);

 //5.- Crear una función que ordene un arreglo de coordenadas x, y desde a partir del punto mas cercano a 0,0.
//Entrada -> [[7,3],[2,2],[1,0],[4,3]]
//Salida -> [[1,0],[2,2],[4,3],[7,3]]

function ordenarCoordenadas(coordenadas) {
    function distanciaAlOrigen(punto) {
        return Math.sqrt(punto[0]**2 + punto[1]**2);
    }
    return coordenadas.sort((a, b) => distanciaAlOrigen(a) - distanciaAlOrigen(b));
}

const entrada = [[7,3], [2,2], [1,0], [4,3]];
const salida = ordenarCoordenadas(entrada);

console.log("Coordenadas ordenadas por distancia al origen");
salida.forEach(coord => console.log(`[${coord}]`));