describe("check register", () => {
  beforeEach("passes", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
  });
  beforeEach("cookies", () => {
    cy.get("section div div div button._3jgXaWY4").click();
  });
  it("write input", () => {
    cy.get("#firstName").type("Vanessa").should("have.value", "Vanessa");
    cy.get("#lastName").type("Test").should("have.value", "Test");
    cy.get("#signup-email")
      .type("vanessa.test@gmail.com")
      .should("have.value", "vanessa.test@gmail.com");
    cy.get("#signup-password").type("Wcs123456789").should("have.value", "Wcs123456789");
    cy.get("._2OVE0h6V").click();
    cy.get("form ._1ayVgG8s").eq(1).click()
  });

});
