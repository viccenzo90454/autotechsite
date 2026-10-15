import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from '../components/MenuDrawer';

export default function Produtos() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* 1. Navbar Compartilhada */}
      <header className="navbar">
        <Link to="/" className="logo">
          Auto<span>Tech</span>
        </Link>
        
        <nav>
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/solucoes">SOLUÇÕES</Link></li>
            <li><Link to="/produtos" className="active">PRODUTOS</Link></li>
            <li><Link to="/sobre">SOBRE</Link></li>
            <li><Link to="/orcamento">ORÇAMENTO</Link></li>
            <li><Link to="/cliente">ÁREA DO CLIENTE</Link></li>
          </ul>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="btn-login" 
          style={{ cursor: 'pointer', border: 'none' }}
        >
          MENU
        </button>
      </header>

      {/* 2. Banner Principal da Página de Produtos */}
      <section className="hero-banner">
        <div className="hero-bg-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1>CATÁLOGO DE PRODUTOS</h1>
          <p className="hero-subtitle">HARDWARE E SOFTWARE INDUSTRIAL</p>
        </div>
      </section>

      {/* 3. Subtítulo descritivo */}
      <section className="home-intro">
        <p>Conheça o nosso portfólio de dispositivos de alta performance e software especializado para o setor industrial.</p>
      </section>

      {/* 4. Grelha de Produtos (Cards) */}
      <section className="cards-container">
        
        {/* Produto 1 */}
        <div className="card">
          <div>
            <div className="card-icon">📶</div>
            <h3>Sensor IoT Industrial Pro</h3>
            <p>Módulo de recolha de dados de vibração e temperatura com certificação IP67 e conectividade de longo alcance.</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

        {/* Produto 2 */}
        <div className="card">
          <div>
            <div className="card-icon">🤖</div>
            <h3>Cobot AutoArm 500</h3>
            <p>Braço robótico colaborativo com capacidade de carga de 10kg, sensores de segurança avançados e fácil programação.</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

        {/* Produto 3 */}
        <div className="card">
          <div>
            <div className="card-icon">💻</div>
            <h3>Gateway SCADA Edge</h3>
            <p>Unidade de processamento de borda para agregação de protocolos industriais (Modbus, Profibus, OPC-UA).</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

        {/* Produto 4 */}
        <div className="card">
          <div>
            <div className="card-icon">👁️</div>
            <h3>Câmara de Visão AI-Cam</h3>
            <p>Sistema inteligente de inspeção ótica de alta velocidade para controlo de qualidade automatizado em linha.</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

        {/* Produto 5 */}
        <div className="card">
          <div>
            <div className="card-icon">📊</div>
            <h3>Software MES Fábrica 360</h3>
            <p>Licença corporativa para gestão de ordens de produção, rastreabilidade e cálculo de OEE em tempo real.</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

        {/* Produto 6 */}
        <div className="card">
          <div>
            <div className="card-icon">🛡️</div>
            <h3>Firewall OT SecureNet</h3>
            <p>Dispositivo de segurança de rede projetado especificamente para proteger o chão de fábrica contra intrusões.</p>
          </div>
          <Link to="/orcamento" className="card-link">SOLICITAR ORÇAMENTO &gt;</Link>
        </div>

      </section>

      {/* Rodapé */}
      <footer className="footer">
        AUTOTECH
      </footer>

      {/* Gaveta de Menu */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </div>
  );
}