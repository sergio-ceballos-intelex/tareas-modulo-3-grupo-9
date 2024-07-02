# Tutorial de Inicialización, Agregado y Subida de Archivos a GitHub con Git

Versionar archivos en un repositorio, especialmente utilizando sistemas de control de versiones como Git, ofrece una serie de beneficios muy importantes, como:

1. **Historial completo:** Cada cambio realizado en los archivos queda registrado con detalles precisos, inlcuyendo quién realizó el cambio, cuándo se hizo y qué exactamente se modificó. Esto proporciona un historial completo y auditable del desarrollo del proyecto.
2. **Control de versiones:** Permite mantener y gestionar múltiples versiones de los archivos. Esto es fundamental para poder revertir cambios si algo sale mal o para regresar a una version anterior que funcione correctamente.
3. **Colaboración efectiva:** Facilita el trabajo en equipo al permitir que múltiples desarrolladores trabajen simultáneamente en los mismos archivos sin temor a sobreescribir el trabajo de los demas, por medio de las ramas.

Además de lo anterior, también se facilita la implementación continua, facilita la resolución de conflictos, se documenta de forma transparente. Todo lo anterior promueve las buenas prácticas de desarrollo de software y asegura la estabilidad y la calidad del producto final.


## Paso a paso como iniciar un repositorio git

Para inicializar un repositorio Git localmente en tu computadora, sigue estos pasos:

1. **Abre tu terminal o línea de comandos:**
	- En *Windows*, puedes usar Command Prompt o PowerShell.
	- En _macOS_ o *Linux*, puedes usar Terminal.
2. **Navega al directorio donde deseas inicializar el repositorio:**
	Utiliza el comando '*cd*' (change directory) seguido de la ruta al directorio donde quieres crear el repositorio Git. Por ejemplo:
	> cd documentos/programacion/kambcode
3. **Inicializa el repositorio Git:**
Una vez en el directorio correcto, ejecuta el siguiente comando para inicializar el repositorio Git:
	> git init

	Esto creará un nuevo subdirectorio oculto llamado '**.git**' en el directorio actual. Este subdirectorio es donde Git almacena toda la información necesaria para el repositorio, incluidos los metadatos y la base de datos de objetos.

Después de estos pasos, se ha inicializado correctamente un repositorio Git localmente en el pc. Se puede comenzar a agregar archivos, y crear el codigo principal. Para cargar el código y modificaciones al repositiorio online, se realizan los siguientes pasos:

4. **Revisa el estado de los archivos:** 
Abre tu terminal y navega hasta el directorio de tu repositorio Git local utilizando el siguiente comando:
 > git status

Este comando te mostrará los archivos modificados (en rojo) y los archivos que están listos para ser confirmados (en verde, en el staging area).

5. **Agregar archivos al staging area:**
- Para agregar un archivo especifico al staging area, usa el comando:
>git add nombre_del_archivo
- Para agregar todos los archivos modificados y nuevos al staging area, utiliza el comando:
> git add .

El punto (' . ') indica que se deben agregar todos los archivos en el directorio actual y sus subdirectorios.

6. **Realizar el commit:**
Una vez con los cambios en el stagin area, realiza un commit para confirmar esos cambios en tu repositorio local. Utiliza el siguiente comando:
>git commit -m "*mensaje del commit"*

El mensaje del commit debe explicar los cambios realizados en este commit. Este mensaje es útil para ti y para otros colaboradores del proyecto para entender los cambios que se introducen.

7. **Vincular repositorio local con repositorio remoto:**
Para vincular un repositorio Git local con un repositorio remoto en Github (u otro servicio de alojamiento como GitLab o Bitbucket), sigue estos pasos:
- Primero, crear un repositorio vacío en GitHub. Esto proporcionará la URL remota que se necesita para vincular el repositorio local con el remoto.
- Utiliza el comando '**git remote add**' seguido de la URL del repositorio remoto en GitHub. La convención común es llamar al origen remoto '**origin**':
>git remote add origin URL_del_repositorio_remoto

- verificar la configuración del origen remoto:
>git remote -v

8. **Subir repositorio local al repositorio remoto:**
Luego de configurar el origen remoto, puedes subir tus commits locales al repositorio remoto en GitHub utilizando 'git push':
>git push -u origin nombre_de_tu_rama_principal

Se reemplaza '_nombre_de_tu_rama_principal_' con el nombre de la rama principal de tu repositorio (como 'main', 'master', u otro nombre que hayas elegido).

- El parámetro '-u' establece la rama remota como la rama de seguimiento predeterminada, lo que significa que en el futuro puedes simplemente usar '**git push**' sin especificar la rama.

Con los pasos anteriores, se ha vinculado con éxito el repositorio Git local con un repositorio remoto en GitHub y has subdio tus cambios locales al repositorio remoto.

En el caso de subir un repositorio a una rama especifica, se debe ahcer lo siguiente:
1. **Clonar el repositorio:**
>git clone <url_del_repositorio>
>cd <nombre_del_repositorio>

2. **Crear una nueva rama:**
Crear una nueva rama desde la principal (por ejemplo, '*main*' o '*master*'), utiliza '**git checkout -b**' seguido del nombre de la nueva rama:
>git checkout -b nombre_de_la_rama

Si la rama ya existe y solo necesitas cambiar a esa rama:
>git checkout nombre_de_la_rama

Se realizan modificaciones, se confirman por medio de git add y git commit y luego se hace push por medio del siguiente comando:
>git push -u origin nombre_de_la_rama

Después de configurar el seguimiento principalm puedes simplemente usar '**git push**' para subir futuros cambios:
>gut push
3. Finalmente crear una solucitud **pull request** desde la interfaz web de GitHub.

Si requieres mas información puedes dirigirte al siguiente link:
[Más información](https://docs.github.com/en/get-started/start-your-journey)

En conclusión, usar el versionamiento de repositorios es una herramienta que ayuda a tener organizado un proyecto, a recuperar proeyctos en caso de errores y a poder sobre todo trabajar en equipo y poder finalizar un proyecto en menor tiempo, los inivitamos a usar esta importante herramienta. 