## Authors

- [Karla Jimenez ](https://github.com/Karit08)

# Hub Entretenimiento Sprint 6

El Sprint muestra una plataforma de entretenimiento que ofrece un extenso catálogo de películas de diversos géneros. 

# Requerimientos técnicos
--> Visual Studio Code
--> Node v20.13.1
--> npm v10.5.2
--> Angular CLI 18.1.0
--> TypeScript v5.5.2
--> SQL Server Management Studio 20
--> .NET 8.0.9
--> Docker 8.0
--> Kubernetes 1.33.1

# Visualización del proyecto

# Instrucciones para su instalacion
* Clonar el proyecto.
* Instala las dependencias: Ejecuta el comando npm install para instalar las dependencias del proyecto.\
* Instalación de MySQL Serve 2022 y SSMS 2022
* Importar BD anexa(STFireDBComplete).
* Descargar archivos adjuntos de la imagen, BD y API anexa en el proyecto.
* Instalacion de API,con creacion de proyecto VS Code.
* Correr API en terminal del protecto."do net run

¡Listo! El proyecto está disponible.

## Backend  Rutas

Users
Login de usuarios

```bash
POST/ api/RegisterUser <--- register
```
```bash
GET/ api/RegisterUser  <--- login
```

Favorites
Permite agregar, eliminar y mostrar las peliculas o series favoritas del usuario.

```bash
GET/ api/Favorites
```
```bash
POST/ api/Favorites/add
```
```bash
POST/ api/Favorites/delete
```

Media
Se muestran todas las peliculas 

```bash
GET/ api/media/Movies
```
```bash
GET/ api/media/Series
```

Category

Se muestran series o peliculas, se pueden usar filtros para buscar por categorias.

```bash
GET/ api/Category/Movies
```
```bash
GET/ api/Category/Series
```

# Retrospectiva

| Aspecto                    | Detalles                                                                                                                                                                                                                                                                                                               |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ¿Qué salió bien?           | * Aprender los conceptos y herramientas a ocupar <br> * Senti que mi conocimiento se amplio permitiendome desarrollar el proyecto <br> |
| ¿Qué puedo hacer diferente? | * Dedicarle más tiempo a comprender Visual Basic. <br>  *|
| ¿Qué no salió bien?        | *Mi computadora fallo la semana pasada, asi que tuve solo esta semana para terminar el sprint, pero siento que puede haber mejorado varios aspectos, me siento un poco desepcionada por los resultados| 
