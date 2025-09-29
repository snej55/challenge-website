
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
            <div className="spacer-20"></div>
            <h2 className="paragraph-title">Hot meals</h2>

            <p>There are traditionally two hot meals on offer each lunchtime, a meat option and a vegetarian option.</p>
            <p>You can have the meals on a plate or disposable container, and commmon options range from jacket potato to pizza and chips.</p>
            <p>The standard charge for a hot meal is £2.25, so it's the place to go for a hungry student looking for something nutritional and filling.</p>
            <Tips><p>A Meal Deal is available, a great bargain at £2.50 for a Hot meal and a dessert.</p></Tips>

            <h2 className="paragraph-title">Grab and Go</h2>

            <p>The Grab and Go section has a variety of items on offer, usually involving Pasta pots, sausage rolls, or hot dogs. </p>
            <p>The price varies from 95p to £1.80, so there's always a lot to choose from.</p>
            <p>Additionally, for those with a sweet tooth there's a dessert section of the Grab and Go, containing cookies and cakes, for prices of 80p to £1.20.</p>
            <p>With a great variety of sweet and savoury, Grab and Go is a first stop for many students as they grab some lunch and go!</p>
            <div className="spacer-20"></div>

            <h2 className="paragraph-title">Cold Food</h2>

            <p>The last section before the tills, Cold food often has the same food on offer year-round; the school favourites.</p>
            <p>There are generally three options: Drinks, Pots, and Sandwiches.</p>
            <p>The drinks generally consist of Flavoured milks, usually chocolate or strawberry, and Radnor drinks, a great favourite among those who like a less healthy option.</p>
            <p>The pots normally contain jelly or cream, with chopped fruit options available for the healthier consumer.</p>
            <p>Sandwiches are a popular alternative to Hot meals for those seeking a filling meal, and offer a wide selection of both meat and vegetarian flavours.</p>
            <p>With so many exciting things on offer, it's no wonder the Cold food section is a vital destination for many students looking for a meal.</p>
            <Warning><p>Please don't stomp on the drinks sold, as it makes a frightful mess... Which you will have to clean up, of course.</p></Warning>

            <h2 classname = "paragraph-title">Special Events</h2>

            <p>A lot of special events only happen once a year, like the special christmas dinner at, you guessed it, christmas!</p>
            <p>However, some occur more frequently, with two of the most popular occuring every single week.</p>
            <div className="spacer-20"></div>
            <h3 classname = "paragraph-title">Meat-Free Monday</h3>

            <p>As the name of the day surely suggests, the food served on Mondays is entirely meat free!</p>
            <p>While some barbaric carnivores dislike it, the vast majority of the school view it as a vital opportunity to reduce their environmental impact and sample new cuisine.</p>
            <p>However, other events cater more towards those who disagree with healthy, sustainable eating...</p>
            <Tips><p>(If you really can't bear to go veggie, there's always the option of a sneaky chicken sandwich from the cold food. I didn't tell you that, though.)</p></Tips>

            <h3 classname = "paragraph-title">Fish'n'Chips Friday</h3>

            <p>The food on offer at this time has a wide variety, swinging from pizza with chips all the way to chicken with chips.</p>
            <p>Every Friday lunchtime, the hot food and grab and go sections are entirely filled with such items, and even the cold food sector is often hollowed out to make room.</p>
            <p>Beloved by staff and students alike, this day is second to none in the standing of many.</p>
            <div className="spacer-20"></div>
        </div>

    );
}
