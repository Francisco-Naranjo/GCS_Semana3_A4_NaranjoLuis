const { procesarPago } = require('../src/app');

function testSeguridadPago() {
    console.log("Iniciando Prueba: Validación de Tarjeta (Atributo: Seguridad)");
    
   
    const intentoFallido = procesarPago("12345");
    
    if (intentoFallido.estado === "Rechazado") {
        console.log("✅ Prueba pasada: El sistema rechaza tarjetas no seguras.");
    } else {
        console.error("❌ Prueba fallida: El sistema aceptó una tarjeta inválida.");
    }
}

testSeguridadPago();