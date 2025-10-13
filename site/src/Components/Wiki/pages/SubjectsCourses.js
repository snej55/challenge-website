
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

            While you get to choose between many subjects, there are a few you just <i>have</i> to take.
            <h3>English</h3>
            A must-have at any school, even a UTC, English is a valuable lesson to learn, from  bolstering CVs to helping you better appreciate what you read.
            In CAST, just like anywhere else, you'll learn two different types of english: English Language, and English Literature. 
            To learn more, head over to the English page elsewhere in the wiki!
            <h3>Maths</h3>
            Maths is a no-brainer for anyone looking into STEM - serving as the foundation for every bit of research out there.
            At CAST, you'll learn both standard GCSE Maths and the additional GCSE STatistics, usually reserved for the smartest of most schools!
            Here, the teachers go above and beyond in every way to help you learn.
            Some of the top Y11s even get to study Further Maths, pushing beyond conventional boundaries to reach into the world of A-levels.
            To find out more, just dash to the Maths page elsewhere in the wiki!
            <h3>Science!</h3>
            For any STEM students, science teaches you what you really want and need to know - it really makes up everything.
            All students at CAST are expected to take Triple Science, be that Foundation or Higher.
            It's a great way to learn more and prepare for the future!
            To look further, just dive in at the Sciences page in this very wiki!
                        
        </div>

    );
}
