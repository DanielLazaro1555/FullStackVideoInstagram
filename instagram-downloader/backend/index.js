const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const downloadPath = path.join(__dirname, "media");

// 🔹 Función para limpiar archivos antiguos antes de descargar algo nuevo
const limpiarCarpeta = () => {
  if (fs.existsSync(downloadPath)) {
    fs.readdirSync(downloadPath).forEach((file) => {
      fs.unlinkSync(path.join(downloadPath, file)); // Elimina cada archivo
    });
  } else {
    fs.mkdirSync(downloadPath); // Si no existe, la crea
  }
};

// Ruta para verificar que el backend está activo
app.get("/", (req, res) => {
  res.send("🚀 Servidor funcionando con yt-dlp y soporte para imágenes.");
});

// Ruta para descargar publicaciones de Instagram (imágenes o videos)
app.post("/descargar", async (req, res) => {
  const { url } = req.body;
  if (!url.includes("instagram.com/")) {
    return res
      .status(400)
      .json({ error: "❌ URL inválida. Debe ser un enlace de Instagram." });
  }

  // 🔹 Eliminar archivos antiguos antes de comenzar la descarga
  limpiarCarpeta();

  try {
    const apiUrl = `https://www.instagram.com/p/${
      url.split("/p/")[1].split("/")[0]
    }/?__a=1&__d=dis`;
    const response = await axios.get(apiUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const mediaData = response.data.graphql.shortcode_media;

    if (mediaData.is_video) {
      console.log("🎥 Es un video, descargando con yt-dlp...");
    } else {
      console.log("📸 Es una imagen, descargándola directamente...");

      const imageUrl = mediaData.display_url;
      const imagePath = path.join(downloadPath, "instagram_image.jpg");

      const imageResponse = await axios.get(imageUrl, {
        responseType: "arraybuffer",
      });
      fs.writeFileSync(imagePath, imageResponse.data);

      return res.json({
        success: true,
        mediaType: "image",
        mediaUrl: `http://localhost:3001/media/instagram_image.jpg`,
      });
    }
  } catch (error) {
    console.error(
      "⚠ No se pudo verificar el tipo de publicación. Intentando descargar con yt-dlp..."
    );
  }

  // 🔹 Método de autenticación para yt-dlp
  const authMethod = "--cookies-from-browser firefox"; // Para Firefox
  // const authMethod = "--cookies-from-browser chrome"; // Para Chrome

  // Comando para descargar con yt-dlp usando cookies
  const command = `yt-dlp ${authMethod} -o "${downloadPath}/%(title)s.%(ext)s" -f best ${url}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("❌ Error al descargar:", error.message);
      return res.status(500).json({ error: "❌ Error al descargar el video." });
    }

    fs.readdir(downloadPath, (err, files) => {
      if (err || files.length === 0) {
        return res
          .status(404)
          .json({ error: "⚠ No se encontró el archivo descargado." });
      }

      const mediaFile = files.find(
        (file) =>
          file.endsWith(".mp4") ||
          file.endsWith(".jpg") ||
          file.endsWith(".png")
      );
      if (!mediaFile) {
        return res
          .status(404)
          .json({ error: "⚠ No se encontró un archivo descargado." });
      }

      res.json({
        success: true,
        mediaType: mediaFile.endsWith(".mp4") ? "video" : "image",
        mediaUrl: `http://localhost:3001/media/${mediaFile}`,
      });
    });
  });
});

// Servir los archivos descargados
app.use("/media", express.static(downloadPath));

// Iniciar el servidor en el puerto 3001
const PORT = 3001;
app.listen(PORT, () =>
  console.log(
    `🚀 Servidor en http://localhost:${PORT} con soporte para videos e imágenes`
  )
);
