// styles
import "./Wiki.css";
import "./Wiki/pages/global.css";

import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

export function WikiPage() {

}

export function Wiki({ wikiData }) {
    let pages = wikiData["pages"];

    // sort pages alphabetically
    pages.sort((a, b) => a.title.localeCompare(b.title));

    return (
        <div className="Wiki">
            {/* wiki contents */}
            <div className="wiki-contents">
                {/* spacer */}
                {pages.map(page => <Link to={`/wiki/${page.title.toLowerCase()}`} className="wikilink">{page.desc}</Link>)}
            </div>

            {/* Outlet is current page */}
            <Outlet />
        </div>
    );
}

Wiki.propTypes = {
    wikiData: PropTypes.any.isRequired
};