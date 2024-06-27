# Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción
Versionar archivos en Git te brinda un control de versiones sólido, facilita la colaboración en equipo, te permite experimentar de manera segura y te proporciona una copia de seguridad de tu trabajo. Estas son solo algunas de las razones por las que Git es una herramienta esencial para el desarrollo de software. Por eso a continuación un breve tutorial de Git!.

## Pasos:

1. **Inicialización del Repositorio Local**
   - Abre una terminal o línea de comandos.
   - Navega a la carpeta donde deseas crear tu repositorio.
   - Ejecuta el siguiente comando para inicializar un repositorio Git:
     ```
     git init
     ```

2. **Agregar Archivos al Área de Preparación (Staging Area)**
   - Coloca los archivos que deseas versionar en la misma carpeta del repositorio.
   - Utiliza el siguiente comando para agregar los archivos al área de preparación:
     ```
     git add nombre_del_archivo
     ```

3. **Realizar un Commit**
   - Después de agregar los archivos, crea un commit para guardar los cambios:
     ```
     git commit -m "Mensaje descriptivo del commit"
     ```

4. **Vincular el Repositorio Local con GitHub**
   - Crea un repositorio en GitHub.
   - Copia la URL del repositorio.
   - En la terminal, ejecuta:
     ```
     git remote add origin <URL_del_repositorio_en_GitHub>
     ```

5. **Subir los Cambios a GitHub**
   - Utiliza el siguiente comando para subir tus cambios al repositorio remoto:
     ```
     git push -u origin main
     ```

## Ejemplos Prácticos
Supongamos que tienes un archivo llamado "index.html". Puedes seguir los pasos anteriores para versionarlo en tu repositorio.

## Recursos Adicionales
- [Documentación oficial de Git](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)

## Conclusión
¡Felicidades! Ahora sabes cómo inicializar, agregar y subir archivos a GitHub utilizando Git.