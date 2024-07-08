## Tutorial sobre Inicialización, Agregado y Subida de Archivos a GitHub con Git y Markdown
Este proceso es fundamental para colaborar en proyectos de desarrollo de software o para gestionar tus propios proyectos de manera eficiente.

**Paso 1: Inicialización de un Repositorio de GitHub**
 1. **Crear un Repositorio de GitHub**
    * Ingresa a tu cuenta GitHub.
    * En la esquina superior derecha, haz clic en el signo más ("+") y selecciona **"Nuevo repositorio**.
    * Completa el nombre del repositori, una descripción opcional, y configura las opciones según tus preferencia (publica o privado).
    * Haz clic en **"crear repositorio"**.
  2. **Clonar el Repositorio en tu Computadora:**
    * Abre tu terminal (Git Bash en Windows, Terminal en macOS/Linux).
    * Clona el repositorio utilizando el comando **"git clone"** seguido de la URL del repositorio que copiaste desde GitHub:*git clone https://github.com/tu-usuario/tu-repositorio.git*
    * Esto creará una copia local del repositorio en tu máquina.
**Paso 2:Agregar y Modificar Archivos**
  1. **Crear o Modificar Archivos:**
    * Crea archivos nuevos o modifica los existentes en tu repositorio local utilizando tu editor de código preferido.
  2. **Agregar Archivos al Área de Staging:**
    * Para preparar archivos nuevos o modificados para ser incluidos en el próximo commit, utiliza **"git add"** seguido del nombre del archivo o el punto (".") para agregar todos los archivos modificados:
![alt text](image.png)
**Paso 3: Realizar un Commit de los Cambios**
  1. **Confirmar los Cambios con un Commit:**
    * Después de agregar los archivos al área de staging, realiza un commit para guardar los cambios en tu repositorio local:
      **git commit -m "Mensaje descriptivo del commit"**
    * El mensaje descriptivo debe explicar brevemente los cambios realizados en este commit
**Paso 4: Subir los Cambios a GitHub**
  1. **Subir los Cambios al Repositorio Remoto:**
    * Utiliza git push para subir los cambios al repositorio remoto en GitHub:
      **git push origin main**
    * main es el nombre de la rama principal en GitHub. Si tu rama principal se llama de otra manera (como master), cámbialo en el comando.
**Paso 5: Documentación con Markdown**
  1. **Crear Archivos README.md:**
    * Crea un archivo README.md en la raíz de tu proyecto utilizando Markdown para documentar tu proyecto.
    * Markdown te permite formatear texto de manera sencilla con títulos, listas, enlaces, imágenes, y más.
  2. **Subir el Archivo README.md:**
    * Agrega y sube el archivo README.md como cualquier otro archivo:
       * git add README.md
       * git commit -m "Agrega archivo README.md"
       * git push origin main