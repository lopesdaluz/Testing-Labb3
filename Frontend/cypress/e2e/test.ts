import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});
Given("Jag är på hemsidan och ser en huvudrubrik", () => {});
Given("Jag är på hemsidan och ser en meny av kort", () => {});

When("Jag klickar på ett kort", () => {
  // cy.get(".card").first().click();
  cy.get("#card1").click();
  // cy.get("#card2").click();
  // cy.get("#card3").click();
  // cy.get("#card4").click();
});

Then("Man hamnar på en ny sida med produkter", () => {
  cy.get("#title").should("contain", "För Honom"); //räcker med en rubrik från den nya sidan. typ hämta en text från den nya sidan
});
