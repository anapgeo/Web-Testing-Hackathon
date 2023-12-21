describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });
it('Complete order', () => {
        
    cy.get('.products') // Adjust the timeout as needed
    .should('have.length.gt', 0) // Ensure at least one product container is present
    .wait(2000); // Adjust the wait time as needed

    // Get the total number of products
    cy.get('.products').then(() => {

      // Iterate through each product
      for (let productIndex = 0; productIndex <3; productIndex++) {
        cy.get('.products .product').eq(productIndex)
          .within(() => {
            // Extract information about the product
         

            // Interact with the product (e.g., click the "ADD TO CART" button)
            cy.get('.product-action button').click();
          });
      }
      cy.get('img[alt="Cart"]').click();
      cy.get('.cart-preview  ')
      .within(() => {
        cy.get('.action-block button').click(); // Replace 'inner-div' with the actual class or selector of the inner div
      });

    });
  });
});