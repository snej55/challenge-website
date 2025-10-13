
import './wiki-pages.css'
import './SchoolOverview.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function SchoolOverview() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🏫 School Overview</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🏫 School Overview</h1>

            <h2 id="subtitle">GCSEs, Level 2s, A-levels, T-levels, and level 3s!</h2>


            
      

            <h2 className="paragraph-title">CAST</h2>

            <p>The Cambridge Academy for Science and Technology is the most cultured secondary school and sixth form in the Cambridgeshire area. With the best </p>
        </div>

    );
}
