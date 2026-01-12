import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tools from './pages/Tools';

import Blog from './pages/Blog';
import WomenWealth from './pages/WomenWealth';
import Process from './pages/Process';
import InvestmentManagement from './pages/services/InvestmentManagement';
import TaxPlanning from './pages/services/TaxPlanning';
import RiskManagement from './pages/services/RiskManagement';
import RetirementPlanning from './pages/services/RetirementPlanning';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/women-wealth" element={<WomenWealth />} />
        <Route path="/process" element={<Process />} />
        <Route path="/services/investment-management" element={<InvestmentManagement />} />
        <Route path="/services/tax-planning" element={<TaxPlanning />} />
        <Route path="/services/risk-management" element={<RiskManagement />} />
        <Route path="/services/retirement-planning" element={<RetirementPlanning />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />

        <Route path="/tools/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
