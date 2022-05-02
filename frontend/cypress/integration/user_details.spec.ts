/// <reference types="cypress" />

// Use of cy.get('...') on classnames, even if it's discouraged
// Normally I would have mocked the API call to retrieve user details
// And used cy.get('...') on the expected text content (initials, fullname)
// As the API call is done server side, I would have to mess a bit
// with the configuration to mock it
describe('User details', () => {
  beforeEach(() => cy.visit('/'));
  it('should display an avatar', () => {
    cy.get('*[class^="Avatar"]').should('be.visible');
  });
  it('should display username', () => {
    cy.get('*[class^="Username"]').should('be.visible');
  });
});
