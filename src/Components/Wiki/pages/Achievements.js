
import './wiki-pages.css'
import './Achievements.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Achievements() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🏆 Achievements</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🏆 Achievements</h1>

            <h2 id="subtitle">From weekly stars to yearly sparx, the medals just keep on coming.</h2>

            <h2 className="paragraph-title">Positive points</h2>

            <p>Positive points are symbols of dedication and resilience here at CAST, with teachers logging them on Arbor for positive actions, whether that be for one student, a small group, or even a whole class!</p>
            <p>Earning positive points is no easy task, but hopefully most of you will begin to accumulate them throughout the year.</p>
            <p>At the end of each term, those with the most are awarded prizes at a special assembly. What more could you want? (For those disappointed, the prize also comes with a significant amount of chocolate, which may be more to your taste)</p>
            <p>Just keep on learning, and you'll keep on earning!</p>

            <br/>
            <h2 className="paragraph-title">Star of the Week</h2>

            <p>Some of you may be thinking you don't want to wait all term for recognition. Fear not, for this is where the Star of the Week awards come in!</p>
            <p>The Star of the Week is one of the most prestigious awards to be given here at CAST, and earns the lucky bearer more than a few envious stares, alongside a pack of Haribos from Andrew, who hands out the awards.</p>
            <p>One student from each of the four forms in each year receives the award once a week, having been selected by their form tutors.</p>
            <p>It is announced at the end of assembly, and is highly regarded as the culmination of the struggles of many.</p>
            <br/>
            <h2 className="paragraph-title">Core values</h2>
            <p>At CAST, there are three core values held high above others: Respect, Resilience, and Responsibility.</p>
            <p>At the end of term assembly, awards are given to the students that most embodied each of the values.</p>
            <p>Multiple students are selected for each, and are given certificates to show to later employers as proof of their decency and dedication.</p>
            <br/>
            <h2 className="paragraph-title">Miscellaneous awards</h2>
            <p>Alongside the major awards mentioned, there are others just as prestigious but too many to name.</p>
            <p>Sparx top achievers, GCSE Pod best listeners, you name it, and you'll be awarded it.</p>
            <p>So get learning, and win some awards to remember!</p>
            <br/>
        </div>

    );
}
