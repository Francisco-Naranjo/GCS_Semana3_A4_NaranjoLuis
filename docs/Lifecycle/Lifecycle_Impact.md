# Análisis de Impacto en el Ciclo de Desarrollo - EcommerceM

Este documento simula un cambio crítico post-baseline para analizar cómo la Gestión de Configuración de Software (GCS) previene riesgos en cada fase.

## 1. Caso Simulado: Seguridad (2FA para Administradores)
**Descripción:** Se requiere implementar la Autenticación de Dos Factores (2FA) para todos los usuarios con rol administrativo para proteger la gestión de pedidos y datos de clientes.

## 2. Matriz de Impacto por Fase

| Fase | ¿Qué cambia? | EC afectados | Riesgo si no se controla | Evidencia de validación |
| :--- | :--- | :--- | :--- | :--- |
| **Requisitos** | Definición de nuevos RNF de seguridad y criterios de aceptación. | `SRS_v1.md` | Ambigüedad en la validación → Retrabajo. | Revisión de pares y actualización de SRS. |
| **Diseño** | Modificación del flujo de autenticación y manejo de tokens. | `Quality_Model.md` | Inconsistencia en la arquitectura de seguridad. | Diagrama de flujo actualizado. |
| **Implementación**| Adición de lógica para envío y validación de tokens SMS/Email. | `app.js` | Errores en el login que bloqueen accesos legítimos. | Código versionado en `/src`. |
| **Pruebas** | Creación de casos de prueba para tokens correctos e incorrectos. | `unit_test.js` | Despliegue de vulnerabilidades críticas. | Captura de ejecución de tests exitosa. |

---

## 3. Conclusión del Impacto
La fase de **Requisitos** es la más costosa para realizar cambios no controlados. Un error de definición en esta etapa para el sistema **EcommerceM** se propaga al diseño y la implementación, multiplicando el costo de corrección hasta en un 50% más que si se detectara al inicio.