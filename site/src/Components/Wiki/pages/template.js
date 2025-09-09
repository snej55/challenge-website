import './wiki-pages.css'
import './{** 1 **}.css';
import './info-card.css'

export function About() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i class="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>{** 2 **}</h3>

            <div className="spacer-20"></div>
            <h1 id="title">{** 2 **}</h1>

            <h2 id="subtitle">This is the subtitle, change me</h2>
            <img src="/assets/images/CAST_WIKI_Logo.png" className="cast-wiki-logo" />


            {/* Spacer 50px */}
            <div className="spacer-50"></div>

            <h2 className="paragraph-title">This is paragraph title</h2>

            <p>This is the paragraph</p>
        </div>

        </div >
    );
}



