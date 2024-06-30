
## Inicialización, Agregado y Subida de Archivos a GitHub con Git

#### Versionar los archivos mediante el uso de un respositorio es una estrategia importante en los procesos de organizacion colaboracion y seguridad en el desarrollo de proyectos. dentro de los puntos mas destados podemos nombrar los siguientes:

- *Control de cambios:*  Se puede rastrear y revertir cambios específicos.
- *Colaboracion:* Facilita el trabajo en equipo sin conflictos.
- *Historial:* Mantiene un registro de todas las modificaciones.
- *Seguridad:* Protege contra la pérdida de datos o errores.

#### Pasos para incializar un repositorio GIT en mi maquina local utilizando el comnado git init y posterior subida a github

1. Parados en la carpeta que deseamos convertir en nuestro respositorio, a traves de la terminal, puede ser en bash, escribimos el codigo git init.

2. Posteriormente damos git status que nos permite observar que la rama master creada.

3. Si comenzamos a trabajar dentro de la carpeta creada, podemos observar en las ayudas de visual, la serie de cambios realizados.

4. Ahora aplicamos el comando git add .  el cual confirma los cambios y quedan en cambios stage

5. Finalmente damos el comando git commit -m "adicionar comentarios" y este permite que se compacten todos los cambios que hemos realizado.

6. Ahora debemos crear en github el repositorio donde va a quedar nuestro repositorio local, para esto nos dirigimos a github y damos click en el boton new.

7. Resgistramos el nombre que deseamos para nuestro repositorio remoto.

8. Hacemos un breve descripcion del mismo.

9. Seleccionamos publico o privado.

10. Finalmente damos click en el boton create repository.

11. Ahora vinculamos nuestro repo local al repo remoto mediane el registro en la terminal de la direccion enviada por github:  git remote add origin https:// github.com/ nombre de la direccion. Ejemplo:
git remote add origin https://github.com/waltercastro171163/simulacro.git

12. Dado que nuestro respositorio local es master, debemos pasarlo a main con el comando git branch -M main que registramos en nuestra terminal.

13. Finalmente registramos en nuestra terminal el git push -u origin main para enviar nuestro repositorio local al repositorio remoto.

14. Para la nuevos cambios que se hagan en nuestro repositorio local y posterior envio al repositorio remoto, se debera registrar los seguientes pasos:
    * git add .
    * git commit -m "comentarios"
    * git push

Se recominda leer los mensajes de error o alerta, enviados por la terminal en los procesos, para realizar los ajustes del caso. 

