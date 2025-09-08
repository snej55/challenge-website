## Challenge website

A website for our school challenge project. The idea is to provide various "services" via the website (e.g. flash cards, school wiki, entertainment, etc).

Run `./gen_docs.sh` to regenerate the README.

Scroll past the todo for info on how to run the website (for editing see `CONTRIBUTING.md`).

---

[TODO.md]

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
├── assets
├── docs
│   ├── README.md
│   └── TODO.md
├── gen_docs.sh
├── README.md
└── site
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public
    │   ├── assets
    │   │   └── images
    │   │       └── CASTlogo.png
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    ├── README.md
    └── src
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── Components
        │   ├── Flashcards.css
        │   ├── Flashcards.js
        │   ├── Formtime.css
        │   ├── Formtime.js
        │   ├── Games.css
        │   ├── Games.js
        │   ├── Home.js
        │   ├── Wiki.css
        │   └── Wiki.js
        ├── index.css
        ├── index.js
        ├── logo.svg
        ├── reportWebVitals.js
        └── setupTests.js
```

Run `tree --filelimit=20` to regenerate the folder structure.