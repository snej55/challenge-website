import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src="assets/images/CASTlogo.png" alt="cast logo"/>
          <h3 class="header-title">Cambridge Academy for Science and Technology WIKI</h3>
        </header>
        <main>
            <h2>Content to be added:</h2><br />
            <ul>
                <li>School homework/revision websites with info on each of them</li><br />
                <li>Location of useful things, such as water fountains</li><br />
                <li>Basic overview of school rules</li><br />
                <li>uniform and equipment policy</li><br />
                <li>school day timings</li><br />
                <li>other useful info</li><br />
            </ul>
        </main>
        <footer>
            <p>&copy; 2025 Challenge Website!</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
