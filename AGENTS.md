# Instrucciones para agentes

## Contexto

Huerta Serrana es un proyecto académico sobre una cooperativa ficticia. Antes de trabajar, consulta [el índice de documentación](doc/index.md), el documento pertinente a la tarea y las fuentes originales cuando sea necesario.

## Criterios de trabajo

- Responde y documenta en español, salvo que se indique lo contrario.
- Respeta el branding y los datos oficiales documentados; no inventes precios, disponibilidad, certificaciones, testimonios, condiciones comerciales ni datos de contacto.
- Para productos, productores, cestas y paleta, utiliza los CSV de `recursos/` como referencia de contenido. Consulta [contenido y datos](doc/contenido-y-datos.md) para conocer sus particularidades y no interpretes valores ambiguos sin confirmación.
- Conserva literalmente la [tabla de requisitos funcionales](doc/requisitos-funcionales.md). No alteres su texto sin autorización.
- El enunciado contiene restricciones que el profesor ha flexibilizado. JavaScript y frameworks están permitidos; no apliques automáticamente las demás restricciones ni las des por eliminadas. Si una limitación o decisión es relevante y no está confirmada, pregunta antes de imponerla.
- Diferencia las decisiones confirmadas de las propuestas y de las cuestiones pendientes. No presentes los ejemplos del PDF como decisiones adoptadas.
- Mantén la documentación actualizada junto con los cambios pertinentes y conserva enlaces relativos entre documentos.
- Propón soluciones accesibles, adaptables a móvil, mantenibles y respetuosas con la privacidad. Comprueba las afirmaciones y los resultados; no declares pruebas superadas sin ejecutarlas.
- No afirmes que pedidos o suscripciones se tramitan realmente hasta que exista y se verifique el mecanismo correspondiente.
- No incluyas credenciales ni datos personales reales en el repositorio o en herramientas de IA. La información del caso es ficticia.
- No inicies desarrollo, instalaciones o cambios de arquitectura fuera del alcance solicitado.

## Verificación durante el desarrollo

Consulta la [checklist de verificación](doc/checklist-verificacion.md) al diseñar, implementar y revisar cambios. Usa los siguientes criterios como guía preventiva; su aplicabilidad sigue pendiente de confirmación salvo las excepciones documentadas. No conviertas una referencia del enunciado en una decisión técnica definitiva sin confirmarla.

- **HTML y accesibilidad (V01–V06):** escribe HTML válido y semántico, con un solo `h1` por página y sin saltos de nivel. Incluye `alt` significativo o vacío para imágenes decorativas y sus atributos `width` y `height`. Haz los controles accesibles con teclado y foco visible; usa `label`, tipos y `autocomplete` adecuados en formularios. Comprueba el contraste del texto normal con el objetivo de al menos 4,5:1.
- **Responsive (V07):** evita el desbordamiento horizontal y comprueba los cambios de interfaz en los anchos de 360, 768 y 1280 px cuando corresponda.
- **Rendimiento y calidad (V08–V11):** ten presentes los objetivos del anexo: hasta 500 KB y 15 peticiones por página, Lighthouse móvil de al menos 85 en rendimiento y 90 en accesibilidad, buenas prácticas y SEO. Optimiza recursos y evita dependencias innecesarias; no des por alcanzados los umbrales sin medirlos.
- **CSS (V13–V14):** ten presente el objetivo de usar variables para todos los colores y espaciados, así como BEM y la ausencia de estilos en línea e IDs para estilar, como referencias para el desarrollo, sin imponerlas como decisiones cerradas.
- **Privacidad y excepciones (V12 y V15):** estos criterios no aplican y sus textos originales se conservan en la checklist. Se permite usar CSS externo; antes de introducir recursos de terceros, revisa sus implicaciones de privacidad y rendimiento. No impongas un mínimo de 15 commits.

Comprueba durante cada cambio lo que sea pertinente y viable, sin exigir toda la checklist en cada tarea. Antes de finalizar el proyecto, revisa todos los criterios aplicables y registra resultados, fechas, evidencias, fallos y excepciones en la checklist; no marques un criterio como cumplido sin verificarlo.
