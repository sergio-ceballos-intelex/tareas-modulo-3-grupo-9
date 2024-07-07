# Inicialización, Agregado y Subida de Archivos a GitHub con Git

 Utilizar sistemas de control de **versiones** como **Git** y plataformas de alojamiento de **repositorios como GitHub** te permite mantener un historial completo de los cambios realizados en tu código, colaborar con otros desarrolladores de manera eficiente y revertir cambios si es necesario. 

## Inicializar un Repositorio Git en tu Máquina Local.

*Para comenzar a versionar tu código con Git, necesitas inicializar un repositorio en tu máquina local. A continuación, se explican los pasos necesarios para realizar esta tarea utilizando el comando **git init.***

### paso 1 

- Abrir la Terminal o Línea de Comandos

- Dependiendo del sistema operativo que estés utilizando, abre la terminal o la línea de comandos:

- En Windows: ***puedes abrir en el sisteme la aplicacion del sistema de su computador cual tenga en configuracion*** por ejemplo ***"PowerShell"***

### paso 2 

- Navegar en el proyecto guardado en la carpeta del directorio del computador donde lo haya guardado utilizando el comando ***cd***.

###  paso 3

- Una vez que estés en el directorio correcto, ejecuta el siguiente comando para inicializar un nuevo repositorio Git: ***git init*** en ese momento es cuando se inicializa el repositorio git en la carpeta seleccionada.

# Devemos agregar archivos al aerea de preparacion con git.

- Una vez que has inicializado un repositorio Git en tu máquina local, el siguiente paso es agregar archivos al área de preparación (staging area). Esto significa que le estás diciendo a Git que incluya esos archivos en el próximo commit. A continuación, se explican los pasos necesarios para realizar esta tarea utilizando el comando ***git add***.

### paso 1

- crear y modificar archivos al proyecto designado.

### paso 2

- se debe verificar el estado del repositorio con el siguiente comando ***git status*** antes de subir los cambios.
- Este comando muestra una lista de los archivos que han sido modificados, así como aquellos que aún no están en el área de preparación. 

### paso 3 Agregar Archivos al Área de Preparación.

- Para agregar archivos específicos al área de preparación, usa el comando ***git add*** seguido del nombre del archivo. por ejemplo ***"mis archivos de git"***, esto subira los cambios del archivo y estara preparado para el siguiente comando. 

### paso 4 verificacion

- para verificar los cambios se debe utilizar el comando ***git status*** para que nos muestere en pantalla que si hicieron adecuadamente los cambios.

# Para realizar un commit de los archivos agregados utilizando el comando git commit, sigue estos pasos.

### paso 1 

- Realiza el commit: Una vez que los archivos están en el área de preparación, puedes realizar un commit. El comando básico para hacer un commit es: ***git commit -m "mensaje de descripcion.***

- Aquí, **"Mensaje descriptivo del commit"** debe ser un mensaje que describa claramente los cambios que has hecho. Es importante que este mensaje sea informativo para que tú y otros desarrolladores puedan entender fácilmente qué cambios se han realizado.

### paso 2

- se deben verificar cambios o el estado del repositorio con **git status** o **git log**

# para poder vincular el repositorio creado localmente con un repositorio remoto en GitHub

- Para vincular tu repositorio local con un repositorio remoto en GitHub, sigue estos pasos:

### paso 1

- Crea un repositorio en GitHub: Ve a GitHub y crea un nuevo repositorio. Puedes hacerlo haciendo clic en el botón "New" en tu página de repositorios.
Proporciona un nombre para tu repositorio y configura las opciones como desees (público o privado, con o sin README inicial, etc.).
Haz clic en "Create repository". 

### paso 2 

depues de este paso de crear su repositorio **Git-Hub** habran una instrucciones para que realizes el paso apaso conun a URL <URL_del_repositorio_en_GitHub>.

### paso 3 vincula tu repositorio local con repositorio remoto.

- Abre tu terminal y navega al directorio de tu repositorio local, usa el siguiente comando d Git-Hub 
git remote add origin <URL_del_repositorio_en_GitHub>. remplaza la URL con el reposotorio de tu archivo o el nombre del archivo a trabajar.

### paso 4 verificar vinculacion

- con el siguiente comnando puede verificar la vinculacion remoto **git remote -v**.

# para poder los cambios del repositorio con el comando push.

### paso 1

- Para subir los cambios de tu repositorio local a GitHub utilizando el comando **git push -u origin master**.
- **git push**: Este comando se usa para subir o empujar tus cambios locales a un repositorio remoto.
- Aquí, origin es el nombre del repositorio remoto (puedes tener varios repositorios remotos vinculados, pero origin es el alias predeterminado) y master es el nombre de la rama principal. En algunos casos, la rama principal puede llamarse main, dependiendo de la configuración inicial del repositorio.

# CONCLUCION:

- La importancia de realizar ejercicios y practica de git ya que solo se puede llegar a un buen conocimmiento practicando personalmente fuera de una herramientas tecnologicas son muy practica y nos ayudan pero para poder llegar a un buen potencial del git devemos practicar sin las ayudas tecnoogica ellas nos podra ayudar mas adelante a verificar y complementar pero la frase es muy verdder la practica hace al maestro.














