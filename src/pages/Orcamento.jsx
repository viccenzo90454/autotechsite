import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuDrawer from '../components/MenuDrawer';

export default function Orcamento() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    quantidade: '',
    produtoServico: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Solicitação de orçamento enviada com sucesso!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      

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
            <li><Link to="/orcamento" className="active">ORÇAMENTO</Link></li>
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

     
      <div className="budget-container">
        
        <div className="budget-header-box">
          <h2>Solicitação de Orçamento</h2>
          <p>Preencha os campos abaixo e entraremos em contato.</p>
        </div>

        <form onSubmit={handleSubmit} className="budget-form">
          
          <div className="form-group">
            <label>Nome</label>
            <input 
              type="text" 
              name="nome" 
              placeholder="Nome" 
              value={formData.nome} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Empresa</label>
            <input 
              type="text" 
              name="empresa" 
              placeholder="Empresa" 
              value={formData.empresa} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>

          <div className="form-group">
            <label>E-mail</label>
            <input 
              type="email" 
              name="email" 
              placeholder="E-mail" 
              value={formData.email} 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Telefone</label>
              <input 
                type="text" 
                name="telefone" 
                placeholder="Telefone" 
                value={formData.telefone} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
            <div className="form-group">
              <label>Quantidade</label>
              <input 
                type="text" 
                name="quantidade" 
                placeholder="Quantidade" 
                value={formData.quantidade} 
                onChange={handleChange} 
                className="form-input" 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Produto/Serviço</label>
            <input 
              type="text" 
              name="produtoServico" 
              placeholder="Produto ou Serviço desejado" 
              value={formData.produtoServico} 
              onChange={handleChange} 
              className="form-input" 
            />
          </div>

          <div className="form-group">
            <label>Mensagem</label>
            <textarea 
              name="mensagem" 
              placeholder="Descreva sua necessidade..." 
              value={formData.mensagem} 
              onChange={handleChange} 
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            Enviar Solicitação
          </button>

        </form>

      </div>

      
      <footer className="footer">
        AUTOTECH
      </footer>

  
      <MenuDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </div>
  );
}