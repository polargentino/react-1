const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos
const db = new sqlite3.Database("./app_data.db", (err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err);
  } else {
    console.log("Conexión exitosa a SQLite");
  }
});

// Ruta para agregar datos (con comentarios)
app.post("/add", (req, res) => {
    const { name, email, comment } = req.body;
    const query = "INSERT INTO entries (name, email, comment) VALUES (?, ?, ?)";
    db.run(query, [name, email, comment], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ id: this.lastID });
      }
    });
});
  
// Ruta para obtener datos (incluyendo comentarios)
app.get("/entries", (req, res) => {
    const query = "SELECT * FROM entries";
    db.all(query, [], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(rows);
      }
    });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
