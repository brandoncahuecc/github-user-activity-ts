***
# GitHub User Activity - `TypeScript`
> Bitacora de actividad de los usuarios registrados en GitHub.
> Proyecto propuesto por Roadmap.sh
> El enunciado puedes visualizarlo en: [Roadmap.sh](https://roadmap.sh/projects/github-user-activity)

## Descripción general
> Proyecto de simulación de consola de bitacora de actividad realizada por usuario de GitHub. Elaborado con `TypeScript` el cual se conecta a un web service propio de GitHub que provee toda la bitacora, que posterior se manipula y se detalla la información para ser mostrada al usuario.

## Features

> La unica función que provee este proyecto es mostrar la bitacora de actividad de un usuario en GitHub

## Estructura de proyecto

> El proyecto se organizó de la siguiente manera:

```
- src
    - index.js
        - main()
            - answer()
    - api
        - GithubApi
            - getUserActivity()
    - models
        - Activity
        - Actor
        - Author
        - Commentary
        - Commit
        - Issue
        - Label
        - Payload
        - Reactions
        - Repo
        - SubIssuesSummary
        - ResponseActivity
        - CommitResponse
        - IssuesResponse
        - CommentResponse
    -services
        - GithubService
            - getUserActivity()
```

## Instalación

### Node JS
> Tener cualquier versión de node js para la ejecución del código fuente

### Clonar repositorio
> `git clone hhttps://github.com/brandoncahuecc/github-user-activity-ts`

### Instalar dependencias

> Ejecutar el siguiente commando en nuestra terminal desde la carpeta raíz (la que contiene el proyecto)
>
> `npm i` | `npm install`

### Ejecutar proyecto
> 1. Abrir una terminal sobre la carpeta contenedora del proyecto
> 2. Ejecutar el siguiente comando para el inicio del proyecto
> 
> `npm run dev`
>
> 3. Al cargar el programa se te solicita ingresar el nombre de usuario que deseas consultar, al haberlo ingresado debes de presionar enter

## Uso
> Lo unico que hay que hacer es ejecutar e introducir el nombre de usuario sin mas que agregar, si deseas finalizar el programa presiona <kbd>Ctrl</kbd> + <kbd>C</kbd>
