// Karma configuration
// Generated on Wed Jul 15 2015 09:44:02 GMT+0200 (Romance Daylight Time)
'use strict';

module.exports = function(config) {
  config.set({

    plugins:[
      'karma-jasmine',
      'karma-jspm',
      'karma-chrome-launcher',
      'karma-phantomjs2-launcher',
      'karma-mocha-reporter'
    ],
    
    basePath: './', // base path that will be used to resolve all patterns (eg. files, exclude)
    frameworks: ['jspm', 'jasmine'], // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    browsers: [ 'PhantomJS2', 'Chrome' ], // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    reporters: ['mocha'], // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    singleRun: false, // Continuous Integration mode - if true, Karma captures browsers, runs the tests and exits
    autoWatch: true, // enable / disable watching file and executing tests whenever any file changes
    colors: true, // enable / disable colors in the output (reporters and logs)
    files: [], // list of files / patterns to load in the browser

    jspm: {
      config: 'config.js',
      loadFiles: [
        'jspm_packages/github/systemjs/plugin-css@0.1.20/css.js', // required for css import statements
        'app/karma-shim.js', // shim required to load angular2/testing
        'app/**/*.spec.js'
      ],
      serveFiles: [
        'app/**/*'
      ],
      packages: 'jspm_packages'
    },

    proxies: { // avoid Karma's ./base virtual directory
      //'/': '/base/',
      '/app/': '/base/app/',
      '/jspm_packages/': '/base/jspm_packages/'
    },

    exclude: [],
    preprocessors: {}, // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    port: 9876,  // web server port
    logLevel: config.LOG_DISABLE, // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG

    customLaunchers: {// start these browsers
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    }
  });

  // if (process.env.APPVEYOR) {
  //   config.browsers = ['IE'];
  //   config.singleRun = true;
  //   config.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
  // }

  // if (process.env.TRAVIS || process.env.CIRCLECI) {
  //   config.browsers = ['Chrome_travis_ci'];
  //   config.singleRun = true;
  // }
};
