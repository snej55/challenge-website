
import './wiki-pages.css'
import './SubjectsCourses.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function SubjectsCourses() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📖 Subjects & Courses</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📖 Subjects & Courses</h1>

            <h2 id="subtitle">What can you learn, and how far can you go?</h2>

            <h2 className="paragraph-title">Mandatory subjects</h2>

            <p>While you get to choose between many subjects, there are a few you just <i>have</i> to take.</p>
        </div>

    );
}
