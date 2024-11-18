# Inicialización, Agregado y Subida de Archivos a GitHub con Git
## Introducción
La versionación de archivos es fundamental en el desarrollo de software y proyectos colaborativos. GitHub es una plataforma popular para alojar repositorios Git, permitiendo a los desarrolladores trabajar en equipo y mantener un registro de cambios. En este tutorial, aprenderás a inicializar un repositorio Git, agregar archivos, realizar commits y subir cambios a GitHub.
## Requisitos previos
- Instalar Git en tu máquina local
- Crear una cuenta en GitHub
### Paso 1: Inicializar un repositorio Git
Para inicializar un repositorio Git, sigue estos pasos:
1. Abre la terminal o línea de comandos en tu máquina local.
2. Navega hasta el directorio donde deseas crear el repositorio.
3. Escribe el comando git init y presiona Enter.
- **Ejemplo:**
 
`$ mkdir mi-proyecto`  
`$ cd mi-proyecto`  
`$ git init`

### Paso 2: Crear un archivo de ejemplo
Crea un archivo de ejemplo (por ejemplo, archivo.txt).

### Paso 3: Verificar el estado del repositorio
Para verificar el estado del repositorio, escribe el comando git status y presiona Enter.
- **Ejemplo:**  
 
`$ git status`  

### Paso 4: Agregar archivos al área de preparación (staging area)
Para agregar archivos al área de preparación, escribe el comando git add archivo.txt y presiona Enter.
- **Ejemplo:**  
 
`$ git add archivo.txt`  
O puedes agregar todos los archivos del directorio con:  

`$ git add . `  

### Paso 5: Realizar un commit
Para realizar un commit, escribe el comando git commit -m "Mensaje de commit" y presiona Enter.
- **Ejemplo:**

`$ git commit -m "Agregar archivo de ejemplo"`  

### Paso 6: Vincular tu repositorio local con GitHub
Para vincular tu repositorio local con GitHub, sigue estos pasos:
1. Crea un repositorio en GitHub y copia la URL.
2. Escribe el comando `git remote add origin <URL_del_repositorio_en_GitHub>` y presiona Enter.
- **Ejemplo:**
`$ git remote add origin https://github.com/tu-usuario/mi-proyecto.git`

### Paso 7: Subir cambios a GitHub
Para subir cambios a GitHub, escribe el comando `git push -u origin master` y presiona Enter.
- **Ejemplo:**

`$ git push -u origin master`  

## Conclusión
En este tutorial, aprendiste a inicializar un repositorio Git, agregar archivos, verificar el estado del repositorio, realizar commits y subir cambios a GitHub.