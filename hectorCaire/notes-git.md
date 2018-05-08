# Notas Git

A partir de aqui comienzan las notas tomadas en las sesiones de la capacitación.
___

# Git

Herramienta de versionado no centralizada

### Comandos de consola

- cd [nombre directorio] : Cambiar a directorio
- ls : Listado de contenido en un directorio
- mkdir [nombre directorio] : Crear Directorio
- touch [nombre de archivo] : Crear Archivo


# Comandos principales

| Comando | Significado |
| ------ | ------ |
| ```git init``` | Crea un repositorio vacio |
| ```git config --global user.name <"tuNombre">``` | Establece una configuración básica de tu nombre |
| ```git config --global user.name <"tuEmail">``` | Establece una configuración básica de tu email |
| ```git add -A ``` | Agrega archivos al index area |
| ```git add <"tuArchivo.txt">``` | Agrega al index area un archivo en especifico |
| ```git clone https://turepo.com``` | Clona un repositorio en tu local |
| ```git commit -m "tu mensaje aquí"``` | Cambia a la cabecera |
| ```git stauts``` | Muestra la lista de los archivos que se han cambiado |
| ```git push origin master``` | Envia los cambios realizados en la rama al repositorio remoto |
| ```git checkout -b <nombre de la rama>``` | Crea y nos posiciona en la rama dicha |
| ```git remote add upstream https://repo.com``` | Agrega un repositorio remoto |
| ```git remote -v``` | Revisa los repositorios remotos |
| ```git checkout <tu rama>``` | Cambia a la rama deseada |
| ```git pull origin master``` | Actualiza repositorio con los cambios más recientes del repositorio remoto a la rama deseada |
| ```git branch``` | Lista las ramas |
| ```git merge <rama a mezclar>``` | Mezcla, fusiona una rama con otra  |
| ```git diff --base <nombre_del_archivo,txt>``` | Muestra una lista de conflictos  |
| ```git log``` | Muestra una lista de commits  |
| ```git reset``` | Resetea el index area  |
| ```git rm <tu_archivo.txt>``` | Comando para eliminar un archivo del index  |


## Referencias

https://dillinger.io/

dillinger.io

Online Markdown Editor - Dillinger, the Last Markdown Editor ever.
Dillinger is an online cloud based HTML5 filled Markdown Editor. Sync with Dropbox, Github, Google Drive or OneDrive. Convert HTML to Markdown. 100% Open Source!
