import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given("Jag är på hemsidan och ser en meny av kort", () => {});

When("Jag klickar på ett kort", () => {
  cy.get("#card1").click();
  // cy.get("#card2").click();
  // cy.get("#card3").click();
  // cy.get("#card4").click();
});

Then("Man hamnar på en ny sida med produkter", () => {
  cy.get("h1").should("contain", "För honom"); //räcker med en rubrik från den nya sidan. typ hämta en text från den nya sidan
  // cy.get("#card2").should("contain", "För Henne"); //räcker med en rubrik från den nya sidan. typ hämta en text från den nya sidan
  // cy.get("#card3").should("contain", "För Barn"); //räcker med en rubrik från den nya sidan. typ hämta en text från den nya sidan
  // cy.get("#card4").should("contain", "För Baby"); //räcker med en rubrik från den nya sidan. typ hämta en text från den nya sidan
});

Given("Det finns en hamburgar meny", () => {});

When("Jag klickar på den", () => {
  cy.get(".header-hamburgare").click();
});

Then("Menyn visar alternativ", () => {
  cy.get("li").should("contain", "Home");
});
