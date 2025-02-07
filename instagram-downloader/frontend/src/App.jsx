import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [mediaUrl, setMediaUrl] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const descargarMedia = async () => {
    if (!url.includes("instagram.com/")) {
      alert("❌ Ingresa un enlace válido de Instagram.");
      return;
    }

    setLoading(true);
    setMessage("🔄 Procesando...");

    try {
      const response = await fetch("http://localhost:3001/descargar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      if (data.success) {
        setMediaUrl(data.mediaUrl);
        setMediaType(data.mediaType);
        setMessage("✅ Archivo listo para ver");
      } else {
        setMessage("⚠ No se pudo obtener el archivo.");
      }
    } catch (error) {
      setMessage("❌ Error al conectar con el servidor.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f8f9fa",
        margin: "0",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007bff" }}>📲 Descargador de Instagram</h2>
        <input
          type="text"
          placeholder="Pega aquí el enlace de Instagram"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <br />
        <button
          onClick={descargarMedia}
          style={{
            padding: "10px 20px",
            backgroundColor: loading ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            transition: "0.3s",
          }}
          disabled={loading}
        >
          {loading ? "🔄 Procesando..." : "⬇ Obtener Archivo"}
        </button>

        {message && (
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>{message}</p>
        )}

        {mediaUrl && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h4>✅ Archivo encontrado:</h4>
            {mediaType === "video" ? (
              <video
                controls
                src={mediaUrl}
                width="80%" // Establece el tamaño para la vista previa
                style={{ borderRadius: "5px", marginTop: "10px" }}
              ></video>
            ) : (
              <img
                src={mediaUrl}
                alt="Instagram"
                width="80%" // Establece el tamaño para la vista previa
                style={{ borderRadius: "5px", marginTop: "10px" }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
