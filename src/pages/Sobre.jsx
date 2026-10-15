import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from '../components/MenuDrawer';

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <li><Link to="/sobre" className="active">SOBRE</Link></li>
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

      {/* 2. Secção 1: Nossa Identidade */}
      <h2 className="about-section-title">Nossa Identidade</h2>
      <div className="about-cards-3">
        
        <div className="about-card">
          <div className="about-card-header">
            <div className="about-card-icon">◎</div>
            <h3>NOSSA MISSÃO</h3>
          </div>
          <p>Avançar a modernização industrial com soluções inovadoras e sustentáveis.</p>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <div className="about-card-icon">👁</div>
            <h3>NOSSA VISÃO</h3>
          </div>
          <p>Ser a plataforma líder em automação conectada e inteligente no mercado global.</p>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <div className="about-card-icon">★</div>
            <h3>NOSSOS VALORES</h3>
          </div>
          <p>Inovação, Ética, Parceria e Sustentabilidade.</p>
        </div>

      </div>

      {/* 3. Secção 2: Nossa Jornada (Timeline) */}
      <h2 className="about-section-title">Nossa Jornada</h2>
      <div className="timeline-container">
        <div className="timeline-line-wrapper">
          <div className="timeline-bar"></div>
          <div className="timeline-node"></div>
          <div className="timeline-node"></div>
          <div className="timeline-node"></div>
        </div>
        <div className="timeline-labels">
          <div className="timeline-item" style={{ textAlign: 'left' }}>
            <div className="timeline-year">2018</div>
            <p className="timeline-desc">Fundada</p>
          </div>
          <div className="timeline-item" style={{ textAlign: 'center' }}>
            <div className="timeline-year">2020</div>
            <p className="timeline-desc">Lançamento de Cobots</p>
          </div>
          <div className="timeline-item" style={{ textAlign: 'right' }}>
            <div className="timeline-year">2023</div>
            <p className="timeline-desc">Expansão Global</p>
          </div>
        </div>
      </div>

      {/* 4. Secção 3: Nossa Capacidade Produtiva */}
      <h2 className="about-section-title">Nossa Capacidade Produtiva</h2>
      <div className="about-cards-3" style={{ paddingBottom: '48px' }}>
        
        <div className="about-card" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="about-card-icon" style={{ marginBottom: '8px' }}>⚡</div>
          <p className="metric-number">5</p>
          <p className="metric-label">Centros de Distribuição</p>
        </div>

        <div className="about-card" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="about-card-icon" style={{ marginBottom: '8px' }}>👥</div>
          <p className="metric-number">200+</p>
          <p className="metric-label">Engenheiros Especializados</p>
        </div>

        <div className="about-card" style={{ alignItems: 'center', textAlign: 'center' }}>
          <div className="about-card-icon" style={{ marginBottom: '8px' }}>🌐</div>
          <p className="metric-number">50+</p>
          <p className="metric-label">Patentes Registradas</p>
        </div>

      </div>

      {/* 5. Rodapé */}
      <footer className="footer">
        AUTOTECH
      </footer>

      {/* 6. Gaveta de Menu Lateral */}
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </div>
  );
}