# Site rebrand - fork
It's a fork from original repo. Here we simplified project folder structure and gulp file, updating dependencies and improving CSS and JS loading using CDN to every lib.

## Using
Run the flow code:


```
npm install
gulp
```

To build the project, and then, access files via browser or web server.

## Project structure

    .
    ├── app                     # All source code goes here! Any alteration will happen here!
    │   ├── assets              # Assets like fonts and symbols.
    │   ├── images              # Almost every image goes here.
    │   ├── scripts             # JS and TS scrits.
    │   ├── styles              # CSS and SASS scripts.
    │   └── views               # Pug files.
    │       ├── _00-toolbox     # Configuration files, mixins, partials and templates.
    │       ├── _01-elements    
    │       ├── _02-components  # Some main theme components.
    │       ├── _03-layouts     # Pug files with some parts of main page.
    │       └── _04-pages       # Every page.
    └── build                   # The project build goes here. Do not change files here! Any alteration will be lost.


## Next actions
- [ ] Minify JS;
- [ ] Create a partials directory, with main page parts;
- [ ] Move every image to app/images directory;
- [ ] Configure pipelines to automation deploy; 
- [ ] Change favicons background to white, convert to jpg.
