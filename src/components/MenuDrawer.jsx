import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
        
        <div className="drawer-header">
          <h3>Menu AutoTech</h3>
          <button className="drawer-close" onClick={onClose}>✕</button>
        </div>

        <nav className="drawer-nav">
          <Link to="/" onClick={onClose} className="drawer-link">Home</Link>
          <Link to="/solucoes" onClick={onClose} className="drawer-link">Soluções</Link>
          <Link to="/produtos" onClick={onClose} className="drawer-link">Produtos</Link>
          <Link to="/catalogo" onClick={onClose} className="drawer-link">Catálogo Técnico</Link>
          <Link to="/sobre" onClick={onClose} className="drawer-link">Sobre</Link>
          <Link to="/orcamento" onClick={onClose} className="drawer-link">Solicitar Orçamento</Link>
          <Link to="/cliente" onClick={onClose} className="drawer-link">Área do Cliente</Link>
          <Link to="/login" onClick={onClose} className="drawer-link login-highlight">Aceder / Login</Link>
        </nav>

      </div>
    </div>
  );
}