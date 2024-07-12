## Teoría de Node.js
### 1. Introducción a Node.js
Node es un entorno de ejecución, construido con el motor __V8__ de Chrome. 
- Permite ejecutar javascript del lado del servidor

#### NPM
Es un gestor de paquetes predeterminado para Node.js

Node utiliza un modelo de entrada y salida, orientado a eventos. Esto permite a Node.js manejar múltiples conexiones simultáneamente. El event loop es el encargado de gestionar las operaciones de entrada y salida.

### 2. Import vs Require
Require es síncrono y Import es asíncrono. Import es una característica de ECMAScript, mientras que require es una característica de Node.js

### 3. Manejo de paquetes con npm
Npm es un gestor de paquetes de Node.js. 
- Actualizar
- Eliminar
- Instalar

Los paquetes si instalan en la carpeta node_modules y el catágalo de los paquetes utilizados se guardan en el archivo package.json

### Axios
Axios es una biblioteca de Javascript para solicitudes http : GET, POST, DELETE, PUT
#### Características
1. Basado en promesas
2. Intercepciones de solicitudes y respuestas
3. Cancelación de solicitudes
4. Transformación de datos
5. Compatibilidad con Node.js
6. Protección contra CSRF: Ataques de falsificación de solicitudes entre sitios Croos -site Request Forgery

### 4. Creación de un Servidor Básico

#### Arquitectura RestFul
Recursos - único
1. __API: Application Programming Interface__ Abstracción de funciones y procedimientos que permite la comunicación entre diferentes aplicaciones

2. __REST: Representational State Tranfer__ Estilo de arquitectura que define las restricciones, recomendaciones.
3. __REST FULL API__ Integramos API y Rest. Creamos una Api con el estilo de arquitectura de REST. Esto utiliza una arquitectura Cliente - Servidor para el intercambio de datos. 
- Al cliente no le interesa lo que haga el servidor y viceversa. Sin embargo, existe el protocolo HTTP para comunicar estos dos mundos y utilizar un formato de intercambio de datos como: JSON, XML, Binary con el fin de pasar esa información.

4. Procedimiento de la app: Verbos HTTP, URI, Recursos
- Cada petición es independiente
- Cada solicitud al servidor debe contener toda la información necesaria para procesarla

#### Servidor
Es un sistema y/o programa que escucha las peticiones HTTP y reponde a ellas. 
__HTTP__ Módulo que permite crear servidores web

### 5. Introducción al filesystem
fs - Es un módulo que perimite interactuar con el sistema de archivos de la computadora
- Leer
- Escribir archivos 
- Crear
- Eliminar directorios

### 6. Repasando los modulos path y os
1. __Path:__ Sistemas de archivo - Trabajar con rutas de archivos y directorios
2. __Os:__ Sistema operativo - Obtener información de la arquitectura de la CPU, cantidad de memoria