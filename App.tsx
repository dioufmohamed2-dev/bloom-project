import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Vision } from '@/pages/Vision';
import { Projects } from '@/pages/Projects';
import { Values } from '@/pages/Values';
import { Contact } from '@/pages/Contact';
import { Legal } from '@/pages/Legal';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vision" element={<Vision />} />
            <Route path="projects" element={<Projects />} />
            <Route path="values" element={<Values />} />
            <Route path="contact" element={<Contact />} />
            <Route path="legal" element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
