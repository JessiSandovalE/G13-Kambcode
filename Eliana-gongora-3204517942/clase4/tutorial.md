# Inicialización, Agregado y Subida de Archivos a GitHub con Git
La importamcia de versionar archivos en un repositorio es que tenemos un espacio de trabajo donde puedes guardar, modificar y volver al pasado para corregir o revisar combios. Git es un herramienta muy buena ya que te permite gestionar verciones  de codigo y colaborar con otros desarrolladores de manera eficiente en este asombroso tutorial aprenderás como inicializar un repositorio en tu maquina local, agregar archivos al area de preparación, hacer un commit de los cambios, vincular el repositorio local a uno remoto en github y subir  los combios al repositorio remoto.

## Primer paso: Inicializar  un repositorio en Git
Para Inicializar  un repositorio en Git en tu camina local, utilizamos el comando **'git init'** este comando crea un repositorio Git varío en la carpeta donde lo ejecutes.

## Segundo paso:agregar archivos al área de preparación (staging area)
Cuando ya hayas creado o modificado archivos en tu trabajo deberas agregarlo al area de preparacion y se hace con el comando git add.
 
 #### git add <nombre_del_archivo> 
 cuando utilizas este comando le estas diciendo a git que agregue ese archivo específico en el area de preparación (staging area).

#### git add .
este comando se refiere si quieres agregar todos los archivos de tu trabajo o proyecto.

## Tercer paso: Realizar un commit de los archivos
El commit es ese paso en el que confirmamos los cambios que has añadido al área de preparación.los commit tiene un mensaje donde describes los cambios realizados en deben de ir en comillas.

#### Ejemplo:

__git commit -m "Agrego el archivo de configiracion"__

la __-m__ hace referncia a la opcion de mensaje

## Cómo vincular tu repositorio local con un repositorio remoto en GitHub 
 Para esto debes utilizar el comando **git remote add origin.** Este comando crea un **puente** entre tu repositorio local y el repositorio remoto en Github.

 El comando debe incluir la URL del repositorio remoto, es decir el enlace del repositorio que acabas de crear en GitHub.

 Cuando ya hayas ejecutado el comando ahora todos los cambios que subas desde tu repositorio local se enviaran a ese repositorio remoto.

y finalmemte para subir los cambios, usa el comando **git push -u origin master.** Este comando sube por primera vez los cambios a GitHub y establece la rama master como predeterminada ya en el futuro solo necesitas utlizar  un git push para subir los cambios sin tener que especificar el remote y la rama.


 ## Ahora un ejemplo completo paso a paso de todo

 + **git init** *(inicializamos el repositorio en la maquina local)*
 + **git add** . *(agreamos el archivo al area de  preparación)*
 + **git commit -m "mi primer repo"**  *(hacemos el commit con un mensaje)*
 + **git remote add origin** "aqui el enlace"
 + **git push -u origin master** *(subir los cambios)*
 + **git push** *(y este comando ya lo utilizaras a futuro) 

 ## RECURSOS ADICIONALES
 
 + https://docs.github.com/es/get-started


Felicidades con estos pasos  has aprendido cómo inicializar un repositoriolocal,agregar archivos al area de preparacion,hacer commmit,vincular tu repositorio local con uno remoto de GitHub
y subir sus cambios sigue así!




