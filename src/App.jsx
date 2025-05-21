import { useState, useEffect } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import Registrar from "./Registrar.jsx";
import EsqueceuSenha from "./EsqueceuSenha.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";


function Video({ video }) {
  return (
    <div style={{ marginBottom: "12px" }}>
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        {video.title}
      </a>
    </div>
  );
}

// Componente de lista de vídeos
function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Vídeos' : 'Vídeo';
    heading = count + ' ' + noun;
  }
  return (
    <section style={{ marginTop: "2rem" }}>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showEsqueceuSenha, setShowEsqueceuSenha] = useState(false);
  const [showRegistrar, setShowRegistrar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Exemplo de vídeos estáticos, troque por fetch se quiser buscar de uma API
    setVideos([
      { id: 1, title: "React Tutorial", url: "https://www.youtube.com/watch?v=dGcsHMXbSOA" },
      { id: 2, title: "Aprenda JavaScript", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
      { id: 3, title: "CSS Flexbox", url: "https://www.youtube.com/watch?v=JJSoEo8JSnc" },
    ]);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simples validação de exemplo
    if (username && password) {
      // Aqui você pode adicionar sua lógica de autenticação real
      setIsLoggedIn(true);
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  // Adicione esta verificação no início do render
  if (isLoggedIn) {
    return <Dashboard onLogout={() => setIsLoggedIn(false)} />;
  }

  if (showEsqueceuSenha) {
    return <EsqueceuSenha onVoltar={() => setShowEsqueceuSenha(false)} />;
  }

  if (showRegistrar) {
    return <Registrar onVoltar={() => setShowRegistrar(false)} />;
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#" onClick={() => setShowEsqueceuSenha(true)}>
            Esqueceu sua senha?
          </a>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta?{" "}
            <a href="#" onClick={() => setShowRegistrar(true)}>
              Registar
            </a>
          </p>
        </div>
      </form>
      <VideoList videos={videos} emptyHeading="Nenhum vídeo encontrado" />
    </div>
  );
};

export default Login;






