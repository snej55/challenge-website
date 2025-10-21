
import './wiki-pages.css'
import './SchoolOverview.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function SchoolOverview() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🏫 School Overview</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🏫 School Overview</h1>

            <h2 id="subtitle">What do we do here, and where did we get such a funny name?</h2>

            <h2 className="paragraph-title">CAST</h2>

            <p>For those who are wondering, the name stands for Cambridge Academy of Science and Technology.</p>
            <p>We're a UTC. That means that we study certain subjects in far more detail, while others are erased from the syllabus.</p>
            <p>For those who were wondering, we mostly focus on the sciences here at CAST, while subjects such as the Arts or languages are virtually unheard of.</p>
            <Warning><p>If you couldn't guess that from the name, CAST may not be the right school for you. I'd suggest the CRC Bricklaying or Beauty therapy courses instead. Just saying.</p></Warning>
            <h2 className="paragraph-title">School Spirit</h2>
            <p>For a school focussed on scientific advancement, CAST, has a surprising amount of this.</p>
            <p>With weekly assemblies on important values like kindness and collaboration, and a familiar, peer-to-peer relationship between most teachers and students due to the small school size, CAST has a lot to offer that some might not expect.</p>
            <br/>
        </div>

    );
}
