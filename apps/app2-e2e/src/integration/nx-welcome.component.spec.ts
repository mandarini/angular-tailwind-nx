describe('app2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('angular-tailwind-nx-nx-welcome').should('exist');
  });
});