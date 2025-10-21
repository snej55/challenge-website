
import './wiki-pages.css'
import './Transport.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Transport() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🚌 Transport</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🚌 Transport</h1>

            <h2 id="subtitle">Public Transport information</h2>


            
      

            <h2 className="paragraph-title">Here's yo links: </h2>


            <p>Just go here honestly: <a href="https://www.stagecoachbus.com">https://www.stagecoachbus.com</a></p>
        </div>

    );
}
