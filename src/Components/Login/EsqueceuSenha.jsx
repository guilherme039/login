
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { motion, AnimatePresence } from "framer-motion";
import "./EsqueceuSenha.css";

function EsqueceuSenha({ onVoltar }) {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showCode, setShowCode] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!validateEmail(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setIsSending(true);
    setShowCode(true);

    setTimeout(() => {
      setIsSending(false);
      setMessage("Instruções de recuperação foram enviadas ao seu e-mail.");
      setEmail("");
      setShowCode(false);
    }, 2000);
  };

  return (
    <div className="esqueceu-container">
      <form className="esqueceu-form" onSubmit={handleSubmit}>
        <h2>🔒 Recuperar Senha</h2>
        <p>Informe seu e-mail e enviaremos as instruções de recuperação.</p>

        <div className="input-field">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="E-mail para recuperação"
          />
        </div>

        {error && <p className="error-msg">{error}</p>}
        {message && <p className="success-msg">{message}</p>}

        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.05 }}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {isSending ? <ImSpinner8 className="spinner" /> : "Enviar"}
          <AnimatePresence>
            {showCode && (
              <motion.code
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: -40, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "#222",
                  color: "#fff",
                  padding: "2px 12px",
                  borderRadius: 8,
                  fontSize: 14,
                  pointerEvents: "none",
                }}
              >
                {"{ código enviado }"}
              </motion.code>
            )}
          </AnimatePresence>
        </motion.button>

        <button
          type="button"
          className="voltar-btn"
          onClick={onVoltar}
          style={{ marginTop: "10px", background: "#ccc", color: "#333" }}
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

export default EsqueceuSenha;
