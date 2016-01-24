# WIP

## Testing

```bash
npm install --save-dev jasmine-core
npm install --save-dev jasmine-spec-reporter
npm install --save-dev karma
npm install --save-dev karma-chrome-launcher
npm install --save-dev karma-jasmine
npm install --save-dev karma-mocha-reporter
npm install --save-dev karma-phantomjs2-launcher
```

*package.json*
```json
"scripts": {
  "start:test": "live-server --port:9000",
}
```

## Build

```json
"scripts": {
  "build:test": "jspm bundle app/main test/main.min.js --minify",
  "build:dist": "jspm bundle-sfx app/app dist/app.min.js --minify"
}
```
