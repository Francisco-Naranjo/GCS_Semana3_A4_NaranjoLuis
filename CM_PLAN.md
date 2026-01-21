# Plan de Gestión de Configuración - EcommerceM

| EC | Ubicación | ¿Por qué es EC? | Responsable |
| :--- | :--- | :--- | :--- |
| **SRS_v1.md** | `/docs/SRS/` | Define el alcance del carrito y pagos; cualquier cambio altera el producto final. | Analista |
| **Quality_Model.md** | `/docs/Quality/` | Establece las métricas de aceptación (ISO 25010). | QA Lead |
| **Lifecycle_Impact.md** | `/docs/Lifecycle/` | Registra el impacto de cambios en el ciclo de vida. | GCS Manager |
| **app.js** | `/src/` | Contiene la lógica principal de transacciones y pedidos. | Desarrollador |
| **config.example** | `/config/` | Parametriza conexiones a pasarelas de pago y BD. | DevOps |
| **unit_test.js** | `/tests/` | Valida que los cambios no rompan funcionalidades existentes. | QA |
| **CHANGELOG.md** | `Root` | Historial humano de versiones y correcciones. | GCS Manager |
| **CM_PLAN.md** | `Root` | Es el "mapa" de control; si se pierde, no hay gobernanza. | GCS Manager |