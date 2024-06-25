describe("check authentification", () => {
  beforeEach("passes", () => {
    cy.visit("https://preprod.backmarket.fr/fr-fr/register");
  });
  beforeEach("cookies", () => {
    cy.get("section div div div button._3jgXaWY4").click();
  });
  it("write input", () => {
    cy.get("#signin-email").type("vanessa.test@gmail.com").should("have.value", "vanessa.test@gmail.com");
    cy.get("#signin-password").type("Wcs123456789").should("have.value", "Wcs123456789");
   
    cy.get("#signup-password").type("Wcs123456789").should("have.value", "Wcs123456789");
    cy.get("form ._1ayVgG8s").eq(0).click()
  });

});
