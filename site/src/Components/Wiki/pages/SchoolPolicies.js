
import './wiki-pages.css'
import './SchoolPolicies.css';

// Import all the cards
import { Info } from '../../Global/InfoCardReact.js'
import { Tips } from '../../Global/InfoCardReact.js'
import { Important } from '../../Global/InfoCardReact.js'
import { Warning } from '../../Global/InfoCardReact.js'

export function SchoolPolicies() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📄 School Policies</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📄 School Policies</h1>

            <h2 id="subtitle">This section explains the school rules and policies</h2>




            <h2 className="paragraph-title">Uniform</h2>
            <Info>
                <p>Login to sparx using your Microsoft account</p>
            </Info>
            <Tips>
                <p>Choose a easy to remember but hard to guess password!</p>
            </Tips>
            <Important>
                <p>Finish your Sparx Science before Monday each week</p>
            </Important>
            <Warning>
                <p>Phones are banned anywhere in school</p>
            </Warning>
            <p>This is the paragraph</p>
        </div>

    );
}

// <div>
//     📄 School Policies
//     <h1>Uniform</h1>
//     <h3>Here at CAST, the uniform is quite restricted, but comfortable and stylish nonetheless.</h3>
//     <ul>
//         <li>We are expected to wear grey trousers, or grey shorts during the warm times of year.</li>
//         <li>White shirts, short or long sleeve, are allowed, but no polo shirts.</li>
//         <li>The school jumper (the only one allowed) is a grey v-neck, and bears the school logo on the front.</li>
//         <li>Shoes are required to be solid black, no coloured insignia or logos, but other than that there are no restrictions.</li>
//         <li>Non-uniform days are relatively frequent, usually to raise money for charity, and allow everyone to enjoy themselves. Have fun!</li>
//     </ul>
// </div>