# Core

The intent of the core branches is to create a stable foundation to build from. Core branches should ideally be as minimalistic and non-opinionated as possible while still providing the basic functionality required to create a functional Angular2 app.

##  Branches

- core-a - traceur transpiler
- core-b - babel transpiler

## Creation Steps

1. Initial Commit - MIT license

1. Add .gitignore

Ignore the following folders/files

 - jspm_packages
 - node_modules
 - npm-debug.log

The `jspm_packages` and `node_modules` are excluded to prevent from bloating the history with dependencies. 

1. NPM init

Initialize a NPM package with `npm init` this step sets up the package.json file where all of the project dependencies will be tracked.

*Note: To prevent future version conflicts with users of the seed, this file is kept to a bare minimum.*

1. JSPM init

Initialize the JSPM. This step sets up the transpiler, creates config.js to track client-side ES6 modules, and adds configuration fields to package.json to track dependencies.

1. Configure transpiler

Depending on which core that's being used, the transpiler needs to be setup to support ng2-specific language extensions that aren't included in the ES6 spec.

Extensions:
- annotations (ie ES7 decorators)
- member variables
- types

These will ensure that all of the syntactic sugar provided by Typescript will work without the boilerplate required by types.

1. Install `angular2`

Install the ng2 core modules and dependencies.

```jspm install angular2```

1. Install `reflect-metadata`

Reflect-metadata is an ES7 decorator polyfill. Required for ng2 decorators/annotations.

```jspm install reflect-metadata```

*Note: ng2 uses this module internally. Modify config.js so both references point to the same version.*

1. Install `zone.js`

Zone.js is an async call wrapper. Required by ng2 to detect and trigger update cycles.

```jspm install zone.js```

*Note: ng2 uses this module internally. Modify config.js so both references point to the same version.*

1. Install `rxjs`

Rx.js is an observables and observables extension library used by ng2 to manage asynchronous data updates in a functional manner.

```jspm install rxjs```

*Note: ng2 uses this module internally. Modify config.js so both references point to the same version.*
