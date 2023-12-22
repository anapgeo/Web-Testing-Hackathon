


describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });
    
      it('Add  all products to Cart', () => {
        
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
      
      it('Add  multiple products to Cart ', () => {
        
        cy.get('.products') // Adjust the timeout as needed
        .should('have.length.gt', 0) // Ensure at least one product container is present
        .wait(2000); // Adjust the wait time as needed
  
        // Get the total number of products
        cy.get('.products').then(($products) => {
          const totalProducts = $products[0].childElementCount;
          let productIndex=0;
          Math.floor(Math.random() * totalProducts);
          // Iterate through each product
          for (let index = 0; index <5; index++) {
            productIndex=Math.floor(Math.random() * totalProducts);
            cy.get('.products .product').eq(productIndex)
              .within(() => {
                let increment=Math.floor(Math.random() * 10);
                // Extract information about the product
                for (increment;  increment>0; increment--){  
                cy.get('.increment').click();
                }
                // Interact with the product (e.g., click the "ADD TO CART" button)
                cy.get('.product-action button').click();
              });
          }
        });
      });
    
      
      // Add more test cases for other interactions or scenarios as needed
  });
  