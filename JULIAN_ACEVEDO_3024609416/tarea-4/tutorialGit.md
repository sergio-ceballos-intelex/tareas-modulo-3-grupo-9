# Inicialización, Agregado y Subida de Archivos a GitHub con Git

Versionar archivos en un repositorio es indispensable dado que mantiene un registro detallado de todos los cambios realizados en los archivos,
permitiendo ver qué se cambió, cuándo y por quién.

Además de que facilita el proceso de revisión de código, permitiendo a los equipos discutir y mejorar las propuestas de cambios antes de fusionarlas.

Este tutorial te servirá como guía del importante proceso que es iniciar, agregar y subir archivos a Github.

## Primer paso: inicializar git

No podemos usar Git en nuestro proyecto si no lo inicializamos primero con el comando `git init`.

Por lo tanto, después de crear el repositorio en GitHub, abro mi proyecto en mi editor VSCode, voy al terminal y tecleo el comando `git init` para inicializarlo.

> Cuando ejecutes este comando en tu terminal, verás algunos cambios en color en tu proyecto.

## Segundo paso: añadir proyecto

Añadir el proyecto al staging area ayuda a que Git haga un seguimiento de tu proyecto con los cambios que has hecho.

Para añadir tu proyecto al staging area, ejecuta el comando `git add .` . Cuando ejecutes este comando, verás que el símbolo `U` cambia automáticamente a `A`.
Esto significa que tus archivos han sido añadidos al staging area y están siendo seguidos por Git, esperando a que sean confirmados.

## Tercer paso: guardar cambios

Al ejecutar el comando `git commit` guardas esta etapa en particular y los cambios en tu proyecto de forma permanente en el repositorio de Git. Y aunque hagas más cambios en tu proyecto en el futuro y los confirmes, esta confirmación en particular que realizaste ahora se guardara en el repositorio de Git y tendrás acceso a ella en cualquier momento.

Así que después de haber añadido tu proyecto al staging area, lo siguiente que tendrás que hacer es confirmarlo usando el comando `git commit –m “first commit”`.

> Cuando ejecutes este comando, deberías notar que el símbolo `A` ya no aparece y tu proyecto se ve de nuevo como esperabas.

## Cuarto paso: cargar a Github

Cargar tu proyecto en GitHub sirve para evitar que tu proyecto se corrompa o se pierda en el almacenamiento local. También te permite acceder al repositorio de GitHub libremente desde cualquier lugar y cualquier ordenador (no necesariamente tu ordenador personal).

Para cargar tu proyecto al repositorio de GitHub, tendrás que añadir el repositorio remoto a GitHub que creaste al principio.

Para hacer esto, usarás el comando `git remote add origin (nombre del repositorio)`.

> Si no estás seguro/a de cuál es la rama en la que estás trabajando, utiliza el comando `git branch`. Si muestra la rama `master`, cambiaremos a la rama `main` ejecutando el comando `git branch –M main`.

## Quinto paso: guardar los cambios

Después de añadir el repositorio remoto donde quieres subir tu proyecto y cambiar la rama a `main`, tendrás que cargar tu proyecto en GitHub.

Para conseguir esto, ejecuta el comando `git push –u origin main` y espera a que se cargue completamente.

> Una vez hecho esto, ve al repositorio de Git que creaste en GitHub y actualiza la página. Verás que todos tus proyectos del repositorio local se han subido al repositorio de GitHub.

### Para profundizar en este tema puedes visitar los siguientes sitios de interés:

- [Tutorial de GIT Push y Pull](https://www.datacamp.com/es/tutorial/git-push-pull?utm_source=google&utm_medium=paid_search&utm_campaignid=20616617505&utm_adgroupid=154290357837&utm_device=c&utm_keyword=&utm_matchtype=&utm_network=g&utm_adpostion=&utm_creative=678190359261&utm_targetid=aud-517318242147:dsa-2220216603107&utm_loc_interest_ms=&utm_loc_physical_ms=9198551&utm_content=&utm_campaign=231025_1-sea~dsa~tofu_2-b2c_3-es-lang_4-prw_5-na_6-na_7-le_8-pdsh-go_9-nb-s_10-na_11-na-june24&gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrb3joV03o3TufRFP9EIqV4ChICnpI8h-dG1VSn2C4QGw63MQruKUlZhoCNzQQAvD_BwE)
- [Comandos Básicos de GIT](https://www.freecodecamp.org/espanol/news/comandos-basicos-de-git-como-usar-git-en-un-proyecto-real/)

### Conclusión

Con esta corta guía pudiste poner en practica los conceptos básicos como el `git init` , `git add .`, `git commit` y `git push` entre otros, para la manipulación de archivos desde tu editor de código hacia la plataforma GitHub, practicando constantemente estos pasos lograras consolidarte y ser mas fluido en tu programación además de que estarás desarrollando habilidades necesarias parra trabajar en un proyecto en equipo.
