## *Inicialización, Agregado y Subida de Archivos a GitHub con Git*


## *Inicializacion*  
- No podemos usar nuestro proyecto si no lo inicializamos primero con el comando git init. Por lo tanto despues de crear el repositorio GitHub, abro mi proyecto en mi editor VScode, voy al terminal y tecleo comando gin init para inicializarlo.     
- Cuando ejecutes este comando en tu terminal, verás algunos cambios en color en tur proyecto. También verás un simbolo U que significa que no se está haciendo un seguimiento de tus archivos. Igualmente cuando abras la carpeta donde tu proyecto está guardado, verás que hay otra carpeta con el nombre .git que se crea automáticamente después de ejecutar el comando git init.
- El comando **git init** permite crear de manera increíblemente sencilla nuevos proyectos con control de versiones. Con Git, no es necesario que crees un repositorio, importes los archivos ni extraigas una copia de trabajo. Además, Git no precisa de la existencia previa de ningún servidor o privilegios de administrador. Basta con que utilices el comando cd en el subdirectorio de tu proyecto y ejecutes git init para que tengas un repositorio de Git totalmente funcional.  
  
>                                git init
---   

## *Agregado y Subida de Archivos*    

- Para añadir tu proyecto al staging area, ejecuta el comando **git add .**  . Cuando ejecutes este comando, verás que el símbolo U cambia automáticamente a A. Esto significa que tus archivos han sido añadidos al staging area y están siendo seguidos por Git, esperando a que sean confirmados.  
- El git add comando agrega un cambio en el directorio de trabajo al área de preparación. Le indica a Git que desea incluir actualizaciones a un archivo en particular en la próxima confirmación. Sin embargo, git add en realidad no afecta al repositorio de ninguna manera significativa: los cambios no se registran hasta que ejecuta confirmación de git.  Junto con estos comandos, también necesitarás estado de git para ver el estado del directorio de trabajo y el área de ensayo.
- La función principal del git add comando es promover los cambios pendientes en el directorio de trabajo al git staging área. El área de preparación es una de las características más exclusivas de Git y puede llevar un tiempo entenderla si viene de un entorno SVN (o incluso Mercurial). Es útil pensar en ella como un búfer entre el directorio de trabajo y el historial del proyecto. El área de preparación se considera una de las "tres árboles" de Git, junto con el directorio de trabajo y el historial de confirmaciones.

>                                git add 

## *Git commit*
- El comando **git commit** guardará todos los cambios hechos en la zona de montaje o área de preparación (staging area), junto con una breve descripción del usuario, en un "commit" al repositorio local.
- Los commits están en el corazón del uso de Git. Puedes pensar en un commit como una captura de tu proyecto, donde se crea una nueva versión de ese proyecto en el repositorio actual. Dos características importantes de los commits son: 
    - puedes recordar los cambios a los que se les hizo commits en una fecha posterior, o revertir el proyecto a esa versión (ver Git checkout)
    - si varios commits editan diferentes partes del proyecto, no se sobrescribirán entre sí aunque los autores de los commits no se conozcan entre sí. Este es uno de los beneficios de usar Git sobre una herramienta como Dropbox o Google Drive.

#### La opcion -m
- La opción más común utilizada con git commit es la opción **-m**. La -m significa mensaje. Cuando se llama a git commit, es necesario incluir un mensaje. El mensaje debe ser una breve descripción de los cambios a los que se les está realizando commit. El mensaje debe estar al final del comando y debe estar envuelto entre comillas **" "**.






