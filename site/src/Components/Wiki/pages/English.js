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

            <h2 id="subtitle">Aimee doth murder sleep!</h2>

            <h2 className="paragraph-title">Texts you will study (note: not all of them are novels</h2>
            
            <h3>Year 9</h3><br></br>

            <p>Iridescent Adolescent by the English Media Centre (given to you), The Stories of Sherlock Holmes by Sir Arthur Conan Doyle, The Crucible by Arthur Miller, romantic poetry (given to you), and Romeo and Juliet by William Shakespeare</p><br></br>

            <h3>Year 10</h3><br></br>

            <p>Power poetry (given to you), A Christmas Carol by Charles Dickens, An Inspector Calls by JB Priestley, Conflict poetry (given to you), Unseen poetry (given to you), and Macbeth by William Shakespeare.</p>
        </div>

    );
}
