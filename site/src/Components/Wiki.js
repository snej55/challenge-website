import "./Wiki.css";

import { Link, Outlet } from 'react-router-dom';

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