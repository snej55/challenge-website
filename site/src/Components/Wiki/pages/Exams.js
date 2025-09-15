
import './wiki-pages.css'
import './Exams.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function Exams() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📝 Exams & Revision</h3>

            <div className="spacer-20"></div>
            <h1 id="title">📝 Exams & Revision</h1>

            <h2 id="subtitle">CAST is determined to give pupils great results in relevant GCSEs and A-Levels.</h2>
            
      

            <h2 className="paragraph-title">Exam board information</h2>

            <p>Across various GCSEs and A-Levels, we use AQA, OCR, WJEC, and Edexcel. <a href="https://www.bbc.co.uk/bitesize/articles/zw27tcw#zmhtfdm">These are the dates for all GCSEs in the country</a></p>
        </div>

    );
}
