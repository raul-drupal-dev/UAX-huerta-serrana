# Huerta Serrana — Catálogo con Tailwind

Copia de trabajo del [catálogo original](../huerta-serrana-catalogo/), conservado sin cambios, para validar su adaptación a Tailwind.

## Contenido
- `index.html`: estructura semántica, navegación, filtros, tarjetas, footer y panel lateral del carrito.
- `styles.css`: estilos personalizados para los detalles visuales, estados y componentes que aún no se han migrado a utilidades.
- `app.js`: interacciones demostrativas de filtros, cantidades y carrito.
- `assets/`: recortes provisionales para los productos. El brote está integrado en `index.html` y sigue el icono de la HOME; el hero, el paisaje del footer y la rama decorativa reutilizan los recursos de `../huerta-serrana-home/assets/`.

## Cómo probarlo
Abre `index.html` en un navegador. Tailwind se carga desde CDN y requiere conexión a internet; también se cargan fuentes de Google. Como en la HOME, se trata de una maqueta, no de una configuración de producción. Para evitar restricciones del navegador con `file://`, puedes servir la carpeta con cualquier servidor estático local.

La estructura principal y las tarjetas usan utilidades de Tailwind; el resto conserva CSS propio. Se desactiva el reset Preflight para preservar el aspecto del catálogo original. Si se adopta esta versión, queda pendiente decidir y completar la migración y compilar Tailwind localmente para producción.

## Importante antes de producción
1. Las fotografías son recortes de la imagen conceptual generada para aprobar el diseño; no son fotografías originales de producto.
2. Los nombres de producto y etiquetas de productores son datos provisionales del mockup.
3. No se han inventado precios. El total del carrito queda pendiente hasta incorporar los precios y unidades validados.
4. La información de alérgenos, categorías y temporadas debe contrastarse con los CSV del equipo.
5. El prototipo muestra seis tarjetas de ejemplo. El catálogo real debe cargar los 12 productos de los CSV.
6. La navegación a Inicio, Productores y Contacto apunta a las secciones existentes de la maqueta HOME; los enlaces legales y sociales siguen siendo marcadores.
7. El carrito usa `localStorage` solo como demostración, con una clave distinta de la del catálogo original para no alterar su carrito durante la comparación. Sustituirlo por el estado global/persistencia que se elija para la aplicación.
8. El CDN de Tailwind y las fuentes externas implican peticiones a terceros. Revisar privacidad y rendimiento antes de producción.
9. El carrito enlaza a la [maqueta de pedido](../huerta-serrana-pedido/), que no envía pedidos ni realiza pagos.

## Identidad visual
- Verde sierra: `#2F5D3A`
- Crema: `#FAF6EC`
- Tierra: `#B5532A`
- Tinta: `#1F2A22`
- Arena: `#E8E2D2`
- Miel: `#F2B134`

## Notas para el agente de desarrollo
Mantener el header y el footer como componentes globales compartidos con la HOME. El carrito lateral debe ser global, abrirse sobre el contenido desde la derecha, poder cerrarse con botón, backdrop o Escape y conservar los artículos al navegar. No rediseñar la identidad visual al implementar las páginas restantes.
