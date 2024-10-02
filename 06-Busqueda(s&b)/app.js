//1.- Crear una función que encuentre el número más repetido en un array.
//Ejemplo Input -> [3,6,1,8,2,3,6,3,2,5,6]
//Salida -> 6

const input = [3, 6, 1, 8, 2, 3, 6, 3, 2, 5, 6];
function encontrarNumeroMasRepetido(arr) {
    const resultado = arr.reduce((acumulador, numero) => {
        acumulador.conteo[numero] = (acumulador.conteo[numero] || 0) + 1;

        if (acumulador.conteo[numero] > acumulador.maxConteo) {
            acumulador.maxConteo = acumulador.conteo[numero];
            acumulador.encontrarNumeroMasRepetido = numero;
        }

        return acumulador;
    }, { conteo: {}, maxConteo: 0, encontrarNumeroMasRepetido: null });
    
    return resultado.encontrarNumeroMasRepetido;
}

console.log(encontrarNumeroMasRepetido(input));


//2.- Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras.
//Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
//Salida → [‘e’,‘a’,‘d’,‘f’]

const input = [8, 'e', 7, 2, 'a', 'd', 'f', 2, 3, 1, 4, 3];
function extraerLetras(arr) {
    return arr.filter(elemento => typeof elemento === 'string' && elemento.length === 1);
}
console.log(extraerLetras(input));
 


//3.- Crear una función que busque el número más grande en un arreglo.
//Ejemplo input - > [1,4,7,2,4,1,9,4,0,2,4,5,12]
//Salida -> 12

const input = [1, 4, 7, 2, 4, 1, 9, 4, 0, 2, 4, 5, 12];
function encontrarNumeroMayor(arr) {
    if (arr.length === 0) {
        return null;
    }

    return Math.max(...arr);
}

console.log(encontrarNumeroMayor(input));
 

//4.- Crear una función que busque el número más pequeño en el arreglo.
//Ejemplo input - > [1,4,5,-1,-7,2,3,9]
//Salida -> -7

const input = [1, 4, 5, -1, -7, 2, 3, 9];
function encontrarNumeroMenor(arr) {
    if (arr.length === 0) {
        return null;
    }

    return Math.min(...arr);
}

console.log(encontrarNumeroMenor(input));



//5.- Crear una clase llamada Contacto con los siguientes datos:
//* Nombre * Apellido * Teléfono
//Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
//* Agregar un contacto. * Buscar un contacto por nombre.


class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = [];
    }

    agregarContacto(contacto) {
        this.contactos.push(contacto);
        console.log(`Contacto agregado: ${contacto.nombre} ${contacto.apellidos}`);
    }

    buscarContacto(nombre) {
        const contactosEncontrados = this.contactos.filter(contacto =>
            contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );

        if (contactosEncontrados.length > 0) {
            console.log(`Contactos encontrados para "${nombre}":`);
            contactosEncontrados.forEach(contacto => {
                console.log(`- ${contacto.nombre} ${contacto.apellidos}: ${contacto.telefono}`);
            });
        } else {
            console.log(`No se encontraron contactos con el nombre "${nombre}".`);
        }

        return contactosEncontrados;
    }
}

const listaContactos = new ListaContactos();

// Agregar contactos
listaContactos.agregarContacto(new Contacto("Alfredo", "Rocha", "123-456-7890"));
listaContactos.agregarContacto(new Contacto("Laura", "Maldonado", "098-765-4321"));
listaContactos.agregarContacto(new Contacto("Lucas", "Ureña", "111-222-3333"));

// Buscar contactos
listaContactos.buscarContacto("Alfredo");
listaContactos.buscarContacto("Laura");
listaContactos.buscarContacto("Beto");