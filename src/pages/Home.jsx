import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* 1. Navbar */}
      <header className="navbar">
        <Link to="/" className="logo">
          Auto<span>Tech</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/solucoes">Soluções</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/orcamento">Orçamento</Link></li>
            <li><Link to="/cliente">Área do Cliente</Link></li>
          </ul>
        </nav>

        <Link to="/login" className="btn-login">
          LOGIN
        </Link>
      </header>

      {/* 2. Hero Section / Banner */}
      <section className="hero-banner">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1>Conectando o chão de Fábrica ao Futuro</h1>
          <p className="hero-subtitle">
            Soluções integradas de automação, IoT e inteligência artificial
          </p>
          <Link to="/orcamento" className="btn-demo">
            Solicitar Demonstração
          </Link>
        </div>
      </section>

      {/* 3. Texto Descritivo Centralizado */}
      <section className="home-intro">
        <p>
          A AutoTech lidera a transformação digital na indústria, aumentando a eficiência e segurança com tecnologias avançadas.
        </p>
      </section>

      {/* 4. Os 3 Cards da Home */}
      <section className="cards-container">
        
        {/* Card 1 */}
        <div className="card">
          <div>
            <div className="card-icon">📶</div>
            <h3>SENSORES INTELIGENTES IOT</h3>
            <p>
              Monitoramento em tempo real do chão de fábrica, garantindo manutenções preditivas e máxima eficiência operacional.
            </p>
          </div>
          <Link to="/produtos" className="card-link">VER PRODUTO &gt;</Link>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div>
            <div className="card-icon">🤖</div>
            <h3>ROBÔS COLABORATIVOS</h3>
            <p>
              Soluções integradas de automação segura que trabalham lado a lado com a equipe humana para otimizar a linha de montagem.
            </p>
          </div>
          <Link to="/produtos" className="card-link">VER PRODUTO &gt;</Link>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div>
            <div className="card-icon">💻</div>
            <h3>SISTEMAS DE SUPERVISÃO SCADA</h3>
            <p>
              Plataformas avançadas de controle e aquisição de dados para gestão completa de processos industriais complexos.
            </p>
          </div>
          <Link to="/produtos" className="card-link">VER PRODUTO &gt;</Link>
        </div>

      </section>


      <footer className="footer">
        AUTOTECH
      </footer>

    </div>
  );
}