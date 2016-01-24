# Introduction

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/mgechev/angular2-seed.svg)](https://david-dm.org/evanplaice/angular2-es6-seed)
[![devDependency Status](https://david-dm.org/mgechev/angular2-seed/dev-status.svg)](https://david-dm.org/evanplaice/angular2-es6-seed#info=devDependencies)

A seed project for Angular 2 ES6 apps.

It is something similar to the Angular 2 Seed but uses JSPM to manage packages and create builds.

*`angular2-es6-seed` provides the following features:*

- Ready to go
- A `core` release with just the essentials
- A `tooling` release with the core and some niceties
- A fully functional demo app
- Development server with livereload
- Following the best practices for your application’s structure

# Table of Contents

- [How to start](#how-to-start)
- [Directory Structure](#directory-structure)
- [Release Documentation](#release-documentation)
- [Cloning a Specific Release](#cloning-a-specific-release)
- [Contributing](#contributing)
- [Roadmap](#roadmap)
- [License](#license)

# How to Start

*You must have `jspm` installed as global dependency:*

```bash
npm install -g jspm
```

*In order to start the seed use:*
```bash
# clone the repo
git clone https://github.com/evanplaice/angular2-es6-seed.git
# change to the project
cd angular2-seed
# install the node dependencies
npm install
# install the client-side dependencies jspm
jspm install
# launch the testing server
npm start
```
# Release Documentation

- [Core](https://github.com/evanplaice/angular2-es6-seed/tree/master/docs/core.md)
- [Tooling](https://github.com/evanplaice/angular2-es6-seed/tree/master/docs/tooling.md)

# Cloning a Specific Release

*To clone a specific release use:*
```bash
git clone -b [branch] git@github.com:evanplaice/angular2-es6-seed.git
```

# Directory Structure

```
.
├── app
│   ├── about
│   │   └── components
│   │       ├── about.html
│   │       └── about.js
│   ├── app
│   │   └── components
│   │       ├── app.css
│   │       ├── app.html
│   │       └── app.js
│   ├── home
│   │   └── components
│   │       ├── home.css
│   │       ├── home.html
│   │       └── home.js
│   ├── shared
│   │   ├── assets
│   │   │   └── img
│   │   │       └── smile.png
│   │   └── services
│   │       └── name_list.js
│   ├── main.css
│   └── main.js
├── docs
│   ├── core.md
│   └── tooling.md
├── .gitignore
├── config.js
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── package.json
└── README.md
```

# Contributing

Please see the [CONTRIBUTING](https://github.com/evanplaice/angular2-seed/blob/master/CONTRIBUTING.md) file for guidelines.

# Roadmap

- add headless browser testing via karma/jasmine
- add e2e testing via protractor
- add npm scripts for `dev` and `production` builds

# License

MIT
