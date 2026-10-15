import React from 'react';
import { Link } from 'react-router-dom';

export default function Catalogo() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Navbar Padrão */}
      <header className="flex justify-between items-center py-4 px-6 border-b border-[var(--border)] bg-[var(--bg)]">
        <div className="font-bold text-xl tracking-wider text-[var(--text-h)]">
          AutoTech
        </div>
        <nav className="flex gap-4 text-sm font-medium">
          <Link to="/" className="hover:text-[var(--text-h)]">Home</Link>
          <Link to="/solucoes" className="hover:text-[var(--text-h)]">Soluções</Link>
          <Link to="/produtos" className="text-[var(--text-h)] font-semibold">Produtos</Link>
          <Link to="/sobre" className="hover:text-[var(--text-h)]">Sobre</Link>
          <Link to="/orcamento" className="hover:text-[var(--text-h)]">Orçamento</Link>
          <Link to="/cliente" className="hover:text-[var(--text-h)]">Área do Cliente</Link>
        </nav>
        <Link to="/login" className="px-4 py-2 rounded text-xs font-bold tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition">
          LOGIN
        </Link>
      </header>

      {/* Conteúdo do Catálogo */}
      <main className="flex-1 px-8 py-10 max-w-6xl mx-auto w-full text-left">
        <h1 className="text-3xl font-bold text-[var(--text-h)] mb-2">Catálogo de Produtos</h1>
        <p className="text-[var(--text)] mb-8">Equipamentos de alta performance para automação e robótica industrial.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card Produto 1 */}
          <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="bg-[var(--code-bg)] h-40 rounded mb-4 flex items-center justify-center text-sm font-mono text-[var(--text)]">
                [ Imagem Robô CR-10 ]
              </div>
              <h2 className="text-lg font-bold text-[var(--text-h)] mb-2">Robô Colaborativo CR-10</h2>
              <p className="text-sm text-[var(--text)] mb-4">Cobot de alta precisão com alcance de 950mm e carga útil de 10kg.</p>
            </div>
            <Link 
              to="/produto/cr-10" 
              className="w-full text-center px-4 py-2 rounded font-medium text-white bg-blue-600 hover:bg-blue-700 transition text-sm"
            >
              VER DETALHES &gt;
            </Link>
          </div>

          {/* Card Produto 2 */}
          <div className="border border-[var(--border)] rounded-lg p-6 bg-[var(--bg)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="bg-[var(--code-bg)] h-40 rounded mb-4 flex items-center justify-center text-sm font-mono text-[var(--text)]">
                [ Imagem Sensor IoT ]
              </div>
              <h2 className="text-lg font-bold text-[var(--text-h)] mb-2">Sensor de Vibração IoT-V900</h2>
              <p className="text-sm text-[var(--text)] mb-4">Monitoramento preditivo em tempo real para eixos e motores industriais.</p>
            </div>
            <Link 
              to="/produto/iot-v900" 
              className="w-full text-center px-4 py-2 rounded font-medium text-white bg-blue-600 hover:bg-blue-700 transition text-sm"
            >
              VER DETALHES &gt;
            </Link>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-6 border-t border-[var(--border)] text-xs text-[var(--text)] text-center">
        © 2026 AutoTech Indústria 4.0. Todos os direitos reservados.
      </footer>
    </div>
  );
}