
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
            <p>If you're interested in complex calculations, detangling formulas and algorithms, or simply learning how to use these skills in everyday life, you're in the right place!</p>

            <h2 className="paragraph-title">How do we study it?</h2>

            <p>Every student in CAST is expected to take two GCSEs in the area - regular maths, and statistics.</p>
            <p>However, in Y11, those in the top set of the four are also allowed to take Further Maths - a thrilling window into the world of A-level arithmetic and beyond!</p>
            <p>Fancy a quick rundown on each of them, while you're here?</p>
            <p>I'll take that as a yes! Off we go!</p>

            <h2 className="paragraph-title">Maths</h2>

            <p>Basic Maths is one of the most important things you'll study here at CAST - those who fail it are expected to resit it alongside their A-levels.</p>
            <p>For that reason, its pretty important to get good at it, especially if you're looking into a career in science; Maths is a must-have.</p>
            <p>Fortunately, maths isn't too tough. The teachers here are top-notch at helping struggling students, so you'll be fine as long as you give it your best shot and don't get distracted.</p>
            <Warning><Warning><p>Please show your working, though, or the head of Maths Ysanne may get angry. Really, really angry...</p></Warning></Warning>

            <h2 className="paragraph-title">Statistics</h2>

            <p>Alongside the theoretical focus of regular maths, you also get to study Statistics - the application of maths in the real world. Aren't you lucky!</p>
            <p>It's mostly focussed around averages and tables - interpreting data sets, drawing graphs, the lot.</p>
            <p>While not as important as Maths itself, statistics is still invaluable for those looking to apply their numbers in the real world.</p>
            <p>Don't worry unduly though. A lot of students at other schools don't take Statistics, so struggling with weighted means and grouped frequency won't harm you overmuch. (Still best to get it if you can, though)</p>

            <h2 className="paragraph-title">Further Maths</h2>

            <p>From binomials to cubic sequences, Further Maths is a challenging task even for the best, the pinnacle of what GCSE Maths can teach.</p>
            <p>Don't feel scared, though - it's not too different from regular maths. Just a tad more advanced, but a lot less content.</p>
            <p>This means you can really focus on what you do cover, and master it to the fullest extent. </p>
        </div>

    );
}
