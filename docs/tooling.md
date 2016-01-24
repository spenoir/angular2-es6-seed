
# Tooling

This project not only aims to allow users to get up and running quickly but to also provide a quality setup to reduce the pain of working on the bleeding edge. The following includes a set of tools provided to enhance the ES6 development experience.

## Serve

Any front-end application development project will require a server for testing. To remove any unnecessary guesswork and configuration `live-server` was selected as the tool of choice.

**live-server**

A lightweight HTTP server with live-reload and directory watching enabled by default.

*installation*
```bash
npm install live-server --save-dev
```

*package.json*
```json
"scripts": {
  "start": "live-server",
}
```

*usage*
```bash
npm start
```
*Note: live-server will automatically load a browser tab.*

## CSS

The ES6-module-loader adds the ability to easily import scripts. Why not extend that same capability to stylesheets. The `css` package is included for that exact reason. Building projects that contain css imports requires `clean-css` so that's included as well.

*installation*
```bash
jspm install plugin-css
jspm install npm:clean-css --dev
```

*usage*
```javascript
import './main.css!';
```

*Note: Make sure to add a ! (bang) as a suffix so the module loader knows to check the extension.*

## Style

One pain point of team-based development is compromising personal preferences to decide on a standard code style. The [Javascript Standard Style][standard] project addresses that exact need except many devs feel weird writing code without semicolons so this project includes [SemiStandard][semistandard] (ie Standard w/ semicolons).

*dependencies*
```bash
npm install semistandard --save-dev
npm install babel-eslint --save-dev
```

*package.json*
```json
"semistandard": {
  "parser": "babel-eslint",
  "ignore": [
    "config.js"
  ]
}
```

*Note: The babel linter is required to add support for the ES7 decorator syntax. Since config.js it automatically managed by JSPM, it's excluded from style checking.*

*usage*
```bash
npm run style
```

[standard]: https://github.com/feross/standard
[semistandard]: https://github.com/Flet/semistandard
