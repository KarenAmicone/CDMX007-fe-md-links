### your-md-links

your-md-links es una herramienta que lee y analiza archivos Markdown (.md) para identificar los links que contiene y verificarlos, con el fin de reportar el número de links únicos y su estatus (200+, 300+ o 400+).

La librería cuenta con las siguientes opciones de validación [options]: 

``--validate``devuelve un arrgelo de objetos de todos los links únicos del archivo, que contienen la ruta, el link y su estatus.

``--stats``devuleve el número total de links y el total de links únicos.

``--stats --validate``devuelve el número total de links, de links únicos, de links correctos y de links con error. 



## Instrucciones de uso

1. Abre tu terminal o shell. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una shell (terminal) instalada por defecto (y probablemente git también). Si usas Windows puedes usar Git bash. De preferencia, abre el respositorio o directorio en el que se encuentra el archivo .md que quieres analizar. 

2. Instalar Node.js (que incluye npm) si aún no lo has hecho.

3. Instala la librería con el comando ``npm i your-md-links``.

4. Para ejecutar el programa deberás escribir el comando ``your-md-links``, seguido de la ruta del archivo .md y las opciones de validación que deseas ejecutar. Ejemplo:

``your-md-links ./documents/proyecto --stats``

## Consideraciones de uso

1. Si en la terminal estás posicionada(o) en el repositorio o directorio que contiene el archivo .md que deseas analizar, no es necesario proporcionar una ruta, así que sólo tendrás que ejecutar ``your-md-links [options]``.

2. Por el contrario, si en la terminal no has abierto la carpeta del archivo, tendrás que proporcionar la ruta del mismo seguida de las opciones. 

3. Si tienes más de un archivo .md en la ruta proporcionada, el programa analizará todos los markdown. 