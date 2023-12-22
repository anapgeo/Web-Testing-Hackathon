describe('Search', () => {
  let count1 = 0;
  let count2 = 0;

  beforeEach(() => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
  });

  it('Search Test', () => {
    const searchText = "Br";

    // Manually search for products
    cy.get('.products-wrapper').within(() => {
      cy.get('.product-name').each(($productName) => {
        const nameText = $productName.text().toLowerCase();

        if (nameText.includes(searchText.toLowerCase())) {
          count1++;
          cy.log(`Count1: ${count1}`);
        }
      });
    });

    // Type search text in the input field
    cy.get('.search-keyword').type(searchText).wait(1000);

    // Verify that the products displayed after searching contain the specified text
    cy.get('.products-wrapper').within(() => {
      cy.get('.product-name').each(($productName) => {
        const nameText = $productName.text().toLowerCase();
        cy.wrap(nameText).should('include', searchText.toLowerCase());
        count2++;
        cy.log(`Count2: ${count2}`);
      });
    });
  });

  it('Verify counts after the test', () => {
    // Using Cypress commands to handle asynchronous behavior
    cy.wrap(null).then(() => {
      cy.log(`Final Count1: ${count1}`);
      cy.log(`Final Count2: ${count2}`);
      expect(count1).to.equal(count2);
    });
  });
});
