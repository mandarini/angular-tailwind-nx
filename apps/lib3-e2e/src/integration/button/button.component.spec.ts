describe('lib3', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=href;'));
  it('should render the component', () => {
    cy.get('angular-tailwind-nx-button').should('exist');
  });
});