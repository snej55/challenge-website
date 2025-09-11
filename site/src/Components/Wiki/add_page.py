import json

# Template for JS file
template = """import './wiki-pages.css'
import './{key}.css';

// Import all the cards
// eslint-disable-next-line
import {{ Info }} from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import {{ Tips }} from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import {{ Important }}from '../../Global/InfoCardReact.js'
// eslint-disable-next-line
import {{ Warning }} from '../../Global/InfoCardReact.js'

export default function {key}() {{
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

def add_page(name: str, desc: str):
    # long annoying json path
    wikiData = "../../../public/assets/wiki.json"
    # load original json data
    pages = {}
    with open(wikiData, "r") as f:
        data = json.load(f)
        pages = data["pages"]
        # check if page doesn't already exist
        for page in pages:
            if page["title"].lower() == name.lower():
                print(f"ERROR: Wiki page with name {name} already exists.")
                return
    
    # format js file
    js_content = template.format(key=name, value=desc)
    with open(f"./pages/{name}.js", "w", encoding="utf-8") as f:
        f.write(js_content)
    
    # write empty css file
    with open(f"./pages/{name}.css", "w", encoding="utf-8") as f:
        f.write(f"/* Styles for {name} */\n")
    
    # add to json file
    with open(wikiData, "w") as f:
        pages.append({"title": name, "desc": desc})
        json.dump({"pages": pages}, f, indent=4, sort_keys=True)
    
    print(f"Added page `{name}` to wiki. Files: `./Components/Wiki/pages/{name}.js` and `./Components/Wiki/pages/{desc}.js`")

if __name__ == "__main__":
    name = input("Please enter the page name (e.g. About): ")
    desc = input("Please enter the page description (e.g 📚 About Us): ")

    add_page(name, desc)