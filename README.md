# FullStackVideoInstagram 📸

## Descripción 🎯

FullStackVideoInstagram es una aplicación web que permite descargar videos y fotos de Instagram en su calidad original. No realiza conversiones, manteniendo la calidad nativa del contenido.

## 🚀 Características

- ⚡ Descarga de videos e imágenes en calidad original
- 👁️ Previsualización antes de descarga
- 💫 Interfaz minimalista y amigable
- ✨ Compatible con publicaciones, historias y destacados

## 🛠 Tecnologías utilizadas

- **Frontend:** Vite + React + Tailwind CSS
- **Backend:** Node.js + Express + yt-dlp
- **Manejo de CORS y solicitudes HTTP:** Axios y CORS
- **Gestión de procesos en segundo plano:** `child_process` de Node.js
- **Servidor estático:** Express.js para servir archivos multimedia
- **Dependencias clave:**
  - `express`, `cors`, `axios`, `fs`, `path`
  - `yt-dlp` para la descarga de videos e imágenes

---

## 🛠️ Instalación

### Frontend

```
cd ../frontend
npm install

npm run dev

```

### Backend

```
cd instagram-downloader/backend
npm install

npm start  # Para producción
npm run dev  # Para desarrollo (con nodemon)

```

## ⚡ Comandos útiles

| Acción                                  | Comando                |
| --------------------------------------- | ---------------------- |
| Instalar dependencias (Backend)         | `npm install`          |
| Instalar dependencias (Frontend)        | `npm install`          |
| Ejecutar backend                        | `npm run dev`          |
| Ejecutar frontend                       | `npm run dev`          |
| Ejecutar ambos juntos                   | `npm start`            |
| Reiniciar backend automáticamente (dev) | `npx nodemon index.js` |

## 📖 Uso

1. Pega un enlace de Instagram
2. Haz clic en "Ver Archivo"
3. Previsualiza el contenido
4. Descarga con un clic

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea tu rama de características
3. Envía tus cambios
4. Abre un pull request

## 📄 Licencia

Distribuido bajo GNU
