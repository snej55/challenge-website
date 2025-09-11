
import './wiki-pages.css'
import './Miscallaneous.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important }from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Miscallaneous() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>😈 Miscallaneous Info</h3>

            <div className="spacer-20"></div>
            <h1 id="title">😈 Miscallaneous Info</h1>

            <h2 id="subtitle">A page full of random tips and links</h2>

            <h2 className="paragraph-title">The tips:</h2>

            <p>No tips yet HAHAHAHAHAHA!</p>
        </div>

    );
}
