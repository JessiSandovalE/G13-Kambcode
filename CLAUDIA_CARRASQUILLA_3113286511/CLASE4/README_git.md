# Inicialización, Agregado y Subida de Archivos a GitHub con Git

### Importancia de versionar los archivos en un repositorio:

- Mantener un historial de cambios: Permite ver quién realizó cada cambio, cuándo y por qué, lo que facilita la identificación y corrección de errores. 

- Retroceder a versiones anteriores: Permite volver a un estado anterior del proyecto o conocer toda su evolución en el tiempo.

- Colaborar de manera efectiva: Permite trabajar en flujos independientes de cambios y fusionarlos posteriormente.

- Garantizar la integridad del proyecto: Permite sincronizar las versiones y evitar conflictos entre los cambios de los usuarios.


### Pasos para inicializar un repositorio en git en tu máquina local:

1. Crear el repositorio en GitHub.

2. Abrir mi proyecto en el editor en nuestro caso VSCode.

3. Abrir la terminal de la consola.

4. Ejecutar el comando git init con la ruta de Github

### Agregar archivos al área de preparación:

Para iniciar el proceso de subida de archivos al repositorio es necesario primero agregar dichos archivos al área de staging area.  Para esto usamos el comando git add.

Si estamos ubicados en la ruta de los archivos que vamos a subir al repositorio, basta con teclear el comando git add .

Si por el contrario estamos ubicados en otra ruta o se desea subir solo algunos archivos utilizamos el comando git add y la ruta del archivo que vamos a subir.


### Realizar commit a los archivos agregados

Para realizar el commit de los archivos agregados usamos el comando git commit:

git commit -m "Descripción del commit"

En estos momentos en nuestra versión local de git ya tenemos el cambio subido pero aún no se vé reflejado en GitHub, GitHub es nuestro repositorio remoto.


### Realizar push para subir los cambios al repositorio de Git:
Para que los cambios se vean reflejados en nuestro repositorio de Git hacemos uso del comando git push:

git push origin main

Al ejecutar este comando podremos visualizar nuestros nuevos archivos subidos al Git.


### Conclusión

En el mundo profesional en absolutamente todos los proyectos se utilizan herramientas de control de versiones, esto por las prestaciones que nos da tener nuestro código en un repositorio, como pueden ser el tener un historial de versiones, tener muchas ramas distintas o versiones distintas de un mismo código, el trabajo en equipo sobre un mismo código que está actualizando en tiempo real, ahorros de tiempo en implementaciones de cambios en el código, seguridad porque nos da la posibilidad de revertir cambios que hayan podido generar errores y seguridad porque sabemos que nuestro código siempre estará persistido en internet y tendremos la posibilidad de recuperarlo cada que necesitemos. Por todos estos temas las herramientas de control de versiones son simplemente obligatorias en todos los proyectos de desarrollo de software.

#### Enlaces de interés:
[Comandos Git](https://www.atlassian.com/es/git/glossary#commands)

[Comandos que todo desarrollador debe saber](https://www.freecodecamp.org/espanol/news/10-comandos-de-git-que-todo-desarrollador-deberia-saber/)







