import React, { useState } from "react";
import "./Registrar.css";

function Registrar({ onVoltar }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Cliente cadastrado com sucesso!");
    setFormData({ nome: "", email: "", senha: "" });
  };

  return (
    <div className="registrar-container">
      <form className="registrar-form" onSubmit={handleSubmit}>
        <h2>Registrar Cliente</h2>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
        <button type="button" onClick={onVoltar}>
          Voltar
        </button>
      </form>
    </div>
  );
}

export default Registrar;
