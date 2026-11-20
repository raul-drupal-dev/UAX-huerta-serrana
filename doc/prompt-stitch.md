# Prompt para Stitch

> Borrador: copiar y adaptar tras revisar las decisiones pendientes. Es un encargo de diseño, no una especificación de implementación ni una aprobación de los textos generados.

```text
Diseña una propuesta responsive para Huerta Serrana S. Coop., una cooperativa ficticia de cuatro productores de la Sierra Norte de Madrid. Presenta vistas de móvil y escritorio para Inicio, Catálogo, Productores y Contacto y pedido. Prioriza la experiencia móvil.

OBJETIVO
Ayudar a las personas a conocer la cooperativa, consultar productos y precios, comparar cestas y solicitar información, pedidos o suscripciones. Las solicitudes se diseñan como experiencia de usuario: su funcionamiento técnico todavía no está decidido.

PÚBLICO Y TONO
Familias y jóvenes de Madrid capital y la sierra. Todo en español. Tono cercano, directo y sobrio, sin superlativos ni promesas exageradas. Evita la estética de «granja de postal». El lema oficial es: «De la huerta a tu mesa en menos de 48 horas».

PALETA DE MARCA
- Verde sierra #2F5D3A: color principal, cabecera, botones y enlaces.
- Crema #FAF6EC: fondo de página.
- Tierra #B5532A: acento para acciones secundarias.
- Tinta #1F2A22: texto principal.
- Arena #E8E2D2: tarjetas y separadores.
- Miel #F2B134: decoración o fondo con texto Tinta; no texto Miel sobre Crema.
- Gris musgo #8A8F86: no usar para texto pequeño.
Comprueba el contraste en todas las combinaciones, incluidos botones, enlaces, formularios y estados de interacción.

CONTENIDO Y PÁGINAS
- Inicio: titular, llamada a la acción, cómo funciona en tres pasos, presentación de las tres cestas y aviso de temporada.
- Catálogo: tarjetas para los 12 productos, con precio, unidad, productor, temporada y alérgenos.
- Productores: fichas de los cuatro productores e información de interés.
- Contacto y pedido: formulario accesible con nombre, correo, teléfono, cesta, comentarios y consentimiento sin marcar por defecto.
- Incluye una comparación de las tres cestas, navegación clara, enlace para saltar al contenido y pie con información legal y de privacidad resumida.

DATOS DEL CASO
La cooperativa nació en 2018. Reparte en Madrid capital y municipios de la sierra los jueves y sábados. Los pedidos se solicitan con al menos 48 horas de antelación. No hay envío a toda España.
Contacto ficticio: pedidos@huertaserrana.example y 910 000 000.

Usa únicamente los datos de productos, productores y cestas proporcionados por el equipo en los CSV adjuntos. No inventes precios, disponibilidad, certificaciones, testimonios, condiciones comerciales ni datos de contacto. Si falta información, usa un marcador claramente identificado para revisión; no la presentes como un hecho.

CRITERIOS DE DISEÑO
Propón una jerarquía visual clara, lectura cómoda, navegación y formularios accesibles, estados de foco visibles y disposición adaptable a móvil y escritorio. Mantén una identidad cálida y sobria. La tipografía y los componentes son propuestas, no decisiones cerradas.

ENTREGA
Muestra las cuatro páginas en móvil y escritorio, explica brevemente la estructura y los componentes reutilizables, e identifica cualquier dato pendiente. No incluyas funcionalidades o procesos de compra como si ya estuvieran implementados.
```

## Antes de enviarlo

Adjunta o facilita a Stitch los CSV de [productos](../recursos/productos_huerta_serrana.csv), [productores](../recursos/productores.csv) y [cestas](../recursos/cestas.csv). Revisa las [dudas sobre los datos](contenido-y-datos.md) antes de utilizar sus contenidos; no compartas credenciales ni datos personales reales.

La salida debe contrastarse con la [marca](marca-y-diseno.md) y los [requisitos funcionales](requisitos-funcionales.md). El diseño generado puede necesitar correcciones.
