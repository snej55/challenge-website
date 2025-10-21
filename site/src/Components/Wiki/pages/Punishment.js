import './wiki-pages.css'
import './Punishment.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important }from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Punishment() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>Because not everything can go right</h3>

            <div className="spacer-20"></div>
            <h1 id="title">Punishment</h1>

            <h2 id="subtitle">Sometimes, they have to get a little bit naughty...</h2>

            <h2 className="paragraph-title">Warnings</h2>

            <p>As simple as it may sound, this tried and tested method is the first - and very often last - technique employed to get students to behave.</p>
            <p>Whether throwing things across the room or simply not listening, this is always the first step deployed before any actual punishment.</p>
            <p>As they are not recorded or acted upon, they represent a way for students to understand their wrongdoing and improve without the need for unnecessary suffering.</p>
            <Warning>However, for extreme cases, they can be escalated directly to the next step... So don't take a second chance for granted, or you may regret it!</Warning>
        </div>

    );
}
