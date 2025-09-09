// styles
import './App.css';
import './global.css'

// different pages
import { Flashcards } from './Components/Flashcards';
import { Formtime } from './Components/Formtime';
import { Games } from './Components/Games';
import { Wiki } from './Components/Wiki';
import { Home } from './Components/Home';
import { NoMatch } from './Components/NoMatch';

// ALL THE WIKI PAGES
import { About } from './Components/Wiki/About.js';
import { SchoolOverview } from './Components/Wiki/SchoolOverview.js';
import { SubjectsCourses } from './Components/Wiki/SubjectsCourses.js';
import { Sciences } from './Components/Wiki/Sciences.js';
import { ComputerScience } from './Components/Wiki/ComputerScience.js';
import { Mathematics } from './Components/Wiki/Mathematics.js';
import { Sports } from './Components/Wiki/Sports.js';
import { Geography } from './Components/Wiki/Geography.js';
import { Clubs } from './Components/Wiki/Clubs.js';
import { Achievements } from './Components/Wiki/Achievements.js';
import { Exams } from './Components/Wiki/Exams.js';
import { LunchMenu } from './Components/Wiki/LunchMenu.js';
import { Transport } from './Components/Wiki/Transport.js';
import { SchoolPolicies } from './Components/Wiki/SchoolPolicies.js';
import { StudentVoices } from './Components/Wiki/StudentVoices.js';
import { SupportWellbeing } from './Components/Wiki/SupportWellbeing.js';
import { UsefulLinks } from './Components/Wiki/UsefulLinks.js';
import { Contact } from './Components/Wiki/Contact.js';

// modules
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* School Logo */}
          <img src="/assets/images/CAST_PictureOnly_Logo.png" alt="cast logo" className="cast-logo-header" />
          <h3 class="header-title">Cambridge Academy for Science and Technology WIKI</h3>
          {/* Navigation */}
          <nav class="header-navigation">
            {/* <Link to="/">Home</Link> */}
            <Link to="/flashcards">Flash cards</Link>
            <Link to="/formtime">Form time</Link>
            <Link to="/games">Games</Link>
            <Link to="/wiki/About">Wiki</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/formtime" element={<Formtime />} />
            <Route path="/games" element={<Games />} />
            <Route path="/wiki" element={<Wiki />}>                                                                                                                             ✔  09:42:47
              <Route path='/wiki/about' element={<About />} />
              <Route path='/wiki/schooloverview' element={<SchoolOverview />} />
              <Route path='/wiki/subjectscourses' element={<SubjectsCourses />} />
              <Route path='/wiki/sciences' element={<Sciences />} />
              <Route path='/wiki/computerscience' element={<ComputerScience />} />
              <Route path='/wiki/mathematics' element={<Mathematics />} />
              <Route path='/wiki/sports' element={<Sports />} />
              <Route path='/wiki/geography' element={<Geography />} />
              <Route path='/wiki/clubs' element={<Clubs />} />
              <Route path='/wiki/achievements' element={<Achievements />} />
              <Route path='/wiki/exams' element={<Exams />} />
              <Route path='/wiki/lunchmenu' element={<LunchMenu />} />
              <Route path='/wiki/transport' element={<Transport />} />
              <Route path='/wiki/schoolpolicies' element={<SchoolPolicies />} />
              <Route path='/wiki/studentvoices' element={<StudentVoices />} />
              <Route path='/wiki/supportwellbeing' element={<SupportWellbeing />} />
              <Route path='/wiki/usefullinks' element={<UsefulLinks />} />
              <Route path='/wiki/contact' element={<Contact />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
        <footer>
          {/* Change Me! */}
          <h3 class="footer-title">"I am a famous quote, change me" | Web Devlopers</h3>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
