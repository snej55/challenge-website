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

for page_info in pages:
    lb = "{"
    rb = "}"
    with open(list(page_info.keys())[0] + ".js", "w") as f:
        f.write(f"""import './{list(page_info.keys())[0]}.css';

export function {list(page_info.keys())[0]}() {lb}
    return (
        <div>
            {page_info[list(page_info.keys())[0]]}
        </div>
    );
{rb}
""")
        
        f.close()
    
    with open(list(page_info.keys())[0] + ".css", "w") as f:
        f.write("")
        f.close()

    print(f"import {lb} {list(page_info.keys())[0]} {rb} from './Wiki/{list(page_info.keys())[0]}.js';")