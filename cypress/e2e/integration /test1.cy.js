


describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });
    
      it('Add Products to Cart with a For Loop', () => {
        
        cy.get('.products') // Adjust the timeout as needed
        .should('have.length.gt', 0) // Ensure at least one product container is present
        .wait(2000); // Adjust the wait time as needed
  
        // Get the total number of products
        cy.get('.products').then(($products) => {
          const totalProducts = $products[0].childElementCount;
            
          // Iterate through each product
          for (let productIndex = 0; productIndex <totalProducts; productIndex++) {
            cy.get('.products .product').eq(productIndex)
              .within(() => {
                // Extract information about the product
             
    
                // Interact with the product (e.g., click the "ADD TO CART" button)
                cy.get('.product-action button').click();
              });
          }
        });
      });
    
      
      // Add more test cases for other interactions or scenarios as needed
  });
  