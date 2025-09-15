
import './wiki-pages.css'
import './SupportWellbeing.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function SupportWellbeing() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🆘 Support & Wellbeing</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🆘 Support & Wellbeing</h1>

            <h2 id="subtitle">This is the mental health section.</h2>


            
      

            <h2 className="paragraph-title">What is mental health?</h2>

            <p>Mental health is a state of overall happiness, distinct from the highs and lows of life. If you, or someone you know, is struggling with mental health issues, do not be ashamed. We are here for you. However, if you or that person are just a bit unhappy with the game of life, <b>toughen up!</b></p>
        </div>

    );
}
