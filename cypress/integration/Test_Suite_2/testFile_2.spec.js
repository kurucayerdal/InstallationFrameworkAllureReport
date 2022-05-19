describe("Example Test Suite 2", () => {
    it("Test 1", () => {
      cy.addSeverity("blocker");
      cy.addDescription("EVOLUCARE Technologies search from google");
      cy.addEpic("Epic name will be here");
      cy.addFeature("You can write the feature name here");
      cy.addIssue("jira", "https://jira.evolucare.com/browse/BIC-8429");
      cy.addTms("Squash", "https://saas-evolucare01.henix.com/squash/test-case-workspace/test-case-folder/23949/content");
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
    });
  
    it("Test 2", () => {
      cy.addSeverity("minor");
      cy.addDescription("EVOLUCARE Technologies search from google");
      cy.addEpic("A different epic name will be here");
      cy.addFeature("Another feature name");
      cy.addIssue("jira", "https://jira.evolucare.com/browse/BIC-8429");
      cy.addTms("Squash", "https://saas-evolucare01.henix.com/squash/test-case-workspace/test-case-folder/23949/content");
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
    });
  });
  