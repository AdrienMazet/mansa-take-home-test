describe('Accounts details', () => {
  beforeEach(() => cy.visit('/'));
  it('display section name', () => {
    cy.contains('Accounts').should('be.visible');
  });
  it('display accounts details', () => {
    cy.contains('Account number:').should('be.visible');
    cy.contains('Balance:').should('be.visible');
  });
});
