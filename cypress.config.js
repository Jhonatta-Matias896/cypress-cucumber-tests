const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  chromeWebSecurity: false,
  stepDefinitions: [

    "cypress/support/step_definitions/**/**/*.{js,mjs,ts,tsx}"

  ],
  e2e: {
    specPattern: 'cypress/integration/**/**/**/*.{js,jsx,ts,tsx,feature}',

    setupNodeEvents(on, config) {

      // implement node event listeners here
      const bundler = createBundler({

        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      addCucumberPreprocessorPlugin(on, config);
      return config
    },
      "baseUrl":"https://automationexercise.com"
  },
});