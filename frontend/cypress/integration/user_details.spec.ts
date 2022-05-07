import { getFormattedFullName, getInitials } from '../../utils/user';

describe('User details', () => {
  beforeEach(() => cy.visit('/'));
  it('display an avatar', () => {
    cy.get('[data-cy=Avatar]').should('be.visible');
  });
  it('display username', () => {
    cy.get('[data-cy=Username]').should('be.visible');
  });
  it('display a refetch user button', () => {
    cy.contains('Refetch user').should('be.visible');
  });
  it('display a button that update the user when clicked', () => {
    const newUser = {
      name: { first: 'Ivan', last: 'Florence' },
    };
    cy.intercept('https://randomuser.me/api', {
      results: [newUser],
    });
    cy.contains('Refetch user').click();
    cy.contains(
      getFormattedFullName(newUser.name.first, newUser.name.last),
    ).should('be.visible');
    cy.contains(getInitials(newUser.name.first, newUser.name.last)).should(
      'be.visible',
    );
  });
});
