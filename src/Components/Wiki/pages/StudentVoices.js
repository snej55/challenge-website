
import './wiki-pages.css'
import './StudentVoices.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function StudentVoices() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>💬 Student Voice</h3>

            <div className="spacer-20"></div>
            <h1 id="title">💬 Student Voice</h1>

            <h2 id="subtitle"><i>*hoarse screaming*</i> <b>CAAN YOOOU HEEEAR MEEEEEEE?!?!?!?</b></h2>

            <h2 className="paragraph-title">Student Council</h2>

            <p>The Sixth form at CAST has an "active" student council, which does some stuff.</p>
            <p>
                The other years don't really do anything, except for bake sales to fund prom.
            </p>

            <img src="/assets/images/donkeeeeey.gif" className="nerd"/>
        </div>

    );
}
