import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.tsx'
import './login.txs';
import './play.tsx';
import Regler from './pages/rules.tsx';
import SpillerForm from './pages/login';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<SpillerForm/>} />
        <Route path="/rules" element={<Regler/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
/*export default function App() {
  return (
    <>
        
        <main>
          <h1>Velkommen til VIDEO POKER</h1>
          <SpillerForm />

          <section>

          </section>
        </main>
    </>)
   
}*/
