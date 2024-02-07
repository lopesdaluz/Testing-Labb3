import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  //that the correct data being fetched from my API with GET request
  cy.intercept("GET", "http://localhost:3000/products").as("getProducts");
  cy.visit("http://localhost:5173/");
});

// visar att korten visas på startsidan
Given("Jag är på hemsidan och ser en meny av kort", () => {
  cy.get("#Men").should("exist");
  cy.get("#Women").should("exist");
  cy.get("#Children").should("exist");
  cy.get("#Baby").should("exist");
});

// Klicka på korten för att navigera till sidan för presenter
When("Jag klickar på ett kort", () => {
  cy.get("#Men").click();
});

// Så att användaren hamnar på sidan för presenter
Then("Man hamnar på en ny sida med produkter", () => {
  cy.url().should("include", "/gift/Men");
  // cy.url().should("include", "/gift/Women");
  // cy.url().should("include", "/gift/Children");
  // cy.url().should("include", "/gift/Baby");
});

// Verifiera att produkterna på sidan matchar den valda kategorin
Then("Sidans produkter matchar kategorin", () => {
  cy.get("h1").should("contain", "For Men");
  cy.get(".product-item").each(($productItem) => {
    cy.wrap($productItem).find("p:contains('Category: Men')").should("exist");
  });
});

// Att hamburgermenyn finns
Given("Det finns en hamburgar meny", () => {
  cy.get(".header-hamburgare").should("exist");
});

// Klicka på hamburgermenyn för att visa alternativen
When("Jag klickar på den", () => {
  cy.get(".header-hamburgare").click();
});

Then("Menyn visar alternativ", () => {
  // Verifiera att alternativen visas när hamburgermenyn klickas på
  cy.get("li").should("contain", "Home");
  cy.get("li").should("contain", "Men");
  cy.get("li").should("contain", "Women");
  cy.get("li").should("contain", "Children");
  cy.get("li").should("contain", "Baby");
});
