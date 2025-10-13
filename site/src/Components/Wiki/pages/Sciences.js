
import './wiki-pages.css'
import './Sciences.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Sciences() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🧪 Sciences</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🧪 Sciences</h1>

            <h2 id="subtitle">explore the beautiful world of sciences</h2>

            <h2 className="paragraph-title">🌿 Biology</h2>
            <p>
                There are a lot of opportunities to learn biology in extracurricular actitivities and clubs at CAST.
            </p>
            <br /><br />

            <h2 className="paragraph-title">🧪 Chemistry</h2>
            <p>
                Ronnie is a brilliant chemistry teacher.
            </p>
            <br /><br />

            <h2 className="paragraph-title">🧑🏼‍🔬 Physics</h2>
            <p>
                Physics a big focus at CAST. Aside from lessons there is Isaac Physics homework, Sparx science homework, 
                <br />
                Challange projects linking to physics, and many more learning opurtunities.
                
            </p>
            <br /><br />
            <p>
                <h4>usefull links:</h4>
                <a href="https://cognitoedu.org/home">cognito - usefull website for science revision</a><br />
                <a href="/gfx/shadyman/shadyman.html">Interactive rigid body physics simulation</a>
            </p>
        </div>

    );
}
