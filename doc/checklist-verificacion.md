# Checklist de verificación

Transcripción del anexo D del [enunciado original](Caso_Practico_HUERTA_SERRANA_IngWeb.pdf). Los criterios y umbrales se conservan como aparecen en el PDF, incluso cuando su aplicabilidad al proyecto esté pendiente de confirmar.

La lista puede utilizarse durante el desarrollo sin ejecutar todos los puntos en cada revisión. Al final del proyecto se revisarán todos los criterios aplicables: marca la casilla solo cuando el criterio se haya verificado y cumplido, y registra la fecha, los resultados y las evidencias. Si falla, déjalo sin marcar y anota la acción pendiente. Los criterios que no aplican se señalan en la tabla y se justifican en las observaciones; no se consideran un fallo ni un cumplimiento. La aplicabilidad de los demás puntos está pendiente de confirmación.

| Comprobado | Id | Área | Criterio | Cómo se mide | Umbral |
| --- | --- | --- | --- | --- | --- |
| - [ ] | V01 | HTML | Documento válido | validator.w3.org en las 4 páginas | 0 errores |
| - [ ] | V02 | HTML | Semántica y encabezados | Un solo h1 por página y sin saltar niveles | Cumple |
| - [ ] | V03 | HTML | Imágenes accesibles | Todas con alt significativo (o alt vacío si son decorativas) y width/height | 100 % |
| - [ ] | V04 | Accesibilidad | Navegación por teclado | Recorrer cada página solo con Tab y Mayús+Tab | Todo alcanzable, foco visible |
| - [ ] | V05 | Accesibilidad | Contraste | Calculadora o panel Elements de DevTools | ≥ 4,5:1 texto normal |
| - [ ] | V06 | Accesibilidad | Formulario | Etiquetas label, tipos y autocomplete correctos | Cumple |
| - [ ] | V07 | Responsive | Sin scroll horizontal | DevTools modo dispositivo a 360, 768 y 1280 px | Cumple |
| - [ ] | V08 | Rendimiento | Peso total | Pestaña Network con caché desactivada | ≤ 500 KB por página |
| - [ ] | V09 | Rendimiento | Peticiones | Pestaña Network | ≤ 15 por página |
| - [ ] | V10 | Rendimiento | Lighthouse móvil | Lighthouse en DevTools | Rendimiento ≥ 85 |
| - [ ] | V11 | Calidad | Lighthouse móvil | Accesibilidad, Buenas prácticas y SEO | ≥ 90 cada uno |
| No aplica | V12 | Privacidad | Sin terceros | Network: ninguna petición a otro dominio | 0 peticiones externas |
| - [ ] | V13 | CSS | Sistema de diseño | Sin colores ni espaciados sueltos: todo con variables | 0 valores sueltos |
| - [ ] | V14 | CSS | Metodología | Clases BEM, sin estilos en línea, sin IDs para estilar | Cumple |
| No aplica | V15 | Repositorio | Historial | Commits con mensajes convencionales | ≥ 15 commits |

## Observaciones y evidencias

Anotar por identificador la aplicabilidad confirmada, la fecha, las páginas o elementos revisados, el resultado, las evidencias y, cuando corresponda, la acción pendiente o el motivo de no aplicabilidad. Todavía no se ha registrado ninguna verificación.

- **V12 — No aplica:** según la indicación del profesor comunicada por el equipo, este criterio no se tendrá en cuenta y se permite usar CSS externo. Se conserva la redacción original para referencia. Los recursos de terceros deben revisarse desde el punto de vista de la privacidad.
- **V15 — No aplica:** no se tendrá en cuenta el criterio original de historial y mínimo de 15 commits. Se propone contar con al menos un commit; ese mínimo no está confirmado como requisito del profesor.

En V05, el [CSV original](../recursos/checklist_verificacion.csv) añade al umbral «≥ 3:1 texto grande», que no figura en la tabla del PDF. Se conserva aquí la redacción del anexo y se señala la diferencia para su revisión.
