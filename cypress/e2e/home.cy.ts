describe("home page opens", () => {
  it("visit page", () => {
    cy.visit("http://localhost:3000");
  });
});

describe("render UI elements", () => {
  it("render header", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-cy="header"]').contains("HackerNews");
  });

  it("render list of stories", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="stories-container"]');
  });

  it("render 10 stories", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="story-item"]').should("have.length", 10);
  });

  it("all stories have a thumbnail", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="story-item"]').find("img").should("exist");
  });
});

export {};
