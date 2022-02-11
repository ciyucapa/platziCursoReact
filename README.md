# CRUD Task

crud de tareas 

Permite al usuario Crear, Editar, y Borrar una tarea.

### Dependencias
```
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "prop-types": "^15.7.2",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.1",
    "uuid": "^8.3.2",
    "web-vitals": "^1.0.1"
  },
```

### Instalación
npm i

### Ejecución 
npm start

### Ejecución de pruebas (tests)
npm test

## Organización de los archivos
Cuenta con diferentes modulos, los cuales son:

* components
* contexts
* hooks
* navigation
* scenes

#### components
componentes presentaciones y reutilizables en el proyecto para la construccion de diferentes escenas.

#### contexts
contexto para persistir la informacion del usuario.

#### hooks
lógica implementada basada en custom hooks para el correcto manejo de los componentes funcionales.

#### navigation
sistema de navegación del proyecto.

#### scenes
componente funcionales que permiten la construcción de escenas como inicio de sesion, crear cliente y editar cliente.



