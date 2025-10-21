
import './wiki-pages.css'
import './Contact.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Contact() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📨 Contact Us</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📨 Contact Us</h1>

            <h2 id="subtitle">Here are some contact details in case you want to chat</h2>

            <h2 className="paragraph-title">Emails:</h2>

            <p>You can send stuff to hello@dannygo.net if you really want, but be prepared for rejection. (For bugs and stuff just create an issue on the github).</p>
            <p>If you have any complaints or ransom demands, please forward them to 21tdu@nhlstudents.org and we will hopefully get in touch shortly.</p>
        </div>

    );
}
