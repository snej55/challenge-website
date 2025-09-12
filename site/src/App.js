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
import HeaderMobileButton from './Components/Global/HeaderMobileButton.js';
import MobileHeader from './Components/Global/MobileHeader.js';

// modules
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  // --------- WIKI JSON DATA --------- //
  // state to store json data
  const [wikiData, setWikiData] = useState(null);

  useEffect(() => {
    fetch("/assets/wiki.json")
      .then(response => response.json())
      .then(data => setWikiData(data))
      .catch(error => console.error(`ERROR: Error fetching wiki data ${error}`))
  }, []);

  // --------- SCROLL TO TOP BUTTON --------- //
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

  // NOTE: useEffect stuff must be above this condition, as useEffect must be same every render
  // wait until wiki data has been loaded
  if (!wikiData) {
    return <div className="loading-splash">Loading...</div>
  }

  // Smooth scroll to top
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let pageComponents = {};
  for (var i = 0; i < wikiData.pages.length; ++i) {
    const obj = wikiData.pages[i];
    const PA = require(`./Components/Wiki/pages/${obj.title}.js`).default;
    const Component = <PA />;
    pageComponents[obj.title] = Component;
  }

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          {/* School Logo */}
          <Link to="/"><img src="/assets/images/CAST_PictureOnly_Logo_nobg.png" alt="cast logo" className="cast-logo-header" /></Link>
          <div className="title-stack">
            <h3 className="header-title"><Link to="/">Cambridge Academy for Science and Technology</Link></h3>
            <h3 className="header-title header-title-mobile"><Link to="/">CAST</Link></h3>
            <h3 className="header-subtitle"><Link to="/">Student Panel</Link></h3> {/* very ugly name, plz change asap */}
          </div>

          {/* Navigation */}
          <nav className="header-navigation">

            <Link to="/flashcards" className='header-nav-text'>Flash cards</Link>
            <Link to="/formtime" className='header-nav-text'>Form time</Link>
            <Link to="/games" className='header-nav-text'>Games</Link>
            <Link to="/wiki/About" className='header-nav-text'>Wiki</Link>

            <a href="https://github.com/snej55/challenge-website"><i className="fa-brands fa-github github-icon header-icon"></i></a>
            <ThemeChanger />
            {/* <HeaderMobileButton /> */}





          </nav>

        </header>
        <main>
          {/* <MobileHeader id="mobile-header" /> */}

          {/* react-router-dom routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/formtime" element={<Formtime />} />
            <Route path="/games" element={<Games />} />
            <Route path="/wiki" element={<Wiki wikiData={wikiData} />}>
              {/* TODO: Autogenerate this */}
              {wikiData.pages.map(obj => <Route path={`/wiki/${obj.title}`} element={<div>{pageComponents[obj.title]}</div>} />)}

              {/* <Route path='/wiki/schooloverview' element={<SchoolOverview />} />
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
              <Route path='/wiki/SparxLogin' element={<SparxLogin />} /> */}
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Routes>

          {/* Scroll to top button */}
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
          {/* <div className='spacer-5'></div> */}
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
