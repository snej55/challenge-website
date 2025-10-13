import './wiki-pages.css'
import './English.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important }from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function English() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📖 English</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📖 English</h1>

            <h2 id="subtitle">This is the subtitle, change me</h2>

            <h2 className="paragraph-title">This is paragraph title</h2>

            <p>This is the paragraph</p>
        </div>

    );
}
