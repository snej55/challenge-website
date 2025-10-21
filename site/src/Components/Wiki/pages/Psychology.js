import './wiki-pages.css'
import './Psychology.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important }from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Psychology() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🧠 Psychology</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🧠 Psychology</h1>

            <h2 id="subtitle">From conformity to consent, we've got everything</h2>
            <br/>
            <h2 className="paragraph-title">A rough overview</h2>
            <p>Psychology is one of the options to take for GCSE, and is split into two sections, each covering a paper, as per AQA standards.</p>
            <br/>
            <h2 className="paragraph-title">Paper 1: Cognition and Behaviour</h2>
            <h3>1: Memory</h3>
            <p>2: Perception</p>
            <p>3: Development</p>
            <p>4: Research methods</p>
            <br/>
            <h2 className="paragraph-title">Paper 2: Social context and Behaviour </h2>
            <p>1: Social influence</p>
            <p>2: Language and thought</p>
            <p>3: Brain and neuropsychology</p>
            <p>4: Psychological problems</p>
        </div>

    );
}
