describe('Business details', () => {
  beforeEach(() => cy.visit('/'));
  it('display section name', () => {
    cy.contains('Company').should('be.visible');
  });
  it('display business details', () => {
    cy.contains('Name').should('be.visible');
    cy.contains('SIRET').should('be.visible');
    cy.contains('Creation').should('be.visible');
    cy.contains('Address').should('be.visible');
  });
});
