# Unify Protocol: Dashboard Perspectives Strategy

Este documento detalla la visión estratégica para la evolución de la interfaz de Unify, centrándose en el concepto de **"Perspectivas"** y la utilización táctica de pestañas (Tabs) y rutas (Breadcrumbs).

## 1. El Concepto de "Perspectivas"
En lugar de un dashboard estático, la interfaz se transforma en un "Lente" que filtra la realidad de la empresa según el enfoque necesario. Cada perspectiva altera los widgets, el comportamiento de la IA (Cordycep) y las métricas clave.

### Perspectivas Sugeridas:
*   **📈 Ventas (Sales Perspective):** Enfoque en ingresos, conversión, ROAS y salud del embudo.
*   **📦 Inventario / Compras (Supply Chain Perspective):** Enfoque en capital atrapado, rotación, días de stock y matriz héroes/parásitos.
*   **👥 Clientes (Customer Ops Perspective):** Enfoque en LTV (Life Time Value), Churn Rate, comportamiento y segmentación VIP.
*   **🚛 Logística (Fullfilment Perspective):** Enfoque en tiempos de entrega, costos de envío y eficiencia de última milla.

---

## 2. Arquitectura de Navegación

### A. Sistema de Pestañas (Tabs) - "Sesiones de Enfoque"
Ubicadas en la parte superior del Dashboard (estilo navegador/IDE), permiten al usuario mantener múltiples investigaciones abiertas simultáneamente.
*   **Estado Vivo:** Cada pestaña puede tener indicadores de "Salud" (micro-puntos de color).
    *   🔵 **Blue:** Proceso optimizado.
    *   🟡 **Amber:** Desviación detectada.
    *   🔴 **Critical:** Acción inmediata requerida.
*   **Aislamiento de Contexto:** Al cambiar de pestaña, el chat de Cordycep cambia su base de conocimiento para responder específicamente sobre esa área.

### B. Barra de Ruta (Breadcrumbs) - "Navegación Profunda"
Ubicada justo debajo de las pestañas, sirve para el "Drill-down" de datos.
*   **Estructura:** `Unify Protocol > [Entidad/Org] > [Perspectiva] > [Sub-categoría/Filtro]`
*   **Interactividad:** Cada nivel de la ruta es un menú desplegable que permite saltar a áreas adyacentes sin perder el flujo.
*   **Sincronización:** Muestra el estado de las fuentes de datos específicas (ej. "Shopify: 2min ago", "Odoo: Live").

---

## 3. Dinamismo y Micro-interacciones
Para "darle vida" al sistema, se proponen las siguientes implementaciones:

1.  **Micro-animaciones de Carga:** Al cambiar de perspectiva, los widgets se reorganizan con una transición fluida (Glassmorphism/Foundry style).
2.  **Breadcrumb Activo:** Si hay una anomalía en una sección profunda, el breadcrumb correspondiente puede emitir un pulso sutil (Glow effect).
3.  **Perspectiva Combinada:** Capacidad de arrastrar una pestaña sobre otra para crear una vista comparativa (Split View).

---

## 4. Hoja de Ruta de Implementación
1.  **Fase 1:** Implementar el State Manager para las pestañas en el Dashboard.
2.  **Fase 2:** Definir los 5 widgets principales por cada perspectiva.
3.  **Fase 3:** Integrar el cambio de personalidad/contexto del Copilot (Cordycep).
