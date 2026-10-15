import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solucoes from './pages/Solucoes';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Orcamento from './pages/Orcamento';
import ClienteArea from './pages/ClienteArea';
import Login from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/orcamento" element={<Orcamento/>} />
        <Route path="/cliente" element={<ClienteArea />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}