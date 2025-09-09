import os


pages = [
    {"About": "📚 About Us"},
    {"SchoolOverview": "🏫 School Overview"},
    {"SubjectsCourses": "📖 Subjects & Courses"},
    {"Sciences": "🧪 Sciences"},
    {"ComputerScience": "💻 Computer Science"},
    {"Mathematics": "🧮 Mathematics"},
    {"Sports": "🏃‍♂️ Sports & PE"},
    {"Geography": "🌍 Geography"},
    {"Clubs" : "🧑‍🔬 Clubs & Societies"},
    {"Achievements": "🏆 Achievements"},
    {"Exams": "📝 Exams & Revision"},
    {"LunchMenu": "🍽️ Lunch Menu"},
    {"Transport": "🚌 Transport"},
    {"SchoolPolicies": "📄 School Policies"},
    {"StudentVoices": "💬 Student Voice"},
    {"SupportWellbeing": "🆘 Support & Wellbeing"},
    {"UsefulLinks": "🔗 Useful Links"},
    {"Contact": "📨 Contact Us"}
]

# Template for JS file
template = """
import './wiki-pages.css'
import './{key}.css';
import './info-card.css'

export function {key}() {{
    return (

        <div className="wiki-pages-div">
            <div className="spacer-20"></div>
            <h3 className="nav-label"><i className="fa-solid fa-house"></i><i className="fa-solid fa-arrow-right nav-icon"></i>{value}</h3>

            <div className="spacer-20"></div>
            <h1 id="title">{value}</h1>

            <h2 id="subtitle">This is the subtitle, change me</h2>


            
      

            <h2 className="paragraph-title">This is paragraph title</h2>

            <p>This is the paragraph</p>
        </div>

    );
}}
"""

# Output directories
js_dir = "./site/src/Components/Wiki/pages"
css_dir = "./site/src/Components/Wiki/pages"

os.makedirs(js_dir, exist_ok=True)
os.makedirs(css_dir, exist_ok=True)

for page in pages:
    for key, value in page.items():
        js_filename = os.path.join(js_dir, f"{key}.js")
        css_filename = os.path.join(css_dir, f"{key}.css")
        # Write JS file with replacements
        js_content = template.format(key=key, value=value)
        with open(js_filename, "w", encoding="utf-8") as jsf:
            jsf.write(js_content)
        # Write CSS file (empty for now)
        with open(css_filename, "w", encoding="utf-8") as cssf:
            cssf.write(f"/* Styles for {key} */\n")

print("JS dir:", os.path.abspath(js_dir))
print("CSS dir:", os.path.abspath(css_dir))
print("done")