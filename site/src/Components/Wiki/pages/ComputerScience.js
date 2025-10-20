
import './wiki-pages.css'
import './ComputerScience.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function ComputerScience() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>💻 Computer Science</h3>

            <div className="spacer-20"></div>
            <h1 id="title">💻 Computer Science</h1>

            <h2 id="subtitle">This is the page about Computer Sciencee</h2>

            <h2 className="paragraph-title">CS Curriculum: </h2>

            <p>
		GCSE Computer Science at CAST follows the OCR exam board. The programming side of it consists mainly of pseudocode (see the OCR spec) and VB.NET programming using Visual Studio.
		<br/>
		The course has two components (Components 1 & 2). 
	    </p>
	    <br/>
	    <h2 className="paragraph-title">Component 1 (more theoryish): </h2>
	    <p>
		1. Systems Architecture
		<br/>
		2. Memory & Storage
		<br />
		3. Networks
		<br />
		4. Network Security
		<br />
		5. Systems Software
		<br />
		6. Ethical & Legal impacts
	    </p>
	    <br/>
	    <h2 className="paragraph-title">Component 2 (the programming stuff):  </h2>
	    <p>
		1. Algorithms
		<br/>
		2. Programming Fundamentals
		<br/>
		3. Producing Robust Programs
		<br/>
		4. Boolean Logic
		<br/>
		5. Languages & IDEs
	    </p>
	    <br></br>
        </div>

    );
}
