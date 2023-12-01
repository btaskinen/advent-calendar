/// <reference types="cypress" />

describe('Advent Calendar App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Page has correct content', () => {
    cy.get('[data-cy="app-title"]').contains('Advendt Calendar 2023');
  });
});
