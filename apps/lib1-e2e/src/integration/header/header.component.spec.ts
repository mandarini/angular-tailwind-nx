describe('lib1', () => {
  beforeEach(() => cy.visit('/iframe.html?id=headercomponent--primary'));
  it('should render the component', () => {
    cy.get('angular-tailwind-nx-header').should('exist');
  });
});