# SentimentAnalyzerPWA

SentimentAnalyzerPWA es una aplicación web progresiva (PWA) desarrollada con React que utiliza la API de Hugging Face para realizar análisis de sentimientos de texto. La aplicación permite a los usuarios ingresar texto, analizar el sentimiento y mostrar el resultado de manera clara y atractiva. También incluye notificaciones push motivacionales para sentimientos negativos.

## Características

- **Análisis de Sentimientos:** Utiliza el modelo `distilbert-base-uncased-finetuned-sst-2-english` de la API de Hugging Face para determinar el sentimiento del texto ingresado.
- **Notificaciones Push:** Envía una notificación motivacional si el sentimiento es negativo.
- **Interfaz Moderna:** Diseño responsive y atractivo con una experiencia de usuario optimizada para dispositivos móviles.
- **PWA:** Soporte para instalación en dispositivos móviles y funcionalidad offline.

## Tecnologías Utilizadas

- **React:** Biblioteca para construir la interfaz de usuario.
- **Tailwind CSS:** Framework de diseño para estilos modernos y responsivos.
- **API de Hugging Face:** Para el análisis de sentimientos.
- **Service Workers:** Para soporte offline y notificaciones push.

## Configuración

### Requisitos

- **Node.js** (v14 o superior) y **npm** (Node Package Manager) instalados en tu sistema.

### Instalación

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/aracavic/SentimentAnalyzerPWA.git
    cd TU_REPOSITORIO
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Configura las variables de entorno:**

    - Crea un archivo `.env` en la raíz del proyecto.
    - Añade tu token de Hugging Face API al archivo `.env`:

    ```plaintext
    REACT_APP_HUGGINGFACE_API_TOKEN=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
    ```

4. **Inicia el servidor de desarrollo:**

    ```bash
    npm start
    ```

    La aplicación estará disponible en `http://localhost:3000`.

## Despliegue

Para desplegar la aplicación en línea, puedes utilizar servicios como GitHub Pages, Vercel, o Netlify. A continuación, se explica cómo hacerlo con **Netlify**:

1. **Instala la CLI de Netlify:**

    ```bash
    npm install -g netlify-cli
    ```

2. **Inicia sesión en Netlify:**

    ```bash
    netlify login
    ```

3. **Despliega la aplicación:**

    ```bash
    netlify deploy
    ```

    Sigue las instrucciones para conectar tu repositorio y desplegar la aplicación. El comando `netlify deploy` subirá la aplicación a Netlify y te proporcionará una URL temporal. Para una URL de producción, ejecuta `netlify deploy --prod`.

## Notas

- **Permisos de Notificación:** La primera vez que se ejecute la aplicación, se solicitará permiso para mostrar notificaciones. Asegúrate de concederlo para ver las notificaciones push.
- **Service Worker:** Asegúrate de que el archivo `service-worker.js` esté correctamente configurado y registrado para que las notificaciones y el soporte offline funcionen.

## Enlace al Proyecto

Puedes ver la aplicación en línea [aquí](https://resonant-fenglisu-218fa6.netlify.app/).

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o crea un pull request si deseas colaborar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.



This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
