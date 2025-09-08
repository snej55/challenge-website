# Contributing

> [!NOTE]
> To host the website locally, it is first required to install npm and nodejs. It is also recommended to have git installed in order to collaborate on the project.

## Editing individual pages:

The website runs on react, meaning the different pages are located in seperate .js files (e.g `Wiki.js`, `Home.js`). To edit the individual pages, edit these files (located in `site/src/Components`.

The different style (css) files are located next to the .js files in `site/src/Components`. Edit these to edit the style of the pages.

## Editing the README / TODO:

The README and TODO are both located at `docs/`. Please edit these files and not `README.md` in the root directory. The `[TODO.md]` in `docs/README.md` includes the contents of TODO.md into the README.

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
