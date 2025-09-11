import './NoMatch.css'

import { Link } from 'react-router-dom';
export function NoMatch() {
    return (
        <div className="notification-div">
            {/* <img src="/assets/images/404_Page.png" className="error-icon"></img> */}
            <p className="four0four">404</p>
            <h1 className="title">Page not found :[</h1>

            <Link to="/wiki/About" className="rescue-button"><i className="fa-solid fa-right-from-bracket escape-icon"></i></Link>
        </div>
    )
}