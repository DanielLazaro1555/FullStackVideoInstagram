````markdown
# FullStackVideoInstagram

## Descripción

FullStackVideoInstagram es un proyecto que permite descargar videos y fotos de Instagram en su calidad original desde la web, sin realizar conversiones. El proyecto está compuesto por un backend que maneja las descargas y un frontend que permite a los usuarios ingresar el enlace de una publicación o historia de Instagram para obtener el archivo correspondiente.

## Tecnologías utilizadas

- **Frontend:**
  - React
  - HTML/CSS
  - JavaScript
- **Backend:**
  - Node.js
  - Express
  - Axios
- **Otros:**
  - yt-dlp para la descarga de videos.
  - Flask para la implementación de un servicio API en Python, usando requests y BeautifulSoup para obtener y procesar los enlaces de Instagram.

## Funcionalidades

- **Descarga de videos e imágenes:** Los usuarios pueden ingresar un enlace de Instagram y obtener el video o imagen en calidad original.
- **Previsualización:** Se muestra el contenido de los archivos (video o imagen) antes de permitir la descarga.
- **Interfaz amigable:** Contamos con una interfaz sencilla donde los usuarios pueden ver el estado de la descarga y obtener el archivo con solo un clic.
- **Compatibilidad:** Funciona para publicaciones, historias y destacados de Instagram.

## Instalación

Instala las dependencias del frontend: Dirígete a la carpeta del frontend:

```bash
cd frontend
```
````

Luego instala las dependencias:

```bash
npm install
```

Instala las dependencias del backend: Dirígete a la carpeta del backend:

```bash
cd backend
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el servidor: Inicia el servidor del backend:

```bash
npm run start
```

Frontend: En una nueva terminal, navega a la carpeta del frontend y ejecuta:

```bash
npm start
```

## Uso

1.  Ingresa un enlace de Instagram en el campo de texto proporcionado en la página principal.
2.  Haz clic en "Ver Archivo" para procesar el enlace.
3.  Se mostrará una vista previa del archivo (video o imagen) en la misma página.
4.  Si deseas descargar el archivo, haz clic en el botón de descarga.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork, realizar tus cambios y enviar un pull request.

## Licencia

Este proyecto está bajo la GNU General Public License (GPL). Puedes distribuir, modificar y usar este software, pero debes hacerlo bajo las mismas condiciones de libertad.

```

```
