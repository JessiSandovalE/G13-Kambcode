# Tutorial de Markdown

## ¿Qué es Markdown?
Markdown es un lenguaje de marcado ligero que se utiliza para dar formato a texto plano. Se utiliza para crear documentos, artículos, notas y otros contenidos de texto de manera simple y fácil de leer.
### Se utiliza para:
- Crear documentos de texto con formato
- Escribir artículos y publicaciones en blogs
- Redactar notas y apuntes
- Generar contenido para sitios web y aplicaciones
- Crear documentación técnica
### Características principales:
- Fácil de aprender y utilizar
- Texto plano, sin necesidad de editar código HTML
- Compatible con la mayoría de plataformas y dispositivos
- Permite agregar formato básico (títulos, negrita, cursiva, listas, etc.)
- Puede incluir enlaces, imágenes y código
### Se utiliza en:
- GitHub y otros repositorios de código
- Blogs y plataformas de publicación
- Documentación técnica y manual de usuario
- Notas y apuntes personales
- Sitios web y aplicaciones móviles

## Utilizando Markdown en GitHub
**1. Leerme (README.md)** 
El archivo README.md es el primer archivo que se muestra al entrar en un repositorio.
Se utiliza para describir el proyecto, sus características y cómo instalarlo.
Se escribe en Markdown para dar formato y hacerlo más legible.

**2. Documentación de proyectos**
La documentación de proyectos se puede escribir en Markdown.
Se utiliza para explicar cómo funciona el proyecto, su arquitectura y cómo contribuir.

**3. Issues y comentarios**
Los issues (problemas o bugs) y comentarios se pueden escribir en Markdown.
Se utiliza para dar formato y hacer más claro el problema o la solución.

**4. Wiki**
La wiki de un proyecto se puede escribir en Markdown.
Se utiliza para documentar la historia del proyecto, sus decisiones de diseño y más.

**5. Comentarios en el código**
Los comentarios en el código también se pueden escribir en Markdown.
Se utiliza para explicar el código y hacerlo más comprensible.

### Sintaxis Markdown en GitHub
- Títulos: # Título, ## Subtítulo, ### Subtítulo secundario. (Son similares a los titulos de HTML, se pueden usar hasta 6 #)

### Énfasis
- **Texto en negrita**: para que el texto aparezca en negrita se debe agregar 2 asteriscos (**) tanto al inicio como al final del texto a poner en negrita.
- *Texto en cursiva:* Para que el texto aparezca en cursiva, agregar 1 asterisco ( * ) tanto al inicio como al final del texto.
- ***Texto en negrita y cursiva: Para que el texto aparezca en negrita y cursiva, agregar 3 asteriscos ( * * * ) tanto al inicio como al final del texto.***

### Listas
- Elemento 1: Para crear una lista no ordenada, agregar un guión (-) al inicio de cada elemento, tambien se pueden utilizar los signos * y +.
1. Elemento 1: Para crear una lista ordenada, agregar un número seguido de un punto (1.) al inicio de cada elemento.

#### Ejemplo:
- Elemento 1
- Elemento 2
- Elemento 3
1. Elemento 1
2. Elemento 2
3. Elemento 3

### Enlaces
- **[ Texto del enlace ]( U R L ):** Para crear un enlace, agregar el texto del enlace entre corchetes ([ ]) y la URL entre paréntesis (()).
- **[Texto del enlace]( U R L "Título del enlace"):** Para crear un enlace con título, agregar el título entre comillas (") después de la URL.

#### URLs y direcciones de correo electrónico
Para convertir rápidamente una URL o dirección de correo electrónico en un enlace, enciérrala entre corchetes angulares (< y >).
Ejemplos:
<https://www.markdownguide.org>: Crea un enlace a la URL especificada.
<fake@example.com>: Crea un enlace a la dirección de correo electrónico especificada.

### Imágenes
- **![Texto alternativo](URL de la imagen):** Para crear una imagen, agregar el texto alternativo entre corchetes ([]) y la URL de la imagen entre paréntesis (()).
- **![Texto alternativo](URL de la imagen "Título de la imagen"):** Para crear una imagen con título, agregar el título entre comillas (") después de la URL.

### Código
Código: Para crear código en línea, agregar el código entre comillas invertidas ( ` ).

### Tablas


*   `| Título 1 | Título 2 | Título 3 |`: Para crear una tabla, agregar los títulos entre barras verticales (`|`).
*   `|----------|----------|----------|`: Para crear un separador de encabezados, agregar guiones (`-`) entre barras verticales (`|`).
*   `| Celda 1  | Celda 2  | Celda 3  |`: Para crear una fila de la tabla, agregar los datos entre barras verticales (`|`).

