describe('User details', () => {
  beforeEach(() => cy.visit('/'));
  it('display an avatar', () => {
    cy.get('[data-cy=Avatar]').should('be.visible');
  });
  it('display username', () => {
    cy.get('[data-cy=Username]').should('be.visible');
  });
});
