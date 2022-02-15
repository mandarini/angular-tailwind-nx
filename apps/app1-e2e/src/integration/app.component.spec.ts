describe('app1', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('angular-tailwind-nx-root').should('exist');
  });
});