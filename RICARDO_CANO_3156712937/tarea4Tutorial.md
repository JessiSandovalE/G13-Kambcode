# Inicialización, Agregado y Subida de Archivos a GitHub con Git


## Introducción

<p>Git es un sistema de control de versiones que permite a los desarrolladores llevar un registro de los cambios en sus proyectos y colaborar con otros de manera eficiente. GitHub es una plataforma que permite alojar repositorios Git en la nube, facilitando la colaboración y el acceso a proyectos. En este tutorial, aprenderás a inicializar un repositorio Git en tu máquina local, agregar archivos, realizar commits y subir tus cambios a GitHub.</p>

---------

### Requisitos Previos

<p> Tener Git instalado en tu máquina. Puedes descargarlo desde aquí.
Tener una cuenta en GitHub. Si no tienes una, puedes crearla aquí.
Pasos a seguir </p>


#### 1. Inicializar un Repositorio 

<p>Para comenzar, abre tu terminal (o línea de comandos) y navega hasta el directorio donde deseas crear tu proyecto. Luego, utiliza el siguiente comando para inicializar un nuevo repositorio Git:</p>

------

```
    git init nombre-del-repositorio

```

------

**Esto creará un nuevo directorio llamado nombre-del-repositorio y lo inicializará como un repositorio Git.**

### 2. Agregar Archivos

<p>Una vez que hayas creado tu repositorio, puedes agregar archivos a él. Primero, crea un archivo simple, por ejemplo, archivo.txt, y agrega algo de contenido. Luego, utiliza el siguiente comando para agregar el archivo al área de preparación (staging area):</p>


--------

```
    git add archivo.txt

```
--------

**Si deseas agregar todos los archivos del directorio, puedes usar:**

--------

```
    git add .

```
--------

### 3. Realizar un Commit

<p>Después de agregar los archivos, es hora de realizar un commit. Un commit es un punto de control en tu proyecto. Para hacer un commit, utiliza el siguiente comando:</p>

------

```
git commit -m "Mensaje descriptivo del commit"

```
-------

**Asegúrate de reemplazar "Mensaje descriptivo del commit" con un mensaje que explique los cambios que realizaste.**

-------

### 4. Vincular tu Repositorio Local con GitHub

<p>Ahora que tienes un repositorio local, necesitas vincularlo con un repositorio remoto en GitHub. Primero, crea un nuevo repositorio en GitHub (sin README, .gitignore o licencia). Luego, copia la URL del repositorio y ejecuta el siguiente comando en tu terminal:</p>

--------

```
git remote add origin <URL_del_repositorio_en_GitHub>
Reemplaza <URL_del_repositorio_en_GitHub> con la URL que copiaste.

```
-----------

### 5. Subir los Cambios a GitHub

<p>Finalmente, para subir tus cambios al repositorio en GitHub, utiliza el siguiente comando:</p>

--------

```
git push -u origin master

```

---------

**Esto subirá tus commits al repositorio remoto en GitHub. Si estás trabajando en una rama diferente, asegúrate de reemplazar master con el nombre de tu rama actual.**

---------

## Ejemplo Práctico

A continuación, se presenta un ejemplo práctico de los pasos anteriores:

**Inicializa el repositorio:**

---------

```
git init mi-proyecto

```

---------


**Navega al directorio:**

------

```
cd mi-proyecto

```

------

**Crea un archivo:**

-----

```
echo "Hola, mundo!" > archivo.txt

```
------

**Agrega el archivo:**

------

```
git add archivo.txt

```
------

**Realiza un commit:**

-------

```
git commit -m "Agregar archivo de saludo"

```
-------

**Vincula el repositorio remoto:**

-------

```
git remote add origin https://github.com/tu-usuario/mi-proyecto.git

```
-------

**Sube los cambios:**

-------

```
git push -u origin master
```

-------

-------
# Conclusión

<p>En este tutorial, aprendiste a inicializar un repositorio Git, agregar archivos, realizar commits y subir tus cambios a GitHub. Estos son pasos fundamentales para gestionar tus proyectos de manera eficiente. Te animo a practicar estos comandos por tu cuenta y explorar más sobre las capacidades de Git y GitHub.</p>

----------