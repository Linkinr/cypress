const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.dev.myhomeiq.report',
    viewportWidth: 1920,
    viewportHeight: 1024,
  },
  
});
