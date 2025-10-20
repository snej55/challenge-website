import React from 'react';
import './theme.css';

let theme = localStorage.getItem("theme")
if (theme) {
    document.body.setAttribute('data-theme', theme)
}
let cards = document.getElementsByClassName("github-cards-div")
// button = document.getElementsByClassName()
export default function ThemeChanger() {
    function handleClick() {
        if (localStorage.getItem("theme") === "dark") {
            theme = "light"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);
            for (let i = 0; i < cards.length; i++) {
                cards[i].setAttribute("data-theme", theme)
            }
        }
        else {
            theme = "dark"
            localStorage.setItem("theme", theme)
            document.body.setAttribute('data-theme', theme);
            for (let i = 0; i < cards.length; i++) {
                cards[i].setAttribute("data-theme", theme)
            }
            
        }
    }
    return (
        <div className="theme-choice" onClick={handleClick} title="Switch to dark mode">
            <div className="dot"></div>
        </div>
    );

}
