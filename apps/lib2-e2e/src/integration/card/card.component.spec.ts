describe('lib2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=cardcomponent--primary&args=title;url;'));
  it('should render the component', () => {
    cy.get('angular-tailwind-nx-card').should('exist');
  });
});