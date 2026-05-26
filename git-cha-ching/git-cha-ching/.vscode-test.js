const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
  {
    files: 'out/test/**/*.js',
    version: '1.120.0',
    extensionDevelopmentPath: __dirname,
    launchArgs: ['--disable-extensions'],
    mocha: {
      timeout: 20000,
    },
  },
]);
