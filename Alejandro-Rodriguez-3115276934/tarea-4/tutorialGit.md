# "Inicialización, Agregado y Subida de Archivos a GitHub con Git"

_En este tutorial aprenderas como inicializar tus repositorios y hacer uso de esta gran herramienta que es git y github._

![imagen](./imgGitHub.jpg)

1. Descargar e instalar Git (https://git-scm.com/download/win) nuestra herramienta de control de versiones
2. Crea una cuenta en GitHub para poder tener acceso a los repositorios (https://github.com/)
3. Una vez instalado Git, en el buscador de aplicaciones de nuestro sistema operativo buscaremos una aplicación llamada Git Bash, esta aplicación es la consola de Git que ya tendremos instalada en nuestra maquina para empezar a trabajar con Git.
4. Para crear un nuevo repositorio nos vamos a la pagina de GitHub y haremos clic en cualquiera de los botones que dicen crear un nuevo repositorio.
5. Nombre del repositorio El nombre del repositorio es por supuesto el identificador de nuestro repositorio, puede ser cualquier aunque es buena practica ponerle un nombre alusivo al proyecto.
6. Descripción Este campo es pura información descriptiva de nuestro proyecto, para que tanto nosotros mas adelante como otras personas puedan ver una descripción sobre de que trata el proyecto
7. Luego podremos indicarle a GitHub si este proyecto va a ser privado, es decir, que solo lo podremos visualizar nosotros mismos o si es publico y de visualización libre.
Luego podremos escoger si queremos agregar un archivo README que es una excelente practica, este archivo funciona a manera de resumen de nuestro repositorio y por ejemplo si tenemos algún tipo de proyecto que requiere de instrucciones de despliegue en local.
8. Nos iremos a la consola bash y nos ubicaremos en la ruta deseada para copiar nuestro proyecto usando el comando cd (ruta deseada) y ejecutaremos el siguiente comando
$ git clone (URL)
9. Creamos un nuevo archivo.
10. Cuando trabajamos en nuestra versión local de nuestro código cuando clonamos un repositorio, todo el tiempo estamos trabajando en nuestro working directory, aquí los cambios que hagamos no se van a ver reflejados en el repositorio y no tendremos modificaciones en el tampoco. Luego, si queremos subir nuestros cambios a nuestro repositorio, debemos pasarlos primero al staging area. Miremos los comandos mas utilizados en este area.

---

**git status** Este comando nos indica el estado actual de nuestro trabajo en local, cuales archivos estamos siguiendo y cuales hemos modificado. Nos da información general sobre nuestro status
**git add {param}** Este comando nos sirve para pasar cambios al staging area, lo utilizaremos con un parametro, este puede ser la ruta relativa de un archivo, o si queremos agregar todos los cambios en un solo comando usamos **git add .**

**git commit** Este comando es uno de los principales, nos sirve para una vez tenemos en el staging area cambios que queremos subir a nuestro repositorio, lo utilizaremos y se generara un nuevo commit, los commit son puntos donde cambia nuestro código, estos nos sirven como puntos de retorno si se requiere en un futuro, es importante colocarle un mensaje a nuestro commit para identificar que se hizo de cambios en el commit para trazabilidad, este se agrega con la opción -m en el comando de la siguiente manera **git commit -m "Se realizan x cambios"**
En estos momentos en nuestra versión local de git ya tenemos el cambio subido pero aún no se vé reflejado en GitHub, GitHub es nuestro repositorio remoto, subamos entonces los cambios a nuestro repositorio remoto haciendo uso del comando git push, este comando maneja la siguiente estructura **git push {remote origin name}**

Utilicemos el comando **git checkout -b {nombreNuevaRama}** para crear una nueva rama e ingresar en ella inmediatamente.

## Recuerda paso a paso para cada tarea

|paso 1|paso2|paso3|paso4|paso5|paso6|
|------|-----|-----|-----|-----|-----|
|ir a main, hacer pull|crear nueva rama|crear nueva carpeta # corresponda|crear archivos|git add./git commit.../git push|ir a crear PR|
