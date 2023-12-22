const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "85bwso",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
