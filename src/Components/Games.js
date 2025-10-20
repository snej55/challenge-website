import "./Games.css";

export function Games() {
    return (
        // list of links to games (made by CAST students)
        // use direct links, not iframes
        <div className="Games-Text">
            Games page
            <ul>
                <li><a href="https://editor.p5js.org/snej55/sketches/pq3lk0NZH" style={{textDecoration: "none", color: "var(--text-color)"}}>Platformerre</a></li>
                <li><a href="/gfx/shadyman/shadyman.html" style={{textDecoration: "none", color: "var(--text-color)"}}>Shadyman</a></li> 
            </ul>
        </div>
    );
}