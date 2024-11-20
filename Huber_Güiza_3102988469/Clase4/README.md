# Tutorial de Creacion de un Repositorio, agregar archivos y subirlos a Github usando comando Git.

---

## Para crear un Repositorio se debe seguir los siguientes pasos

1. Se debe crear una cuenta en Github dirigiendose al siguiente enlace:

   - [Enlace de Github](https://github.com/)
   - Se dirige a Sign up para crear la cuenta de Github.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/signup.png)
   - Siga los pasos para el proceso de crear una cuenta.

2. La siguiente imagen es la intefaz de usuario de dentro de Github.

   - Se le da click en el recuadro rojo, la cual nos dirige a la siguiente ventana.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/interfaz.png)

   - En el recuadro azul se agrega el nombre del repositorio, en el recuadro verde se le agrega una descripcion del mismo, en el recuadro amarillo elige si el repositorio se pueda ver al publico o oculto en privado (tener e cuenta que para que otras personas puedan acceder a este, se le deben conceder permisos para poder realizar cambios), en el recuadro rojo puede adicionar un README.md
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/repositorio.png)

   - En el recuadro naranja crea el repositorio.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/crear.png)

   - Al dirigirse al perfil y dar click en 'Your Repositories'.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/perfil.png)

   - Se abre la siguiente ventana la cual, se encuentran los repositorios creados, se elige uno para continuar con los pasos.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/primerrepo.png)

   - Para clonar el repositorio en visual code studio, se dirige a 'Code' en el recuadro rojo, donde se abre una ventana en la cual en el reacuadro verde se da click para copiar el enlace del repositorio.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/clonar.png)

   - En la interfaz de Visual Code Studio, se da click en 'Clone Git Repository', seguido en el recuadro morado añade el link del repositorio creado, y acepte los cambios.
     ![Sign up](/Huber_Güiza_3102988469/Clase4/Recursos/clonarvisual.png)

---

## Para crear un añadir y subir archivos a Github se debe seguir los siguientes pasos

1. Despues de haber creado una carpeta o un archivo, se dirige en la terminal y por medio de los siguientes comandos se digita para subir los archivos.

```
git add . = añade todos los cambios
git commit -m 'Nombre de lo que se añadio' = prepara los cambios al repositorio
git push = sube los cambios al repositorio
```

2. Para crear, cambiarse de ramas es por medio de los siguientes comandos.

```
git checkout -b = crea una nueva rama
git branch main = para cambiarnos de rama a main en este caso
```

3. Para agregar el nombre y correo cuando no se ha definido estos

```
git config --global user.name "you name" = añade el nombre para guardarlo
git config --global user.email "you email" =añade el correo al repositorio
```

4. Para poder mirar en la terminal que ramas existen o los cambios realizados.

```
git branch -a = para ver las otras ramas del repositorio
git fetch = que archivos hay en el repositorios sin subir
git reflog = muestra donde se hacen los cambios
```

5. Para eliminar ramas.

```
git branch -D nombre de la rama = elimina ramas del pc
git branch origin -d nombre de la rama  = elimina ramas del github
```

6. Para guardar cambios de commit eliminados.

```
git reset --soft = guarda los cambios anteriores cuando se eliminan commit
```

7. Para llamar cambios realizados.

```
git pull origin main = trae esos cambios sin subir
```
