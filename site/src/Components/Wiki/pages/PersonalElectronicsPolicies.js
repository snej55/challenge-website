import './wiki-pages.css'
import './PersonalElectronicsPolicies.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important }from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function PersonalElectronicsPolicies() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>💻 Personal Electronics Policies</h3>

            <div className="spacer-20"></div>
            <h1 id="title">💻 Personal Electronics Policies</h1>

            <h2 id="subtitle">This section explains regulations regarding electric devices</h2>

            <h2 className="paragraph-title">Phones and other personal devices</h2>

            <p>The school policies state that personal devices such as phones, tablets, and other devices are not allowed to be used on school premises during Break and Lunch time.</p>
            <p>If you feel the need to contact someone, such as a member of family, please do so via the school office, and tell those you know to send messages to the school rather than directly to your phone</p>
            <p>The only times at which you are allowed to use your phones or similar devices are before and after the school day, not during</p>
            <i><p>Y11s are no longer allowed to use their phones at break times due to difficulties.<b>Please blame the 6th formers.</b></p></i>
            <Tips><p>However, for Y11s who are allowed to leave the school, there are no restrictions regarding device usage outside the school grounds</p></Tips>
            

            <h2 className="paragraph-title">Laptops and other personal devices</h2>

            <p>However, those with permission, due to issues such as writing speed, are allowed to type instead of writing in lessons.</p>
            <p>Please see the SEND team in the canteen if you think you qualify for this.</p>
            <i><p>Due to students abusing the privilege, previous legislation allowing students to do work during break times has been removed. </p></i>
            <p>If you wish to study in school, there is a designated study space for use after school for those who sign up, next to the information desk.</p>
            <p></p>
            <p></p>
        </div>

    );
}
