# Marca y bases de diseño

> Estado: borrador para orientar el diseño. La composición, tipografía y componentes definitivos se decidirán tras revisar las propuestas.

## Identidad y tono

- **Marca:** Huerta Serrana S. Coop.
- **Lema oficial:** «De la huerta a tu mesa en menos de 48 horas».
- **Personalidad:** cercana, directa y sobria; sin superlativos ni promesas exageradas.
- **Dirección visual:** producto local y Sierra Norte de Madrid, evitando una estética de «granja de postal».
- **Idioma:** español.

El lema no modifica las condiciones de reparto: consulta [contenido y datos](contenido-y-datos.md).

## Paleta oficial

Fuente: [paleta_marca.csv](../recursos/paleta_marca.csv) y anexo C del [enunciado](Caso_Practico_HUERTA_SERRANA_IngWeb.pdf).

| Token | Nombre | Hex | Uso indicado en la fuente |
| --- | --- | --- | --- |
| `--color-primario` | Verde sierra | `#2F5D3A` | Cabecera, botones, enlaces |
| `--color-fondo` | Crema | `#FAF6EC` | Fondo de página |
| `--color-acento` | Tierra | `#B5532A` | Llamadas a la acción secundarias |
| `--color-texto` | Tinta | `#1F2A22` | Texto principal |
| `--color-superficie` | Arena | `#E8E2D2` | Tarjetas y separadores |
| `--color-destacado` | Miel | `#F2B134` | Solo decorativo o con texto Tinta encima |
| `--color-apagado` | Gris musgo | `#8A8F86` | Ejemplo de color no apto para texto pequeño |

### Contraste de referencia

Relaciones calculadas con la fórmula WCAG para los colores anteriores; conviene comprobar las combinaciones definitivas en la interfaz real.

| Texto | Fondo | Relación aproximada | Orientación |
| --- | --- | --- | --- |
| Tinta | Crema | 13,78:1 | Apto para texto normal |
| Verde sierra | Crema | 7,08:1 | Apto para texto normal |
| Blanco | Verde sierra | 7,64:1 | Apto para texto normal |
| Tierra | Crema | 4,59:1 | Apto para texto normal, con poco margen |
| Miel | Crema | 1,75:1 | No usar para texto |
| Gris musgo | Crema | 3,06:1 | No usar para texto normal |
| Tinta | Miel | 7,87:1 | Apto para texto normal |

Como referencia, WCAG AA requiere al menos 4,5:1 para texto normal y 3:1 para texto grande. No extrapolar estos resultados a otras combinaciones o estados interactivos sin medirlos.

## Dirección de interfaz propuesta

- Diseñar primero para móvil y adaptar la composición a escritorio.
- Dar protagonismo a la información útil: productos, precios, temporada, productores y cestas.
- Utilizar una navegación clara, jerarquía legible, foco visible y controles accesibles.
- Mantener una expresión visual cálida y sobria, sin recursos visuales que sugieran hechos no confirmados.
- El PDF propone fuentes del sistema y Georgia para titulares; la tipografía definitiva está pendiente.

## Páginas de referencia

El enunciado plantea Inicio, Catálogo, Productores y Contacto y pedido. La organización detallada, los wireframes, la escala tipográfica, los espaciados, los radios y la ubicación exacta de cada contenido quedan pendientes de diseño.

El [prompt para Stitch](prompt-stitch.md) convierte estas bases en un encargo inicial. Cualquier texto o imagen generado debe revisarse antes de utilizarse.
