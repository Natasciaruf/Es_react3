import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';  // Assicurati che questo componente esista
import Counter from './Counter';  // Assicurati che questo componente esista
import ShowGithubUser from './ShowGithubUser';  // Creeremo questo componente
import GithubUserList from './GithubUserList';  // Creeremo questo componente

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Esempio di Routing con React</h1>
        
        {/* Link di navigazione */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Contatore</Link></li>
            <li><Link to="/users">Utenti</Link></li>
          </ul>
        </nav>
        
        <Routes>
          {/* Rotta per il componente Welcome */}
          <Route path="/" element={<Welcome name="Mario Rossi" />} />
          
          {/* Rotta per il componente Counter */}
          <Route path="/counter" element={<Counter />} />
          
          {/* Rotta per la lista degli utenti */}
          <Route path="/users" element={<GithubUserList />}>
            {/* Rotta annidata per visualizzare un utente specifico */}
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>

          {/* Rotta di default per "Pagina non trovata" */}
          <Route path="*" element={<h2>Pagina non trovata</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
