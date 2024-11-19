# Inicialización, Agregado y Subida de Archivos a GitHub con Git #
## Paso a paso:
1. Accedemos a Visualstudiocode y creamos la carpeta que será nuestro repositorio en caso de aún no tenerla.
(se puede crear también de forma manual por ejemplo desde el escritorio)
 
 2. una vez dentro del visualStudioCode, localizamos nuestra carpeta y ejecutamos el siguiente comando:
### * *git init*
este comando convierte tu directorio en un repositorio .Git 
2. creamos nuestros archivos que subiremos al repositorio en caso de estar empezando desde 0
3. en este paso vamos a agregar nuestros archivos de repositorio al Staging area, acá permanecerán hasta que decidamos subirlos, cuando ya estén listos, para dejar los archivos en Staging utilizaremos la siguiente línea de código:
### * *git add .*
*esta línea de código agregará todos los archivos o cambios de los mismos al Staging area o área de preparación*
el Staging area o área de preparación es un punto donde los archivos y cambios se almacenan de forma temporal hasta que decidamos que hacer con ellos

nota: es importante aclarar que después de la palabra add, hay un espacio y luego va el punto, sin este espacio no funcionará
 


* Si lo que queremos es agregar un archivo en especifico, en vez de el punto, pondremos el nombre del archivo y su extensión:
*ejemplo: git add index.html*

4. una vez agregados podemos utilizar la línea de código *git status* la cual nos mostrará el estado de nuestros archivos o nuestros cambios de los mismos.
(es posible utilizar *git status* siempre que haga falta para verificar el estado de nuestros avances)


5. luego de que nuestros archivos están en el Staging area o área de preparación, debemos hacer nuestro primer commit, el cual describirá que cambios o que archivos estamos agregando o bien borrando si es el caso, para esto el comando ideal es:

 * *git commit -m* "acá pondremos la descripción de el cambio que hayamos hecho"

6. Ahora vamos a vincular nuestro repositorio local a uno remoto de Github, para ello usaremos la siguiente línea de código:
* _*git remote add origin <URL_del_repositorio_en_GitHub>*

el url del repositorio lo encontraremos justamente entrando al repositorio remoto en Github, encontraremos un botón que pone <>code , ahí encontraremos el enlace o simplemente vamos a la barra de url en la parte superior del repositorio remoto de Github y lo copiamos desde ahí

7.Ahora que ya tenemos un destino para nuestros archivos de repositorio, los subiremos. Siempre es importante revisar el estado de los mismos con *git status* antes de subirlos, una vez hecho todo, usaremos la siguiente línea de código:
* *git push -u origin master*
Ésta línea de código empujará todos nuestros archivos y cambios al repositorio remoto, luego de esto haremos un *pull request* para que el dueño del repositorio nos conceda el pull, que hará que los archivos ya se encuentren visibles y formen parte del repositorio remoto.

8. para esto iremos a Github y veremos nuestro nombre de usuario seguido de un mensaje y un botón verde que nos indicará el *Pull request*

## De esta forma crearemos nuestro repositorio local, agregaremos nuestros archivos, direccionaremos los mismos a un repositorio remoto y los subiremos para su posterior revisión
### con mucha práctica éste proceso se volverá intuitivo y lo aprenderás antes de que te des cuenta, suerte!

#### Juan Mendoza