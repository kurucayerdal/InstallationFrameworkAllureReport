describe("Example Test Suite 1", () => {
    it("Test 1", () => {
      cy.addInfo("Mettre en évidence les jointures d'un contexte", "[Configuration] Editeur de dictionnaires (module 'Designer')", 'https://jira.evolucare.com/browse/BIC-8429', 'my trial test description', 'critical');
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
    });
  
    it("Test 2", () => {
      cy.addInfo("Mettre en évidence les jointures d'un contexte", "[Configuration] Editeur de dictionnaires (module 'Designer')", "https://jira.evolucare.com/browse/BIC-8429'", "En tant qu'utilisateur avancé d'Evolucare Analytics, j'aimerais pouvoir mettre en évidence les jointures d'un contexte dans l'onglet graphique de l'éditeur de dictionnaire.", "blocker");
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
    });
  
    it("Test 3", () => { //This test case will be failed because of the title of the page
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
      cy.title().should('eq', 'My Title');
    });
  });
  