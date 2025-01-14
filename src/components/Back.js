import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Back = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");

  // URL del backend (actualízala con tu URL pública en producción)
  const BACKEND_URL = "https://react-1-wq88.onrender.com";  // Actualiza esta URL con tu backend desplegado

  // Obtener datos de la base de datos
  useEffect(() => {
    fetch(`${BACKEND_URL}/entries`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.error(err));
  }, []);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !comment) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");

    fetch(`${BACKEND_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, comment }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEntries([...entries, { id: data.id, name, email, comment }]);
        setName("");
        setEmail("");
        setComment("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Formulario con Comentarios</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Comentario</label>
          <textarea
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Enviar
        </button>
      </form>

      <h2>Entradas</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Back;






