
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

            <h2 className="paragraph-title">No tips yet :(</h2>
            <p>Avast, ye scurvy dogs! <br /> <br />Thee shalt anon suff'r in silence, despairing in the fact yond this page may nev'r bewray t's secrets to thy greedy eyes, thee scurvy mongrel!
                <br /> <br />
                thee wisheth to continueth? bwahahaha! thou art a meddling daw, thee falsing sacketh of filth.  Forswear thee to me? thy bluff is a joketh! a fusty sacketh of turnips is m're fiteth to uncov'r the secrets of this page than thee.  Begone! thee bottom feeding fiend! thou art a beetle brain'd bootless lout!</p>
        </div>

    );
}
