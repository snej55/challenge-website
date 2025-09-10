// styles
import './App.css';
import './Components/Wiki/pages/global.css'

// different pages
import { Flashcards } from './Components/Flashcards';
import { Formtime } from './Components/Formtime';
import { Games } from './Components/Games';
import { Wiki } from './Components/Wiki';
import { Home } from './Components/Home';
import { NoMatch } from './Components/NoMatch';
// Small components
import ThemeChanger from './Components/Global/theme.js';

// ALL THE WIKI PAGES

import { About } from './Components/Wiki/pages/About.js';
import { SchoolOverview } from './Components/Wiki/pages/SchoolOverview.js';
import { SubjectsCourses } from './Components/Wiki/pages/SubjectsCourses.js';
import { Sciences } from './Components/Wiki/pages/Sciences.js';
import { ComputerScience } from './Components/Wiki/pages/ComputerScience.js';
import { Mathematics } from './Components/Wiki/pages/Mathematics.js';
import { Sports } from './Components/Wiki/pages/Sports.js';
import { Geography } from './Components/Wiki/pages/Geography.js';
import { Clubs } from './Components/Wiki/pages/Clubs.js';
import { Achievements } from './Components/Wiki/pages/Achievements.js';
import { Exams } from './Components/Wiki/pages/Exams.js';
import { LunchMenu } from './Components/Wiki/pages/LunchMenu.js';
import { Transport } from './Components/Wiki/pages/Transport.js';
import { SchoolPolicies } from './Components/Wiki/pages/SchoolPolicies.js';
import { StudentVoices } from './Components/Wiki/pages/StudentVoices.js';
import { SupportWellbeing } from './Components/Wiki/pages/SupportWellbeing.js';
import { UsefulLinks } from './Components/Wiki/pages/UsefulLinks.js';
import { Contact } from './Components/Wiki/pages/Contact.js';

// modules
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function App() {
  // State to control button visibility
  const [showBtn, setShowBtn] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* School Logo */}
          <Link to="/"><img src="/assets/images/CAST_PictureOnly_Logo_nobg.png" alt="cast logo" className="cast-logo-header" /></Link>
          <div className="title-stack">
            <h3 className="header-title">Cambridge Academy for Science and Technology</h3>
            <h3 className="header-subtitle">Student Panel</h3>
          </div>




          {/* Navigation */}
          <nav className="header-navigation">

            <Link to="/flashcards">Flash cards</Link>
            <Link to="/formtime">Form time</Link>
            <Link to="/games">Games</Link>
            <Link to="/wiki/About">Wiki</Link>
            <a href="https://github.com/snej55/challenge-website"><i class="fa-brands fa-github github-icon header-icon"></i></a>
            <ThemeChanger />


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
          <button
            onClick={topFunction}
            id="myBtn"
            title="Go to top"
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              zIndex: 1000,
              opacity: showBtn ? 1 : 0,
              pointerEvents: showBtn ? 'auto' : 'none',
              transition: 'opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease, background-color 0.5s ease'
            }}
          >
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </main>
        <footer>
          {/* <h3 className="footer-title">Hi</h3> */}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
