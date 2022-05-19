// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    cy.log(err.message);
    return false;
  });

  //https://github.com/Shelex/cypress-allure-plugin
  Cypress.Commands.add('addInfo', (feature, epic, issue, link, description, severity) =>{
    const allure = Cypress.Allure.reporter.getInterface();
    allure.feature(feature);
    allure.epic(epic);
    allure.issue(issue);
    allure.link(link);
    allure.description(description);
    allure.severity(severity);
    return this;
  })