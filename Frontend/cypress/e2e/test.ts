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
  cy.get("#kortHonom").click();
  cy.get("#kortHenne").click();
  cy.get("#kortBarn").click();
  cy.get("#kortBaby").click();
});

Then("Menyn visar alternativ", () => {
  cy.get("#productImg1");
});
