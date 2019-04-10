### Your-md-links :mag:

your-md-links es una herramienta que lee y analiza archivos Markdown (.md) para identificar los links que contiene y verificarlos, con el fin de reportar el número de links únicos y su estatus (200+, 300+ o 400+) :bar_chart:.

La librería cuenta con las siguientes opciones de validación [options]: 

``--validate``devuelve un arreglo de objetos de todos los links únicos del archivo, que contienen la ruta, el link y su estado de respuesta :white_check_mark:.

``--stats``devuleve el número total de links y el total de links únicos :chart_with_upwards_trend:.

``--stats --validate``devuelve el número total de links, de links únicos, de links correctos y de links con error :bookmark_tabs:. 



## Instrucciones de uso

1. Abre tu terminal :computer: o shell :shell:. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash. De preferencia, abre el respositorio o directorio en el que se encuentra el archivo .md que quieres analizar. 

2. Instalar Node.js (que incluye npm) si aún no lo has hecho.

3. Instala la librería con el comando ``npm i your-md-links``.

4. Para ejecutar el programa deberás escribir el comando ``your-md-links``, seguido de la ruta del archivo .md y las opciones de validación que deseas ejecutar. Ejemplo:

    ``your-md-links ./documents/proyecto --stats``

## Consideraciones de uso

1. Si en la terminal estás posicionada(o) en el repositorio o directorio :open_file_folder: que contiene el archivo .md que deseas analizar, no es necesario proporcionar una ruta, así que sólo tendrás que ejecutar ``your-md-links [options]``.

2. Por el contrario, si en la terminal no has abierto la carpeta del archivo, tendrás que proporcionar la ruta del mismo seguida de las opciones. 

3. Si tienes más de un archivo .md en la ruta proporcionada, el programa analizará todos los markdown. 



### Códigos de estado de respuesta 

## Respuestas informativas

Code |Status Text
--------------------------------------
100	 |Continue
--------------------------------------
101	 |Switching Protocols
--------------------------------------
102	 |Processing
--------------------------------------

## Respuestas satisfactorias

200	 |OK
--------------------------------------
201	 |Created
--------------------------------------
202	 |Accepted
--------------------------------------
203	 |Non Authoritative Information
--------------------------------------
204	 |No Content
--------------------------------------
205	 |Reset Content
--------------------------------------
206	 |Partial Content
--------------------------------------
207	 |Multi-Status
--------------------------------------

## Redirecciones 

300	 |Multiple Choices
--------------------------------------
301	 |Moved Permanently
--------------------------------------
302	 |Moved Temporarily
--------------------------------------
303	 |See Other
--------------------------------------
304	 |Not Modified
--------------------------------------
305	 |Use Proxy
--------------------------------------
307	 |Temporary Redirect
--------------------------------------
308	 |Permanent Redirect
--------------------------------------

## Errores de cliente

400	 |Bad Request
--------------------------------------
401	 |Unauthorized
--------------------------------------
402	 |Payment Required
--------------------------------------
403	 |Forbidden
--------------------------------------
404	 |Not Found
--------------------------------------
405	 |Method Not Allowed
--------------------------------------
406	 |Not Acceptable
--------------------------------------
407	 |Proxy Authentication Required
--------------------------------------
408	 |Request Timeout
--------------------------------------
409	 |Conflict
--------------------------------------
410	 |Gone
--------------------------------------
411	 |Length Required
--------------------------------------
412	 |Precondition Failed
--------------------------------------
413	 |Request Entity Too Large
--------------------------------------
414	 |Request-URI Too Long
--------------------------------------
415	 |Unsupported Media Type
--------------------------------------
416	 |Requested Range Not Satisfiable
--------------------------------------
417	 |Expectation Failed
--------------------------------------
418	 |I'm a teapot
--------------------------------------
419	 |Insufficient Space on Resource
--------------------------------------
420	 |Method Failure
--------------------------------------
422	 |Unprocessable Entity
--------------------------------------
423	 |Locked
--------------------------------------
424	 |Failed Dependency
--------------------------------------
428	 |Precondition Required
--------------------------------------
429	 |Too Many Requests
--------------------------------------
431	 |Request Header Fields Too Large
--------------------------------------

## Errores de servidor

500	 |Server Error
--------------------------------------
501	 |Not Implemented
--------------------------------------
502	 |Bad Gateway
--------------------------------------
503	 |Service Unavailable
--------------------------------------
504	 |Gateway Timeout
--------------------------------------
505	 |HTTP Version Not Supported
--------------------------------------
507	 |Insufficient Storage
--------------------------------------
511	 |Network Authentication Required
--------------------------------------