
import './wiki-pages.css'
import './Sports.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Sports() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🏃‍♂️ Sports & PE</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🏃‍♂️ Sports & PE</h1>

            <h2 id="subtitle">HANNAH IS THE GOAT!!!</h2>


            
      

            <h2 className="paragraph-title">Hannah is the best PE teacher in the school!</h2>

            <p>Ok, yes, she is the only PE teacher in the school, but she is genuinely quite good. She doesn't have time each week to actually teach us (not her fault tho), so she just gets us to play sport and active games. It's great! usually.</p>
        </div>

    );
}
