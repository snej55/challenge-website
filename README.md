## Challenge website

A website for our school challenge project. The idea is to provide various "services" via the website (e.g. flash cards, school wiki, entertainment, etc).

Run `./gen_docs.sh` to regenerate the README.

Scroll past the todo for info on how to run the website (for editing see `CONTRIBUTING.md`).

---

## TODO:

- [x] Choose framework

- [ ] Add footer

- [X] Add wiki contents list

- [ ] Fix dark mode links

- [ ] Forum page or chatbot?

- [ ] Timetable generator?

---

## Running the website

1. First, clone the repo and cd into it:

```
git clone --depth 1 https://github.com/snej55/challenge-website.git
cd challenge-website
```

2. Install the package.json:

```
cd site
npm install
```

3. Start the client!

```
npm run start
```

## Folder structure:
```
.
├── archive
│   ├── assets
│   │   ├── dev
│   │   │   ├── #1_Basic_Page_Demo.jpeg
│   │   │   ├── #2_Scrollable_Div.png
│   │   │   └── #3_Header_Icon.png
│   │   └── images
│   │       ├── CASTlogo.png
│   │       ├── CAST_PictureOnly_Logo.png
│   │       └── newCASTlogo.png
│   ├── pages
│   │   ├── about-us.html
│   │   ├── home-page.html
│   │   └── toc.html
│   ├── styles
│   │   ├── footer.css
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── main.css
│   │   └── toc.css
│   └── toc.js
├── AUTHORS.md
├── CONTRIBUTING.md
├── devlog.md
├── docs
│   ├── README.md
│   └── TODO.md
├── gen_docs.sh
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── site
│   ├── node_modules  [878 entries exceeds filelimit, not opening dir]
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── assets
│   │   │   ├── images
│   │   │   │   ├── 404_Page.png
│   │   │   │   ├── CASTlogo.png
│   │   │   │   ├── CAST_PictureOnly_Logo_nobg.png
│   │   │   │   ├── CAST_PictureOnly_Logo.png
│   │   │   │   ├── CAST_WIKI_Logo_nobg.png
│   │   │   │   └── CAST_WIKI_Logo.png
│   │   │   ├── SchoolPolicies
│   │   │   │   ├── CAST Uniform Images for Website - Items.svg
│   │   │   │   ├── CAST Uniform Images for Website - Items.webp
│   │   │   │   └── CAST Uniform Images for Website - PE Uniform.png
│   │   │   └── wiki.json
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   ├── src
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Components
│   │   │   ├── Flashcards.css
│   │   │   ├── Flashcards.js
│   │   │   ├── Formtime.css
│   │   │   ├── Formtime.js
│   │   │   ├── Games.css
│   │   │   ├── Games.js
│   │   │   ├── Global
│   │   │   │   ├── HeaderMobileButton.css
│   │   │   │   ├── HeaderMobileButton.js
│   │   │   │   ├── InfoCardReact.css
│   │   │   │   ├── InfoCardReact.js
│   │   │   │   ├── MobileHeader.css
│   │   │   │   ├── MobileHeader.js
│   │   │   │   ├── theme.css
│   │   │   │   └── theme.js
│   │   │   ├── Home.css
│   │   │   ├── Home.js
│   │   │   ├── NoMatch.css
│   │   │   ├── NoMatch.js
│   │   │   ├── Wiki
│   │   │   │   ├── add_page.py
│   │   │   │   ├── gen_pages.py
│   │   │   │   ├── gen_pages_v2.py
│   │   │   │   └── pages  [45 entries exceeds filelimit, not opening dir]
│   │   │   ├── Wiki.css
│   │   │   └── Wiki.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   └── temp.js
│   └── wiki-styles
│       └── home-page.css
└── test-flashcards.json
```

Run `tree --filelimit=20` to regenerate the folder structure.