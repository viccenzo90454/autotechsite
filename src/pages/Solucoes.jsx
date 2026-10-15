import React from 'react';
import { Link } from 'react-router-dom';

export default function Solucoes() {
  return (
    <div>
      {/* 1. Navbar Compartilhada */}
      <header className="navbar">
        <Link to="/" className="logo">
          Auto<span>Tech</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/solucoes" className="active">Soluções</Link></li>
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

      {/* 2. Banner Principal idêntico ao protótipo */}
      <section className="hero-banner">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1>SOLUÇÕES INTEGRADAS</h1>
          <p className="hero-subtitle">INDÚSTRIA 4.0</p>
        </div>
      </section>

      {/* 3. Subtítulo centralizado */}
      <section className="solutions-intro">
        <p>A AutoTech lidera a transformação digital na indústria, aumentando eficiência e segurança com tecnologias avançadas.</p>
      </section>

      {/* 4. Lista de Cartões de Soluções */}
      <div className="solutions-list-container">
        
        {/* Card 1 */}
        <div className="solution-card-item">
          <div className="solution-card-top">
            <div className="solution-card-icon">💻</div>
            <h3>MANUTENÇÃO PREDITIVA COM IA</h3>
          </div>
          <p>Monitoramento contínuo de vibração, temperatura e ruído para prever falhas e evitar paradas não programadas.</p>
          <Link to="/orcamento" className="btn-solution-action">SAIBA MAIS</Link>
        </div>

        {/* Card 2 */}
        <div className="solution-card-item">
          <div className="solution-card-top">
            <div className="solution-card-icon">🔄</div>
            <h3>LINHAS DE MONTAGEM COLABORATIVAS</h3>
          </div>
          <p>Integração de Cobots e AGVs para otimização do fluxo de produção, flexibilidade e segurança operacional.</p>
          <Link to="/orcamento" className="btn-solution-action">CONHECER SOLUÇÃO</Link>
        </div>

        {/* Card 3 */}
        <div className="solution-card-item">
          <div className="solution-card-top">
            <div className="solution-card-icon">🖥️</div>
            <h3>GESTÃO DE FÁBRICA EM TEMPO REAL</h3>
          </div>
          <p>Plataformas SCADA/Soft e MES para visualização completa, controle de processos e análise de dados OEE.</p>
          <Link to="/orcamento" className="btn-solution-action">EXPLORAR DASHBOARDS</Link>
        </div>

        {/* Card 4 */}
        <div className="solution-card-item">
          <div className="solution-card-top">
            <div className="solution-card-icon">⚡</div>
            <h3>EFICIÊNCIA ENERGÉTICA E SUSTENTABILIDADE</h3>
          </div>
          <p>Soluções para monitoramento e controle do consumo energético, reduzindo custos e pegada ambiental das indústrias.</p>
          <Link to="/orcamento" className="btn-solution-action">OTIMIZAR ENERGIA</Link>
        </div>
        

      </div>
      <footer className="footer">
        AUTOTECH
      </footer>
    </div>
    
  );
}