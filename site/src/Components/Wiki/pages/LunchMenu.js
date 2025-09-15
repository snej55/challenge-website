
import './wiki-pages.css'
import './LunchMenu.css';
// Import all the cards
// eslint-disable-next-line
import { Info } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Tips } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Important } from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import { Warning } from '../../Global/InfoCardReact.js'

export default function LunchMenu() {
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>🍽️ Lunch Menu</h3>

            <div className="spacer-20"></div>
            <h1 id="title">🍽️ Lunch Menu</h1>

            <h2 id="subtitle">Your guide to five-star dining</h2>

            <h2 className="paragraph-title">What to expect</h2>

            <p>There are typically three sections in the canteen: Hot meals, Grab and go, or Cold food.</p>
            <p>At break time and Friday lunchtimes, however, the Hot meals section is replaced by an expanded Grab and go.</p>
            <p>Each section offers different choices every day, but we'll give you an idea of what to look for.</p>

            <h2 className="paragraph-title">Hot meals</h2>

            <p>There are traditionally two hot meals on offer each lunchtime, a meat option and a vegetarian option.</p>
            <p>You can have the meals on a plate or disposable container, and commmon options range from jacket potato to pizza and chips.</p>
            <p>The standard charge for a hot meal is £2.25, so it's the place to go for a hungry student looking for something nutritional and filling.</p>
            <hint><p>A Meal Deal is available, a great bargain at £2.50 for a Hot meal and a dessert.</p></hint>

            <h2 className="paragraph-title">Grab and Go</h2>

            <p>The Grab and Go section has a variety of items on offer, usually involving Pasta pots, sausage rolls, or hot dogs. </p>
            <p>The price varies from 95p to £1.80, so there's always a lot to choose from.</p>
            <p>Additionally, for those with a sweet tooth there's a dessert section of the Grab and Go, containing cookies and cakes, for prices of 80p to £1.20.</p>
            <p>With a great variety of sweet and savoury, Grab and Go is a first stop for many students as they grab some lunch and go!</p>

            <h2 className="paragraph-title">Cold Food</h2>

            <p>The last section before the tills, Cold food often has the same food on offer year-round; the school favourites.</p>
            <p>There are generally three options: Drinks, Pots, and Sandwiches.</p>
            <p>The drinks generally consist of Flavoured milks, usually chocolate or strawberry, and Radnor drinks, a great favourite among those who like to make a mess.</p>
            <p>The pots normally contain jelly or cream, with chopped fruit options available for the healthier consumer.</p>
            <p>Sandwiches are a popular alternative to Hot meals for those seeking a filling meal, and offer a wide selection of both meat and vegetarian flavours.</p>
            <p>With so many exciting things on offer, it's no wonder the Cold food section is a vital destination for many students looking for a meal.</p>
        </div>

    );
}
