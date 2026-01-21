// EcommerceM - Modulo de procesamiento de ordenes v1.0
const inventario = [
    { id: 1, nombre: "Laptop Pro", precio: 1200 },
    { id: 2, nombre: "Mouse Óptico", precio: 25 },
    { id: 3, nombre: "Teclado Mecánico", precio: 75 }
];

let carrito = [];

function agregarAlCarrito(productoId, cantidad) {
    const producto = inventario.find(p => p.id === productoId);
    if (producto) {
        carrito.push({ ...producto, cantidad });
        console.log(`Agregado: ${producto.nombre} x${cantidad}`);
    }
}


function procesarPago(tarjeta) {
    console.log("Validando seguridad del pago...");

    if (tarjeta.length === 16) {
        let total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
        return { estado: "Aprobado", total: total, fecha: new Date().toLocaleDateString() };
    }
    return { estado: "Rechazado", motivo: "Error de validación en pasarela" };
}

function generarReporte(resultado) {
    if (resultado.estado === "Aprobado") {
        console.log("--- REPORTE DE VENTA ---");
        console.log(`Fecha: ${resultado.fecha}`);
        console.log(`Total pagado: $${resultado.total}`);
        console.log("------------------------");
    } else {
        console.error("Error: No se pudo generar el reporte.");
    }
}

agregarAlCarrito(1, 1);
agregarAlCarrito(2, 2);
const resultadoVenta = procesarPago("1234567812345678");
generarReporte(resultadoVenta);

module.exports = { procesarPago };