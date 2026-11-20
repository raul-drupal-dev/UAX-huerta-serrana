# Huerta Serrana

Proyecto académico para diseñar y desarrollar la web de una cooperativa ficticia de producto local de la Sierra Norte de Madrid. La web debe facilitar la consulta del catálogo y las cestas, presentar a sus productores y permitir solicitar información, pedidos o suscripciones.

La carpeta [web](web/) integra las maquetas en una web navegable para revisión. Puede abrirse [Inicio](web/index.html) directamente o servirse con un servidor estático; por ejemplo, desde la raíz del proyecto:

```sh
python3 -m http.server 8000 --directory web
```

Después, visitar `http://localhost:8000/`. Las maquetas de [diseños](diseños/) se conservan como referencia. Tailwind y las fuentes externas requieren conexión.

Esta versión conserva contenido y funcionalidades provisionales de las maquetas: el catálogo muestra los 12 productos del CSV con sus precios y unidades, con filtros y ordenación pero sin buscador ni fichas individuales de producto, y las cestas pueden consultarse en Inicio y en la [comparativa](web/cestas.html). Algunos enlaces son marcadores. El formulario de contacto no envía mensajes y el pedido es una simulación sin tramitación ni pago; utiliza solo datos ficticios. El mecanismo real de tramitación y la arquitectura definitiva siguen pendientes.

## Publicación en GitHub Pages

El [flujo de publicación](.github/workflows/pages.yml) publica únicamente el contenido de `web/` al subir cambios a `master`, sin proceso de compilación. Para activarlo:

1. En el repositorio de GitHub, abre **Settings → Pages**.
2. En **Build and deployment → Source**, selecciona **GitHub Actions**.
3. En **Actions**, abre **Publicar GitHub Pages** y comprueba la ejecución. Si la ejecución inicial falló antes de activar Pages, vuelve a ejecutarla con **Re-run jobs** o inicia una nueva desde **Run workflow**, seleccionando `master`.
4. Cuando la ejecución termine correctamente, visita la URL indicada en **Settings → Pages**. La URL prevista es <https://raul-drupal-dev.github.io/UAX-huerta-serrana/>.

GitHub Pages publica un sitio estático: no añade por sí solo tramitación de formularios, pedidos ni pagos. Si el repositorio es privado, la disponibilidad de Pages depende del plan de GitHub. Solo la carpeta `web/` se publica como sitio, aunque el resto del repositorio sea accesible según su visibilidad.

## Documentación

El punto de entrada es el [índice de documentación](doc/index.md). La documentación se mantendrá en Markdown junto al proyecto para poder consultarla ahora y publicarla en el futuro; aún no se ha elegido cómo publicarla.

## Fuentes

- [Enunciado original](doc/Caso_Practico_HUERTA_SERRANA_IngWeb.pdf).
- [Recursos oficiales](recursos/): productos, productores, cestas, paleta y checklist de referencia.
- [Instrucciones para agentes de desarrollo](AGENTS.md).

## Uso de IA

La IA ayuda a explorar, documentar y desarrollar, pero sus propuestas deben revisarse y verificarse. Las decisiones de producto y tecnología corresponden al equipo; no se deben inventar datos del negocio.
