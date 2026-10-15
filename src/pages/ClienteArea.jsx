import React from 'react';
import { Link } from 'react-router-dom';

export default function Cliente() {
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
            <li><Link to="/cliente" className="active">ÁREA DO CLIENTE</Link></li>
          </ul>
        </nav>

        <Link to="/login" className="btn-login">
          MENU
        </Link>
      </header>

      {/* 2. Conteúdo da Área do Cliente */}
      <div className="client-container">
        
        <div className="client-header-box">
          <h2>Portal do Cliente AutoTech</h2>
          <p>Gerencie seus dispositivos, acompanhe pedidos e acesse o suporte técnico da sua planta fabril.</p>
        </div>

        <div className="client-grid">
          
          {/* Card 1 */}
          <div className="client-card">
            <div>
              <div className="client-card-top">
                <div className="client-card-icon">📊</div>
                <h3>Dashboard de Dispositivos IoT</h3>
              </div>
              <p>Acesse a telemetria em tempo real dos seus sensores, robôs colaborativos e gateways instalados no chão de fábrica.</p>
            </div>
            <Link to="/login" className="btn-client-action">Acessar Telemetria &gt;</Link>
          </div>

          {/* Card 2 */}
          <div className="client-card">
            <div>
              <div className="client-card-top">
                <div className="client-card-icon">📦</div>
                <h3>Meus Pedidos & Licenças</h3>
              </div>
              <p>Consulte o status de entregas de equipamentos, faturas corporativas e renovações de software SCADA/MES.</p>
            </div>
            <Link to="/login" className="btn-client-action">Ver Pedidos &gt;</Link>
          </div>

          {/* Card 3 */}
          <div className="client-card">
            <div>
              <div className="client-card-top">
                <div className="client-card-icon">🛠️</div>
                <h3>Suporte Técnico 24/7</h3>
              </div>
              <p>Abra chamados prioritários para manutenção preventiva/corretiva e fale com engenheiros especializados.</p>
            </div>
            <Link to="/login" className="btn-client-action">Abrir Chamado &gt;</Link>
          </div>

          {/* Card 4 */}
          <div className="client-card">
            <div>
              <div className="client-card-top">
                <div className="client-card-icon">📚</div>
                <h3>Documentação & Manuais</h3>
              </div>
              <p>Faça download das fichas técnicas, firmware atualizados e guias de integração API para os seus sistemas.</p>
            </div>
            <Link to="/login" className="btn-client-action">Acessar Manuais &gt;</Link>
          </div>

        </div>

      </div>

      {/* 3. Rodapé */}
      <footer className="footer">
        AUTOTECH
      </footer>

    </div>
  );
}