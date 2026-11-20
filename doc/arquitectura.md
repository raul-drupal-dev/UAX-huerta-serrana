# Arquitectura y organización del código

> Estado: integración estática de las maquetas para revisión. La arquitectura de producción y la tramitación real siguen pendientes.

## Integración para revisión

La carpeta [web](../web/) reúne Inicio, Comparación de cestas, Catálogo, Productores, Contacto, Pedido y Gracias. Los recursos están en [assets](../web/assets/):

- [CSS](../web/assets/css/): `general.css` contiene los estilos compartidos y cada página carga también su hoja específica. El estilo general se enlaza después del específico para conservar la cascada de las maquetas; los estilos interiores excluyen Inicio, que mantiene su propia composición.
- [JavaScript](../web/assets/js/): `general.js` contiene la navegación y el carrito compartido; cada página carga su propio script solo cuando lo necesita. En particular, los diálogos de historias se cargan únicamente en Productores.
- [Imágenes de Inicio](../web/assets/home/) y [del catálogo](../web/assets/catalogo/): recursos visuales utilizados por las páginas y el carrito.

El carrito demostrativo se guarda en `localStorage` del navegador y se mantiene al navegar. Admite productos y cestas, mostrando por separado el importe de los productos y el precio mensual de las cestas, sin sumarlos en un total final. Las tarjetas de Inicio abren detalles de las cestas; la navegación y el botón de comparación llevan a una [página específica](../web/cestas.html) con una tabla disponible sin JavaScript. Desde ella también se pueden añadir cestas al carrito de prueba con JavaScript. Si el diálogo no está disponible, los enlaces de las tarjetas llevan a la tabla. La cesta Pareja se presenta con una docena de huevos, según la aclaración del equipo recogida en [contenido y datos](contenido-y-datos.md). Las imágenes son ilustrativas. Las maquetas originales permanecen en [diseños](../diseños/).

Se conservan Tailwind por CDN y fuentes externas de las maquetas; requieren conexión e implican peticiones a terceros. Las imágenes de producto del catálogo se han generado para este prototipo y son ilustrativas; no sustituyen fotografías verificadas de los productores. El catálogo muestra los 12 productos del CSV con sus precios y unidades, filtros y ordenación. Inicio destaca cinco productos del mismo CSV con sus imágenes ilustrativas, precios, unidades y temporadas. No se incorpora buscador ni ficha individual porque los productos se presentan directamente en el catálogo. Los enlaces legales y sociales siguen pendientes. El formulario de contacto está deshabilitado y el recorrido de pedido no envía ni tramita datos, pagos ni suscripciones. No introducir datos personales reales.

En Productores, la historia de la cooperativa se presenta como una recreación narrativa con una imagen ilustrativa; los detalles del encuentro son imaginados. Si los diálogos no están disponibles, el botón despliega una síntesis de la historia.

Para publicar esta integración de revisión, el [flujo de GitHub Actions](../.github/workflows/pages.yml) despliega únicamente `web/` en GitHub Pages desde `master`. La activación y verificación se describen en el [README](../README.md#publicación-en-github-pages). Esto no determina la arquitectura de producción ni añade tramitación real.

## Qué tendrá que resolver

- Presentar el catálogo, las cestas, los productores y los contenidos de marca en las páginas previstas.
- Permitir solicitudes de información, pedido o suscripción mediante un mecanismo real que aún debe definirse.
- Facilitar la actualización del contenido a una persona sin formación técnica.
- Mantener separadas y localizables la documentación, las fuentes de datos y la futura implementación.
- Proteger los datos personales que se soliciten y permitir verificar el comportamiento y la accesibilidad.

## Organización conceptual provisional

```text
Huerta Serrana/
├── README.md          Punto de entrada del proyecto
├── AGENTS.md          Contexto para agentes de desarrollo
├── doc/               Documentación mantenida en Markdown
├── recursos/          Archivos originales del caso
├── diseños/           Maquetas originales
└── web/               Integración estática para revisión
```

Esta representación no determina la arquitectura de producción ni el mecanismo de recepción de solicitudes.

## Decisiones pendientes

1. Tecnologías y arquitectura: presentación, servidor y persistencia, si son necesarios.
2. Recepción y gestión efectiva de formularios, pedidos y suscripciones.
3. Origen y edición de los contenidos: CSV, base de datos, gestor u otra solución.
4. Alojamiento definitivo, presupuesto y publicación de la documentación.
5. Organización definitiva del código, dependencias, configuración y despliegue de producción.
6. Requisitos no funcionales, seguridad, privacidad y estrategia de verificación.

El PDF presenta varias alternativas arquitectónicas como ejemplos; ninguna se ha elegido. Antes de cerrar una opción habrá que contrastarla con las necesidades y decisiones del equipo.
