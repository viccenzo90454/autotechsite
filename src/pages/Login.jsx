import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulação de login bem-sucedido redirecionando para a Área do Cliente
    navigate('/cliente');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* 1. Navbar */}
      <header className="navbar">
        <Link to="/" className="logo">
          Auto<span>Tech</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/solucoes">SOLUÇÕES</Link></li>
            <li><Link to="/produtos">PRODUTOS</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
            <li><Link to="/orcamento">ORÇAMENTO</Link></li>
            <li><Link to="/cliente">ÁREA DO CLIENTE</Link></li>
          </ul>
        </nav>

        <Link to="/login" className="btn-login active">
          MENU
        </Link>
      </header>

      {/* 2. Conteúdo do Login */}
      <div className="login-container">
        <div className="login-card">
          
          {/* Abas superiores */}
          <div className="login-tabs">
            <button className="login-tab active-tab">ENTRAR</button>
            <Link to="/orcamento" className="login-tab">Criar Conta Corporativa</Link>
          </div>

          {/* Cabeçalho do formulário */}
          <div className="login-title-box">
            <h2>Acesse sua conta para gerenciar pedidos e suporte técnico</h2>
          </div>

          {/* Formulário */}
          <form onSubmit={handleLogin} className="login-form">
            
            <div className="form-group">
              <label>E-MAIL CORPORATIVO</label>
              <input 
                type="email" 
                placeholder="ex: engenharia@suaempresa.com.br" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div className="form-group">
              <label>SENHA</label>
              <input 
                type="password" 
                placeholder="••••••••••" 
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div className="forgot-password-container">
              <a href="#esqueci" onClick={(e) => { e.preventDefault(); alert('Instruções de recuperação enviadas para o e-mail.'); }} className="forgot-password-link">
                Esqueceu sua senha?
              </a>
            </div>

            <button type="submit" className="btn-login-submit">
              ENTRAR NA PLATAFORMA →
            </button>

          </form>

        </div>
      </div>

      {/* 3. Rodapé */}
      <footer className="footer">
        AUTOTECH
      </footer>

    </div>
  );
}