
import './wiki-pages.css'
import './Sports.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Sports() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🏃‍♂️ Sports & PE</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🏃‍♂️ Sports & PE</h1>

            <h2 id="subtitle">We love tag rugby 😬</h2>


            
      

            <h2 className="paragraph-title">Physical Education at CAST</h2>

            <p>P.E at CAST is pretty basic - we do mainly capture the flag and tag rugby in Year 9, football & cricket and tag ruby in Year 10, and football and tag rugby in Year 11.
                When it rains, we do dodgeball or table tennis in the lecture theatre. The school also has a small gym on the first floor, which is open to sixth form and Y11 during lunchtime.
            </p>

            <img src="/assets/images/rugby-tackle.gif" className="rugby-tackle" />
        </div>

    );
}
