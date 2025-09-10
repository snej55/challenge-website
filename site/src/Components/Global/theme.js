import './theme.css';
let theme = localStorage.getItem("theme")
document.body.setAttribute('data-theme', theme)
export default function themeChanger() {

    function handleClick() {
        if (localStorage.getItem("theme") === "light") {
            let theme = "dark"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);
        }
        else {
            let theme = "light"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);

        }




    }
    return (
        <section>

            <i className="fa-solid fa-circle-half-stroke header-icon" onClick={handleClick} title="Switch to dark mode"></i>

        </section>

    );

}
