# Centhropy - Unify: Estrategia Multi-Entidad y Multi-Sucursal

Este documento detalla las opciones propuestas para escalar la interfaz actual hacia el manejo de múltiples organizaciones, empresas o sucursales de forma fluida y coherente.

## Opción 1: El Switcher de Identidad (Selector de Sidebar)
Esta es la solución más robusta para manejar empresas totalmente distintas desde el mismo acceso.

*   **Interfaz:** El logo superior del Sidebar se convierte en un botón interactivo. Al hacer clic, se despliega una lista vertical con las diferentes organizaciones.
*   **Comportamiento:** Al seleccionar una empresa, el **Estado Global** de la aplicación cambia. Todos los datos cargados en el Dashboard y las consultas en el Data Core se filtran automáticamente bajo el "Scope" (alcance) de esa entidad.
*   **Feedback Visual:** Se sugiere que cada organización tenga un color de acento sutil (ej: Empresa A - Azul, Empresa B - Esmeralda) para que el usuario identifique instantáneamente el contexto activo.

## Opción 2: Jerarquía de "Unidades Tácticas" (Sub-filtros)
Ideal para una organización única que posee múltiples sucursales o departamentos.

*   **Interfaz:** Se implementa un sistema de navegación por jerarquía (Breadcrumbs) en el área superior (Header).
    *   *Ejemplo:* `Centhropy / Grupo Global / Sucursal Zona Norte`
*   **Comportamiento:** Permite al usuario "hacer zoom" en una sucursal específica para análisis detallado o "subir" para ver el contexto general.
*   **Integración Data Core:** Cordycep reconoce el nivel de jerarquía actual. Si estás en "Sucursal Norte", Cordycep analiza esos datos por defecto, pero permite comparaciones: *"¿Cómo rinde esta sucursal respecto a la Zona Sur?"*.

## Opción 3: Modo "Visión de Águila" (Consolidado)
Una entidad virtual que agrupa todas las métricas de la organización.

*   **Interfaz:** Una opción especial en la parte superior llamada "Consolidado Global".
*   **Comportamiento:** Los gráficos del Dashboard no muestran datos de una empresa, sino la suma agregada de todas. 
*   **Potencial de IA:** Es el modo más potente para el Data Core, permitiendo análisis competitivos internos, detección de ineficiencias entre sucursales y balance de inventario global.

---

## Recomendación de Implementación
Para mantener el minimalismo táctico, se recomienda comenzar con la **Opción 1 (Switcher en Sidebar)** como base jerárquica principal, complementada con la **Opción 3** para usuarios de alto nivel que necesiten ver el "gran cuadro" de todas sus inversiones simultáneamente.
