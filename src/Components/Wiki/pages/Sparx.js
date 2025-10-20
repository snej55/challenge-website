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

            <h2 id="subtitle">The 'Spark' of inspiration for hundreds of students!</h2>

            <h2 className="paragraph-title">Maths Homework</h2>

            <p>Our benevolent teachers set us 6 sections of compulsory Maths homework every week - If you can't get it done the teachers and staff will support you, as will the website itself.
                There are even subject support sessions for those who struggle!
            </p>

            <img src="../assets/images/sparx_screenie.png" className="sparx-screenshot"/>

            <p>
                <i>The more mathematically minded among you may enjoy solving the sample question above.</i> All questions come with a bookwork code, so those who wish to practice showing working for exams can jot down their answers and input them in the appropriate points, to better prepare you for the real world.
            </p>
            <br/>

            <h2 className="paragraph-title">Science Homework</h2>
            <p>
                Given how helpful Sparx is for students, we also get to complete science sparx as well! - Sparx Science is basically the same as Sparx maths, but with Biology, Physics and Chemistry exam style questions instead.
            </p>

            <br></br>
            <h2 className="subtitle">Some useful info:</h2>
            <br></br>
            <ul>
                <li><a href="https://uk.trustpilot.com/review/sparx-learning.com">https://uk.trustpilot.com/review/sparx-learning.com</a></li>
            </ul>
            <br></br>
            {/* invisible gap */}
            ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ 
        </div>

    );
}
