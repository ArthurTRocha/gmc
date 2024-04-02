import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/pages/Home';
import Servicos from '../src/pages/Servicos';
import SobreNos from '../src/pages/SobreNos';
import TrabalheConosco from '../src/pages/TrabalheConosco';
import Peças from '../src/pages/Peças';
import Obrigado from '../src/pages/Obrigado';
import PainelADM from '../src/pages/PainelADM';
import Painel from '../src/pages/Painel';
import Pagina404 from '../src/pages/Pagina404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/TrabalheConosco" element={<TrabalheConosco />} />
        <Route path="/Peças" element={<Peças />} />
        <Route path='/obrigado' element={<Obrigado/>} />
        <Route path='/paineladm' element={<PainelADM/>} />
        <Route path='/painel' element={<Painel/>} />
        <Route path='*' element={<Pagina404/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
