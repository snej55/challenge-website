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
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🪓 Punishment</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🪓 Punishment</h1>

            <h2 id="subtitle">Sometimes, they have to get a little bit naughty...</h2>

            <h2 className="paragraph-title">Warnings</h2>

            <p>As simple as it may sound, this tried and tested method is the first - and very often last - technique employed to get students to behave.</p>
            <p>Whether throwing things across the room or simply not listening, this is always the first step deployed before any actual punishment.</p>
            <p>As they are not recorded or acted upon, they represent a way for students to understand their wrongdoing and improve without the need for unnecessary suffering.</p>
            <Warning><p>However, for extreme cases, they can be escalated directly to the next step... So don't take a second chance for granted, or you may regret it!</p></Warning>
            <br/>
            <h2 className="paragraph-title">Reflection</h2>
            <p>Sometimes, the method of asking people nicely just doesn't work. Thats where these come in.</p>
            <p>On the ground floor, there lies the reflection room. A dedicated space for distracting or overstimulated (evil) students to have independent study to do homework or revision while being assisted by a trained support team.</p>
            <p>They will remain there for a set period of time, usually no longer then an hour depending on the misdeed.</p>
            <br/>
            <h2 className="paragraph-title">Detention</h2>
            <p>Sometimes, the school must go beyond simply preventing students from affecting others and actively teaching them the errors of their ways.</p>
            <p>When assigned a detention, students must attend at breaktime, lunchtime or after school, and once again, must complete homework or revision for a set amount of time.</p>
            <p>They are sometimes passed out for serious misdeeds, but are most commonly used for students who have failed to complete homework, who are expected to stay until the abandoned task has been completed.</p>
            <br/>
        </div>

    );
}
