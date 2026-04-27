# RPG Battle API

## Descripción
Esta es una API REST desarrollada con Node.js y Express diseñada para la gestión de personajes de un juego de rol y la ejecución de un sistema de combate basado en atributos. Permite administrar un catálogo completo de héroes y calcular enfrentamientos en tiempo real.

## Características
- Gestión completa de personajes (Crear, Leer, Actualizar y Eliminar).
- Motor de batalla con lógica personalizada basada en estadísticas.
- Manejo de respuestas mediante códigos de estado HTTP estandarizados.
- Almacenamiento temporal de datos en memoria para pruebas rápidas.

## Tecnologías utilizadas
- Node.js: Entorno de ejecución para el servidor.
- Express.js: Framework para la creación de rutas y manejo de peticiones.
- JavaScript: Lenguaje de programación para la lógica de negocio.

## Lógica de Combate
El sistema determina al ganador de un enfrentamiento utilizando la siguiente fórmula matemática:
Puntaje = (Fuerza + Magia + Conocimiento) - Agilidad del oponente.

## Instalación y Configuración
Para poner en marcha el proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio en tu máquina:
```
   git clone https://github.com/GcassT/API_RPG_Node.git
```

2. Accede al directorio del proyecto:
```
   cd nombre-del-repositorio
```

3. Instala las dependencias necesarias:
```
   npm install
```
4. Inicia el servidor:
```
   node index.js
```

El servidor comenzará a funcionar en http://localhost:3000.

## Endpoints Principales
- GET /personajes: Obtener la lista de todos los personajes.
- POST /personajes: Registrar un nuevo personaje.
- PUT /personajes/:id: Actualizar los datos de un personaje existente.
- DELETE /personajes/:id: Eliminar un personaje del sistema.
- POST /batalla: Iniciar un combate entre dos personajes enviando sus respectivos IDs.

---
Proyecto desarrollado como parte de la formación en desarrollo de APIs REST.