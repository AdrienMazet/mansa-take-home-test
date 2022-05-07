// Use of cy.get('...') on data-cy attributes
// Normally I would have mocked the API call to retrieve user details
// And used cy.get('...') on the expected text content (initials, fullname)
// As the API call is done server side, I would have to mess a bit
// with the configuration to mock it
describe('User details', () => {
  beforeEach(() => cy.visit('/'));
  it('should display an avatar', () => {
    cy.get('[data-cy=Avatar]').should('be.visible');
  });
  it('should display username', () => {
    cy.get('[data-cy=Username]').should('be.visible');
  });
});
