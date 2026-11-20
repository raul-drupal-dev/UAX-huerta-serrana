# Checklist de verificación

Transcripción del anexo D del [enunciado original](Caso_Practico_HUERTA_SERRANA_IngWeb.pdf). Los criterios y umbrales se conservan como aparecen en el PDF, incluso cuando su aplicabilidad al proyecto esté pendiente de confirmar.

Esta revisión cubre las siete páginas de [web](../web/) el 20/11/2026. ✓ indica que se cumple; — indica que no aplica, el incumplimiento es menor o la comprobación sigue pendiente (se especifica en la observación); X señala un incumplimiento que requiere revisión.

| Resultado (20/11/2026) | Id | Área | Criterio | Cómo se mide | Umbral | Observación de la revisión |
| --- | --- | --- | --- | --- | --- | --- |
| — | V01 | HTML | Documento válido | validator.w3.org en las 4 páginas | 0 errores | Pendiente pasar el validador HTML; no se considera aprobado. |
| ✓ | V02 | HTML | Semántica y encabezados | Un solo h1 por página y sin saltar niveles | Cumple | Las siete páginas tienen un h1 y no se observaron saltos de nivel en los encabezados. |
| ✓ | V03 | HTML | Imágenes accesibles | Todas con alt significativo (o alt vacío si son decorativas) y width/height | 100 % | Las imágenes del DOM tienen alt, width y height; las imágenes decorativas usan alt vacío. Las cabeceras con imagen de fondo tienen descripción accesible. Las imágenes de los diálogos de Productores se cargan al abrirlos. |
| ✓ | V04 | Accesibilidad | Navegación por teclado | Recorrer cada página solo con Tab y Mayús+Tab | Todo alcanzable, foco visible | En las siete páginas, a 360 y 1280 px, Tab y Mayús+Tab alcanzan todos los elementos enfocables visibles; se observan estilos de foco. |
| — | V05 | Accesibilidad | Contraste | Calculadora o panel Elements de DevTools | ≥ 4,5:1 texto normal | Pendiente de medir el contraste de todos los textos, en especial sobre imágenes y fondos variables. El CSV original añade «≥ 3:1 texto grande», que no figura en la tabla del PDF. |
| ✓ | V06 | Accesibilidad | Formulario | Etiquetas label, tipos y autocomplete correctos | Cumple | Los campos de Contacto y Pedido tienen etiquetas asociadas y tipos/autocomplete adecuados. |
| ✓ | V07 | Responsive | Sin scroll horizontal | DevTools modo dispositivo a 360, 768 y 1280 px | Cumple | En las siete páginas el documento no supera el ancho de ventana. La tabla comparativa de Cestas tiene desplazamiento horizontal propio. |
| X | V08 | Rendimiento | Peso total | Pestaña Network con caché desactivada | ≤ 500 KB por página | Revisión local a 360 px, caché desactivada y desplazamiento para cargar imágenes diferidas: Inicio 1.161 KB, Catálogo 811 KB, Cestas 787 KB y Productores 738 KB superan el límite. Contacto 334 KB, Pedido 390 KB y Gracias 348 KB quedan por debajo. |
| X | V09 | Rendimiento | Peticiones | Pestaña Network | ≤ 15 por página | En la misma revisión: Inicio 23, Catálogo 23 y Cestas 19 peticiones superan el límite; Productores 14, Contacto 10, Pedido 10 y Gracias 10 quedan por debajo. |
| — | V10 | Rendimiento | Lighthouse móvil | Lighthouse en DevTools | Rendimiento ≥ 85 | Pendiente ejecutar Lighthouse móvil. |
| — | V11 | Calidad | Lighthouse móvil | Accesibilidad, Buenas prácticas y SEO | ≥ 90 cada uno | Pendiente ejecutar Lighthouse móvil. |
| — | V12 | Privacidad | Sin terceros | Network: ninguna petición a otro dominio | 0 peticiones externas | No aplica según la indicación del profesor comunicada por el equipo. La revisión sí detectó peticiones a Tailwind CDN y Google Fonts; conviene considerar su privacidad. |
| X | V13 | CSS | Sistema de diseño | Sin colores ni espaciados sueltos: todo con variables | 0 valores sueltos | Hay numerosos colores y medidas literales en CSS, además de utilidades Tailwind con valores arbitrarios; no se cumple el umbral. |
| X | V14 | CSS | Metodología | Clases BEM, sin estilos en línea, sin IDs para estilar | Cumple | Las clases no siguen BEM de forma consistente. No se encontraron atributos style ni selectores CSS por ID. |
| — | V15 | Repositorio | Historial | Commits con mensajes convencionales | ≥ 15 commits | No aplica según la indicación del profesor comunicada por el equipo; tampoco se considera confirmado el mínimo propuesto de un commit. |
