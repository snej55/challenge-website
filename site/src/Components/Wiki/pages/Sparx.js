import './wiki-pages.css'
import './Sparx.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Sparx() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>✨ Sparx Homework</h3>

            <div className="spacer-20"></div>
            <h1 id="title">✨ Sparx Homework</h1>

            <h2 id="subtitle">Don't look at the trustpilot reviews...</h2>

            <h2 className="paragraph-title">Maths Homework</h2>

            <p>Our ever so benevolent teachers set us 6 sections of compulsorary Maths homework every week - you must answer every question
                correctly by the deadline each week or else you shall suffer <b>DETENTION</b> (study support).
            </p>

            <img src="/assets/images/sparx_screenie.png" className="sparx-screenshot"/>

            <p>
                <i>(See above what a typical sparx question looks like)</i> All sparx questions have a "bookwork code", which you used to have to write down for each question, or else you would have to redo that question when it asked for it's answer. However, you youngsters have it easy now, as this is no longer necessary 🎉.
            </p>
            <br/>

            <h2 className="paragraph-title">Science Homework</h2>
            <p>
                Our lovely teachers have also determined that we need more Sparx in the form of Science homework - Sparx Science is basically the same as Sparx maths, but with Biology, Physics and Chemistry exam style questions instead.
            </p>

            <br></br>
            <h2 className="subtitle">Some useful info:</h2>
            <br></br>
            <ul>
                <li><a href="https://uk.trustpilot.com/review/sparx-learning.com" target="_blank">https://uk.trustpilot.com/review/sparx-learning.com</a></li>
            </ul>
            <br></br>
            {/* invisible gap */}
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        </div>

    );
}
