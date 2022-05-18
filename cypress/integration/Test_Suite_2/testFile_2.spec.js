describe("Example Test Suite 2", () => {
    it("Test 1", () => {
       /**
       *  @severity critical
       */
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
    });
  
    it("Test 2", () => {
       /**
       *  @severity blocker
       */
      cy.visit("https://www.google.com");
      cy.contains("J'accepte").click();
      cy.get('[name="q"]').type("EVOLUCARE Technologies {enter}");
      cy.screenshot();
    });
  });
  