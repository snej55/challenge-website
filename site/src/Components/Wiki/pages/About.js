import './wiki-pages.css'
import './About.css';
import './info-card.css'
export function About() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i class="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>📚 About Us</h3>

            <div className="spacer-20"></div>
            <h1 id="title">✈️ Welcome to CAST WIKI</h1>

            <h2 id="subtitle">This is the <i>unofficial</i> wiki of Cambridge Academy for Science and Technology</h2>
            <img src="/assets/images/CAST_WIKI_Logo.png" className="cast-wiki-logo" />


            {/* Spacer 50px */}
            <div className="spacer-50"></div>

            <h2 className="paragraph-title">Why was this WIKI Made?</h2>

            <p>This page was made by five Year 11 CAST students. We realised that many students
                new to our school were not
                able to find their way around the school easily, which leaded to the teachers needing to spend days teaching
                them how to do basic things, like where is the water fountain, or how to submit homework.</p>
            <p>Because of this, we decided that a WIKI about the school should be made. The objective of the guide is to
                make students' everyday life around the school smoother and easier. </p>
            <div className="spacer-20"></div>
            <div id="creative" class="info-card card-blue">
                <h3>Why was this WIKI Made?</h3>

                <p>This page was made by five Year 11 CAST students. We realised that many students
                    new to our school were not
                    able to find their way around the school easily, which leaded to the teachers needing to spend days teaching
                    them how to do basic things, like where is the water fountain, or how to submit homework.</p>
                <p>Because of this, we decided that a WIKI about the school should be made. The objective of the guide is to
                    make students' everyday life around the school smoother and easier. </p>

            </div>

        </div>
    );
}



