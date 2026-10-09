// const a:string = "Hola mundo"
// console.log(a)

// EJERCICIO 1
// Interfaz que contiene atributos de usuario
interface Usuario {
    nombre: string;
    edad: number;
}

// Usuario creado
const usuario1: Usuario = {
    nombre: "Antonio",
    edad: 27
}

function hacerSaludo(usuario: Usuario): string {
    return `Hola ${usuario.nombre}! Tienes ${usuario.edad} años verdad?`;
}
console.log(hacerSaludo(usuario1));

// Usuario pedido mediante prompt
// Esta funcion simplemente se activa al pulsar el boton
function pedirDatos(): void {
    // Con esto pedimos los datos al usuario
    const usuario: Usuario = {
        nombre: String(prompt("Introduzca su nombre")),
        edad: Number(prompt("Introduzca su edad")),
    }
    // Respuesta en consola para el usuario
    alert(hacerSaludo(usuario));
}

// EJERCICIO 2

interface Producto {
    nombre: string;
    precio: number;
}

function calcularTotal(carrito: Producto[]):number {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}

function mostrarTotal(carrito: Producto[]): void {
    const nombres = carrito.map(p => p.nombre).join(", ");

    const total = calcularTotal(carrito);
    const mensaje = `Productos: ${nombres} \nTotal: ${total}`;
    alert(mensaje);
}

function procesarCarrito(): void {
    const miCarrito: Producto[] = [
        {nombre: "Camiseta", precio: 10},
        {nombre: "Pantalones", precio: 20},
        {nombre: "Chaqueta", precio: 30},
    ];
    mostrarTotal(miCarrito);
}
