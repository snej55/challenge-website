
import './wiki-pages.css'
import './Mathematics.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Mathematics() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🧮 Mathematics</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🧮 Mathematics</h1>

            <h2 id="subtitle">Always remember: the square of this webpage is equal to the sum of all uncountable infinities.</h2>


            
      

            <h2 className="paragraph-title">What is Maths?</h2>

            <p>Mathematics is the fundamental language of the universe. Without it, we simply wouldn't exist. So at CAST, everyone studies it in rigorous detail, with three of our four sets studying Higher Tier maths at GCSE.</p>
        </div>

    );
}
