# 👨‍💻 Ejercicio Simple - Api RESTful

🚀 Este ejercicio consta de un ejercicio que crea un CRUD usando como sistema de almacenamiento el sistema de archivos. Todo los requisitos del desafío quedan explicados en este [Archivo PDF](./desafio-explain.pdf) donde se pueden ver más detalles.

> [!IMPORTANT]
> Para desplegar este proyecto en local seguir estas instrucciones.
> 1. Clonar el repositorio
> ```git clone https://github.com/felipejoq/simple-crud-fs-node.git```
>
> 2. Posicionarse en la carpeta del proyecto
> ```cd ./simple-crud-fs-node```
>
> 3. Instalar dependencias
> ```npm install```
>
> 4. Editar archivo .env.example
>
> - Crear copia del archivo .env.example
> - Renombrarlo a .env
>
> 5. Ejecutar proyecto
> ```npm run dev```
>
> 6. Visitar la web
> Para ver una interfaz mantenedor visitar ```http://localhost:3000/```
>
> __Nota:__ Si su puerto 3000 está en uso, modificar la variable PORT en el archivo .env por un puerto que esté libre, ejemplo: ```PORT:3001```
>

## Ejecutar Test Suite

```npm run test```

o con coverage:

```npm run test:coverage```

## ℹ️ Recursos

> GET /song retorna un arreglo de objetos json

> POST /song crea un recurso en fs

> GET /song/:songId retorna un objeto json

> PUT /song/songId modifica un recurso en fs

> DELETE /song/:songId elimina un recurso de fs

### 📚 Requisitos Desarrollo

- Node v18.17.1 ó superior.
- npm v9.6.7 ó superior.
