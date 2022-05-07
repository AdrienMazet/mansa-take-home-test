describe('Layout', () => {
  beforeEach(() => cy.visit('/'));
  it('display a header', () => {
    cy.get('header').should('be.visible');
  });
  it('display accessible Mansa logo', () => {
    cy.get('img').should('be.visible');
    cy.get('[alt="Logo de Mansa"]').should('be.visible');
  });
  it('display main content', () => {
    cy.get('main').should('be.visible');
  });
});
