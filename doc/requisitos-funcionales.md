# Requisitos funcionales

La tabla siguiente transcribe literalmente los requisitos y prioridades del apartado 4.1 del [enunciado original](Caso_Practico_HUERTA_SERRANA_IngWeb.pdf), conservando el orden, la redacción y los identificadores. Se mantiene como referencia para la evaluación.

**Interpretación:** el profesor permite JavaScript y frameworks. Por tanto, la mención a «sin JavaScript» en RF1 se conserva para respetar la tabla original, pero no se toma como restricción vigente. Las demás referencias a técnicas concretas se conservan literalmente sin dar por cerrada su implementación; cualquier duda se consultará antes de decidir.

| Id | Requisito | Prioridad |
| --- | --- | --- |
| RF1 | Cabecera con navegación principal responsive (menú plegable en móvil sin JavaScript, usando details/summary o la técnica que justifiques) y enlace «saltar al contenido» | Obligatorio |
| RF2 | Inicio: portada con titular y llamada a la acción, «cómo funciona» en 3 pasos, las 3 cestas (Anexo B) y aviso de temporada | Obligatorio |
| RF3 | Catálogo: los 12 productos en tarjetas dentro de una rejilla CSS Grid adaptable, con precio, unidad, productor, temporada y alérgenos | Obligatorio |
| RF4 | Productores: los 4 productores con ficha semántica (article) y una aside con datos de interés | Obligatorio |
| RF5 | Contacto y pedido: formulario accesible con validación nativa (nombre, correo, teléfono, cesta, comentarios, consentimiento RGPD sin marcar) | Obligatorio |
| RF6 | Pie de página con aviso legal y política de privacidad resumida, coherente con el RGPD | Obligatorio |
| RF7 | Tabla comparativa de las 3 cestas con caption, th scope y diseño responsive | Obligatorio |
| RF8 | Preguntas frecuentes con details / summary | Deseable |
| RF9 | Modo de impresión (@media print) para el catálogo | Deseable |
| RF10 | Preferencias del usuario: prefers-reduced-motion y prefers-color-scheme | Deseable |
