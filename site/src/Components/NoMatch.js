import './NoMatch.css'
import { About } from './Wiki/pages/About.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
export function NoMatch() {
    return (
        <div className="notification-div">
            {/* <img src="/assets/images/404_Page.png" className="error-icon"></img> */}
            <p className="four0four">404</p>
            <h1 className="title">Page not found :[</h1>

            <Link to="/wiki/About" className="rescue-button"><i class="fa-solid fa-right-from-bracket escape-icon"></i></Link>

        </div>
    )
}