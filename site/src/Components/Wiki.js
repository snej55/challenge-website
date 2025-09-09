import "./Wiki.css";

import { About } from './Wiki/About.js';
import { SchoolOverview } from './Wiki/SchoolOverview.js';
import { SubjectsCourses } from './Wiki/SubjectsCourses.js';
import { Sciences } from './Wiki/Sciences.js';
import { ComputerScience } from './Wiki/ComputerScience.js';
import { Mathematics } from './Wiki/Mathematics.js';
import { Sports } from './Wiki/Sports.js';
import { Geography } from './Wiki/Geography.js';
import { Clubs } from './Wiki/Clubs.js';
import { Achievements } from './Wiki/Achievements.js';
import { Exams } from './Wiki/Exams.js';
import { LunchMenu } from './Wiki/LunchMenu.js';
import { Transport } from './Wiki/Transport.js';
import { SchoolPolicies } from './Wiki/SchoolPolicies.js';
import { StudentVoices } from './Wiki/StudentVoices.js';
import { SupportWellbeing } from './Wiki/SupportWellbeing.js';
import { UsefulLinks } from './Wiki/UsefulLinks.js';
import { Contact } from './Wiki/Contact.js';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export function Wiki() {
    let pages = [
        {"title": "About", "desc": "📚 About Us"},
        {"title": "SchoolOverview", "desc": "🏫 School Overview"},
        {"title": "SubjectsCourses", "desc": "📖 Subjects & Courses"},
        {"title": "Sciences", "desc": "🧪 Sciences"},
        {"title": "ComputerScience", "desc": "💻 Computer Science"},
        {"title": "Mathematics", "desc": "🧮 Mathematics"},
        {"title": "Sports", "desc": "🏃‍♂️ Sports & PE"},
        {"title": "Geography", "desc": "🌍 Geography"},
        {"title": "Clubs", "desc": "🧑‍🔬 Clubs & Societies"},
        {"title": "Achievements", "desc": "🏆 Achievements"},
        {"title": "Exams", "desc": "📝 Exams & Revision"},
        {"title": "LunchMenu", "desc": "🍽️ Lunch Menu"},
        {"title": "Transport", "desc": "🚌 Transport"},
        {"title": "SchoolPolicies", "desc": "📄 School Policies"},
        {"title": "StudentVoices", "desc": "💬 Student Voice"},
        {"title": "SupportWellbeing", "desc": "🆘 Support & Wellbeing"},
        {"title": "UsefulLinks", "desc": "🔗 Useful Links"},
        {"title": "Contact", "desc": "📨 Contact Us"}
    ];

    pages.sort((a, b) => a.title.localeCompare(b.title));
    
    return (
        <div className="Wiki">
            <div className="wiki-contents">
                {/* spacer */}
                {pages.map(page => <Link to={`/wiki/${page.title.toLowerCase()}`} className="wikilink">{page.desc}</Link>)}
            </div>

            <Outlet />
        </div>
    );
}