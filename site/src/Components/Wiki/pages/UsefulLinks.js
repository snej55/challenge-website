
import './wiki-pages.css'
import './UsefulLinks.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function UsefulLinks() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🔗 Useful Links</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🔗 Useful Links</h1>

            <h2 id="subtitle">Here are some useful links for school</h2>

            <h2 className="paragraph-title">The links:</h2>

            <p><ul>
                <li><a href="https://vert.sh/">https://vert.sh/</a></li>
                <li><a href="/gfx/shadyman/shadyman.html" style={{textDecoration: "none", color: "var(--text-color)"}}>Shadyman</a></li>    
            </ul></p>
        </div>

    );
}
