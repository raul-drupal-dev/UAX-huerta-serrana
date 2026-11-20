# Contenido y datos del caso

> Estado: inventario inicial de las fuentes y de los datos que la solución deberá poder representar. No constituye todavía un modelo de base de datos.

## Cooperativa y logística

Según el anexo A del [enunciado](Caso_Practico_HUERTA_SERRANA_IngWeb.pdf):

| Dato | Contenido oficial |
| --- | --- |
| Nombre | Huerta Serrana S. Coop. |
| Inicio | 2018 |
| Actividad | Alianza de cuatro productores de la Sierra Norte de Madrid para vender sin intermediarios |
| Lema | «De la huerta a tu mesa en menos de 48 horas» |
| Zona de reparto | Madrid capital y municipios de la sierra; no toda España |
| Días de reparto | Jueves y sábados |
| Antelación de los pedidos | Mínimo 48 horas |
| Correo ficticio | pedidos@huertaserrana.example |
| Teléfono ficticio | 910 000 000 |
| Dominio de pruebas | huertaserrana.example |

## Datos de privacidad del caso

El anexo A identifica como responsable a Huerta Serrana S. Coop.; la finalidad es atender solicitudes de pedido o información, y la base jurídica indicada es el consentimiento. La conservación se describe como hasta resolver la solicitud y durante los plazos legales. Enumera los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, ejercitables escribiendo al correo ficticio. También indica que no se ceden datos a terceros ni se usan cookies.

Estos datos son ficticios. El propio enunciado advierte que en un proyecto real el texto legal debe validarlo un especialista. La política final deberá contrastarse con el funcionamiento y los servicios que se decidan; no afirmar condiciones que la implementación no cumpla.

## Catálogo, productores y cestas

Los datos originales están en el anexo B y en estos archivos, separados por punto y coma y codificados en UTF-8. Para los contenidos que tienen CSV, se ha decidido usar el archivo correspondiente como referencia. Para el resto de datos, consulta el anexo que corresponda.

| Recurso | Contenido | Campos de origen |
| --- | --- | --- |
| [Productos](../recursos/productos_huerta_serrana.csv) | 12 productos | Identificador, producto, categoría, precio en euros, unidad, productor, temporada y alérgenos |
| [Productores](../recursos/productores.csv) | 4 productores | Identificador, nombre, localidad, especialidad, año de fundación y descripción |
| [Cestas](../recursos/cestas.csv) | 3 cestas | Identificador, nombre, precio mensual en euros, personas, contenido y frecuencia de entrega |
| [Paleta](../recursos/paleta_marca.csv) | 7 colores de marca | Token, nombre, valor hexadecimal y uso |
| [Checklist](../recursos/checklist_verificacion.csv) | Referencia para la [verificación](checklist-verificacion.md) | Identificador, área, criterio, medición y umbral |

Los CSV son fuentes de contenido, no una decisión sobre almacenamiento. Antes de desarrollar se decidirá cómo importar, validar, relacionar y mantener los datos. No convertir una certificación «en trámite» en una certificación obtenida.

## Aclaraciones y dudas de las fuentes

- En la cesta C1 figura «1 huevos» en el PDF y en el CSV. El equipo ha confirmado que se presenta como una docena de huevos; las fuentes originales se conservan sin cambios.
- Para PR2, Quesería La Peña, se ha decidido usar la descripción completa del CSV: «Rebaño de 120 cabras y 80 ovejas; elaboración artesanal con leche del día.» El PDF muestra la descripción hasta «80 ovejas». El CSV contiene un punto y coma sin comillas dentro de la descripción, por lo que un lector CSV estándar lo interpreta como una columna adicional; habrá que tratar correctamente el delimitador antes de importarlo.
- El PDF aporta datos legales y condiciones del caso, pero el uso de servicios externos y el tratamiento real de solicitudes aún no están decididos. Hay que revisar la coherencia de esos textos cuando se conozca la solución.

No se han corregido las fuentes originales ni se han supuesto respuestas para las dudas pendientes.
