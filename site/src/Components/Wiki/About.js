import './About.css';
import './wiki-pages.css'

export function About() {
    return (
        <div className="wiki-pages-div">
            {/* 📚 About Us */}
            <h1 id="title">✈️ Welcome to CAST WIKI</h1>

            <h2 id="subtitle">This is the unofficial wiki of Cambridge Academy for Science and Technology</h2>
            <img src="/assets/images/CASTlogo.png" className="cast-logo" />


            {/* Spacer 50px */}
            <div className="spacer-50"></div>

            <h2 className="paragraph-title">Why was this WIKI Made?</h2>

            <p>This page was made by five Year 11 CAST students. We realised that many students
                new to our school were not
                able to find their way around the school easily, which leaded to the teachers needing to spend days teaching
                them how to do basic things, like where is the water fountain, or how to submit homework.</p>
            <p>Because of this, we decided that a WIKI about the school should be made. The objective of the guide is to
                make students' everyday life around the school smoother and easier. </p>
        </div>
    );
}



