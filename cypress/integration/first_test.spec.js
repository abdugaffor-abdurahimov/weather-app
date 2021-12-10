describe('Heading weather', () => {
  it('contains correct type', () => {
    cy.visit('http://localhost:8080/');
    cy.get("[data-cy='title-weather']").invoke('text').should('equal', 'Weather Forecast');
    cy.get("input[name='city']").invoke('val').should('equal', 'Tashkent');
    cy.get("input[name='country']").invoke('val').should('equal', 'Uzbekistan');
    cy.get('button').invoke('text').should('equal', 'Search');
  });
});
