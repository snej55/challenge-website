
import './wiki-pages.css'
import './Clubs.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Clubs() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🧑‍🔬 Clubs & Societies</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🧑‍🔬 Clubs & Societies</h1>

            <h2 id="subtitle">CAST has many clubs and societies to join. Here are some of the best</h2>


            
      

            <h2 className="paragraph-title">Chess Club</h2>

            <p>Checkmate! Chess is the game of Champions. Legends like Bobby Fischer, Garry Kasparov, and Magnus Carlson all made their chess champion careers by playing chess. In period 6 on a Wednesday in Student Services, maybe you can join their ranks.</p>

            <h2 className="paragraph-title">Astronomy Club</h2>

            <p>Astronomy is the oldest science, outdating even physics and maths. Birds use it to navigate, molluscs use its lunar tides to survive, and we use it to pass the time for an hour a week and get a GCSE at the end of it!</p>

            <h2 className="paragraph-title">Astro</h2>

            <p>Football! Volleyball! Crazy Mixes! Sport is a matter of dog eat dog or dog be eaten by dog. Will you triumph at lunch, or will you fall foul?<p/>

            
        </div>

    );
}
