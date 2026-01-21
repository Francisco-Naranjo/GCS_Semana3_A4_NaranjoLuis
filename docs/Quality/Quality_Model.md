# Modelo de Calidad ISO/IEC 25010 - EcommerceM

Este documento define los atributos de calidad y las métricas verificables para asegurar que el sistema de E-commerce sea auditable y cumpla con las expectativas del usuario.

## 1. Atributos de Calidad y Métricas

| Atributo | Definición (ISO 25010) | Métrica Verificable | EC que lo soporta |
| :--- | :--- | :--- | :--- |
| **Seguridad** | Protección de datos y transacciones contra accesos no autorizados. | **0** contraseñas o tokens almacenados en texto plano dentro del código. | `/src`, `/config` |
| **Eficiencia** | Capacidad del sistema para proporcionar un desempeño adecuado bajo carga. | El proceso de pago (checkout) debe responder en **≤ 3 segundos**. | `/src`, `/tests` |
| **Fiabilidad** | Grado en que el sistema realiza funciones específicas bajo condiciones dadas. | Disponibilidad del servicio (Uptime) mayor o igual al **99.5%** mensual. | `SRS_v1.md` |
| **Mantenibilidad** | Facilidad con la que el software puede ser modificado o corregido. | Cobertura de pruebas unitarias mayor o igual al **60%** del código base. | `/tests` |
| **Usabilidad** | Facilidad de aprendizaje y uso para el cliente final. | Máximo **4 clics** para completar una compra desde la página de inicio. | `SRS_v1.md` |
| **Portabilidad** | Capacidad del producto para ser transferido de un entorno a otro. | Ejecución correcta y visualización en **3 navegadores** distintos (Chrome, Firefox, Safari). | `Quality_Model.md` |

---

## 2. Métricas Estrella (Críticas para el Negocio)

De acuerdo con los objetivos del proyecto **EcommerceM**, se han seleccionado estas dos métricas como los indicadores clave de calidad:

1.  **Seguridad de Transacción:** Verificación de integridad en la pasarela de pagos mediante la métrica de cifrado del 100% de datos sensibles en el transporte.
2.  **Rendimiento del Checkout:** Métrica de tiempo de respuesta (≤ 3s) para reducir la tasa de abandono del carrito de compras.