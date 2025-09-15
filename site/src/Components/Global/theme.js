import './theme.css';
let theme = localStorage.getItem("theme")
document.body.setAttribute('data-theme', theme)
// button = document.getElementsByClassName()
export default function themeChanger() {
    function handleClick() {
        if (localStorage.getItem("theme") === "dark") {
            let theme = "light"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);
        }
        else {
            let theme = "dark"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);
        }
    }
    return (
        <selection>
            <div className="theme-choice" onClick={handleClick} title="Switch to dark mode">
                <div class="dot"></div>
            </div>
        </selection>
    );

}
