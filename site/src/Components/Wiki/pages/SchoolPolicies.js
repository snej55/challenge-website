
import './wiki-pages.css'
import './SchoolPolicies.css';

// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export function SchoolPolicies() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📄 School Policies</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📄 School Policies</h1>

            <h2 id="subtitle">This section explains the school rules and policies</h2>




            <h2 className="paragraph-title">School Uniforms - Non Sixth-form</h2>

            <h3>Allowed clothing</h3>
            <div className='spacer-20'></div>
            <p>Students are expected to wear grey trousers, or grey shorts during the warm times of year.</p>
            <p>White shirts, short or long sleeve, are allowed, but no polo shirts.</p>
            <p>The school jumper is a grey v-neck, and bears the school logo on the front(Must be purchased from SWI - details below).*</p>
            <p>Shoes are required to be solid black, no coloured insignia or logos, but other than that there are no restrictions.</p>
            <div className='spacer-20'></div>
            <Info>
                <p><i>Our uniform supplier is Sportswear International Ltd (SWI). Orders can be placed online at <a href='www.swischoolwear.co.uk'>www.swischoolwear.co.uk</a> or by phone on <a href='tel:01928 752610'>01928 752610 (Option1)</a>. Enquiries can be sent to <a href='e:customerservice@swi.co.uk'>customerservice@swi.co.uk</a></i></p>
            </Info>
            <img src="../assets/SchoolPolicies/CAST Uniform Images for Website - Items.svg" alt='CAST Uniform Images for Website - Items'></img>
            {/* <Tips>
                <p>Non-uniform days are relatively frequent, usually to raise money for charity, and allow everyone to enjoy themselves. Have fun!</p>
            </Tips> */}


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
//         <li></li>
//     </ul>
// </div>