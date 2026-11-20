# Huerta Serrana — HOME (maqueta HTML + CSS)

Maqueta responsive basada en la dirección visual aprobada en la conversación.

## Archivos
- `index.html`: estructura semántica de la página de inicio, con comentarios `TODO` y notas para el agente.
- `styles.css`: estilos visuales, responsive y estados de foco.
- `assets/`: recortes fotográficos tomados de la imagen de concepto aprobada. Son recursos provisionales para visualizar la composición; sustituirlos por fotografía final con licencia/permiso.

## Cómo visualizar
Abre `index.html` en un navegador. Tailwind se carga desde CDN, por lo que se necesita conexión a internet para esa dependencia. Los estilos específicos de la marca están en `styles.css`.

## Recomendación para el agente de desarrollo
1. Mantener la jerarquía y composición visual de esta HOME.
2. Sustituir nombres de productores, productos, temporadas y cestas por los datos reales de los CSV del equipo.
3. No inventar precios, disponibilidad, certificaciones, alérgenos ni datos comerciales. Si falta un dato, mostrar un marcador de revisión o no mostrarlo.
4. Mantener “Productos destacados” hasta disponer de datos verificables de ventas; solo entonces valorar “Más vendidos”.
5. Cambiar los enlaces provisionales (`#contacto`) por rutas reales cuando se implementen Catálogo, Productores y Contacto/Pedido.
6. Completar aviso legal, privacidad y redes sociales con información oficial.
7. Para producción, instalar Tailwind como dependencia del proyecto y compilar el CSS localmente en lugar de depender del CDN. La hoja `styles.css` contiene los estilos personalizados que deben conservarse.

## Paleta
- Verde sierra: `#2F5D3A`
- Crema: `#FAF6EC`
- Tierra: `#B5532A`
- Tinta: `#1F2A22`
- Arena: `#E8E2D2`
- Miel: `#F2B134`
- Gris musgo: `#8A8F86` (evitar en texto pequeño)

## Nota sobre contenido e imágenes
Los nombres “Productor 1–4”, los textos genéricos de tarjetas y las fotografías recortadas son placeholders de diseño. No representan información verificada de la cooperativa.


## Ajustes visuales de esta revisión
- Hero y cabecera a ancho completo; en escritorio, una media luna amplia y un degradado funden el fondo del texto con la fotografía.
- Las tarjetas de cestas, productos destacados y productores comparten los márgenes de contenido y el mismo efecto al pasar el ratón; el aviso de temporada es ligeramente más ancho.
- Los productos destacados preceden a los productores; el fondo degradado queda en la última sección, antes del paisaje. Tanto ese fondo como la banda «¿Cómo funciona?» ocupan todo el ancho y conservan sus contenidos centrados.
- Un separador botánico marca la transición entre productos destacados y productores, fundido con el fondo degradado; el logotipo del footer repite todos los trazos del de cabecera.
- Iconografía SVG propia para descubrir, cesta, reparto y calendario de temporada.
- Ramas botánicas decorativas en los márgenes de las secciones.
- En móvil, las cestas se muestran en una columna y las ramas decorativas permanecen dentro del ancho de la pantalla.
- Footer con paisaje panorámico proporcional, sin recortes y fundido con una franja verde a todo el ancho; el área transparente del paisaje conserva el fondo de la sección de productores.
- Hasta 800 px, el hero usa la cabecera móvil y superpone el texto a la fotografía con un velo crema degradado y desenfoque suave.
- «¿Cómo funciona?» muestra sus pasos en horizontal o centrados en vertical, con flechas orientadas según el espacio disponible.
- En pantallas grandes, el panel del hero mantiene un ancho acotado y cede más espacio a la imagen; las bandas de fondo siguen ocupando todo el ancho.
