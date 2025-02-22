import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage'; 
import Assenza from './ChiamateHttp/assenza';
import Docente from './ChiamateHttp/docente';
import Studente from './ChiamateHttp/studente';
import Progetto from './ChiamateHttp/progetto';
import Wp from './ChiamateHttp/wp';
import Esame from './ChiamateHttp/esame';
import './App.css';
import logo from './academy.png';

function App() {
  return (
    <Router>
      <header className="header">
     
        <div className="logo-container">
          <img src={logo} alt="Logo" className="header-logo" />
        </div>

      
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/wp" className="nav-item">Elenco WP</Link></li>
            <li><Link to="/assenza" className="nav-item">Elenco Assenze</Link></li>
            <li><Link to="/docente" className="nav-item">Elenco Docenti</Link></li>
            <li><Link to="/studente" className="nav-item">Elenco Studenti</Link></li>
            <li><Link to="/progetto" className="nav-item">Elenco Progetti</Link></li>
            <li><Link to="/esame" className="nav-item">Elenco Esami</Link></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wp" element={<Wp />} />
          <Route path="/assenza" element={<Assenza />} />
          <Route path="/docente" element={<Docente />} />
          <Route path="/studente" element={<Studente />} />
          <Route path="/progetto" element={<Progetto />} />
          <Route path="/esame" element={<Esame />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
