import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  cy.visit("http://localhost:5173/");
});

Given(
  "Jag är på hemsidan och ser en rullgardinsmeny där man kan välja gender",
  () => {}
);

When("Jag klickar på rullgardinmenyn", () => {});

Then("Menyn visar alternativ ", () => {});
