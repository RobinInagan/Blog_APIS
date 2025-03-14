# Blog de Noticias

Este proyecto es una aplicación web desarrollada con **React** que permite a los usuarios consultar noticias relevantes de distintas categorías en tiempo real. Integra datos de **News API** para obtener las noticias y utiliza **Random User API** para generar información ficticia de los autores. Su diseño es moderno, responsivo y ofrece una experiencia optimizada gracias al almacenamiento en memoria de las páginas cargadas.

---

## Tecnologías utilizadas

- **React**: Biblioteca principal para la creación de la interfaz de usuario.
- **Axios**: Para la gestión de solicitudes HTTP a las APIs.
- **Bootstrap**: Framework CSS para diseño responsivo y estilizado.
- **News API**: Fuente principal de datos de noticias en tiempo real.
- **Random User API**: Para generación de datos ficticios de autores.

---

## Cómo iniciar el proyecto

Para ejecutar este proyecto en tu entorno local, sigue los pasos a continuación:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/mi-blog-de-noticias.git
   cd mi-blog-de-noticias
2. Instala las dependencias del proyecto:
    npm install
3. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
    REACT_APP_API_KEY=tu_clave_api
4. Inicia el servidor de desarrollo:
    npm start
5. Abre el navegador en http://localhost:3000 para ver la aplicación en funcionamiento.