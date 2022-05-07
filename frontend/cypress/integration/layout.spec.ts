describe('Layout', () => {
  beforeEach(() => cy.visit('/'));
  it('should display a header', () => {
    cy.get('header').should('be.visible');
  });
  it('should display accessible Mansa logo', () => {
    cy.get('img').should('be.visible');
    cy.get('[alt="Logo de Mansa"]').should('be.visible');
  });
  it('should display main content', () => {
    cy.get('main').should('be.visible');
  });
});
