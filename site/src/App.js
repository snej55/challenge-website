// styles
import './App.css';

// different pages
import { Flashcards } from './Components/Flashcards';
import { Formtime } from './Components/Formtime';
import { Games } from './Components/Games';
import { Wiki } from './Components/Wiki';
import { Home } from './Components/Home';

// modules
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* School Logo */}
          <img src="assets/images/CASTlogo.png" alt="cast logo" className="header-logo"/>
          {/* <h3 class="header-title">Cambridge Academy for Science and Technology WIKI</h3> */}
          {/* Navigation */}
          <nav class="header-navigation">
            <Link to="/">Home</Link>
            <Link to="/flashcards">Flash cards</Link>
            <Link to="/formtime">Form time</Link>
            <Link to="/games">Games</Link>
            <Link to="/wiki">Wiki</Link>
          </nav>
        </header>
        <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/formtime" element={<Formtime />} />
              <Route path="/games" element={<Games />} />
              <Route path="/wiki" element={<Wiki />} />
            </Routes>
        </main>
        <footer>
            <p>&copy; 2025 Challenge Website!</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
