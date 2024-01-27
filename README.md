# 👨‍💻 Ejercicio Simple - Api RESTful

🚀 Este ejercicio consta de un ejercicio que crea un CRUD usando como sistema de almacenamiento el sistema de archivos. Todo los requisitos del desafío quedan explicados en este [Archivo PDF](./desafio-explain.pdf) donde se pueden ver más detalles.

> [!IMPORTANT]
> Para desplegar este proyecto en local seguir estas instrucciones.
> __1. Clonar el repositorio__
> ```git clone https://github.com/felipejoq/simple-crud-fs-node.git```
>
> __2. Posicionarse en la carpeta del proyecto__
> ```cd ./simple-crud-fs-node```
>
> __3. Instalar dependencias__
> ```npm install```
>
> __4. Editar archivo .env.example__
>
> - Crear copia del archivo .env.example
> - Renombrarlo a .env
>
> __5. Ejecutar proyecto__
> ```npm run dev```
>
> __6. Visitar la web__
> Para ver una interfaz mantenedor visitar ```http://localhost:3000/```
>
> __Nota:__ Si su puerto 3000 está en uso, modificar la variable PORT en el archivo .env por un puerto que esté libre, ejemplo: ```PORT:3001```
>

# Recursos

> GET /song retorna un arreglo de objetos json

> POST /song crea un recurso en fs

> GET /song/:songId retorna un objeto json

> PUT /song/songId modifica un recurso en fs

> DELETE /song/:songId elimina un recurso de fs

# Requisitos Desarrollo

- Node v18.17.1 ó superior.
- npm v9.6.7 ó superior.
