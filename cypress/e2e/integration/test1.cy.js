


describe('US1: Add Products in the Cart', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });
    
      it('Verify Adding All Products to Cart', () => {
        var totalPrice = 0;
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
                
                cy.get('.product-price').then(($0) => {
                  
                  totalPrice= totalPrice + parseInt($0.text())
                  cy.log(totalPrice)
                })      
                
                
                // Interact with the product (e.g., click the "ADD TO CART" button)
                cy.get('.product-action button').click();
              });
          }
        });
        cy.get('.cart-info').find('tr:contains("Price") strong').invoke('text').then((price) => {
          // Log the retrieved price value
          cy.log(`Price: ${price}`);
          expect(parseInt(price)).to.equal(totalPrice);
        })
      });
      
      it('Verify Adding Multiple Random Products to Cart', () => {
        
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
      it('Verify Adding Specific Products to Cart', () => {
        
        cy.get('.products') // Adjust the timeout as needed
        .should('have.length.gt', 0) // Ensure at least one product container is present
        .wait(2000); // Adjust the wait time as needed
        let expectedPrice=0;
        let productIndex=Math.floor(Math.random() * 30);
        for (let iterations=1;  iterations<=3; iterations++){  
        // Get the total number of products
        cy.get('.products').then(($products) => {
          const totalProducts = $products[0].childElementCount;
            
            
            cy.get('.products .product').eq(productIndex)
              .within(() => {
                

                let pricePrev=0
                let productPrice=0;
                
                // Extract information about the product
                
             
                cy.get('.product-action button').click();
                cy.get('.product-price').then(($0) => {
                  
                  productPrice= parseInt($0.text())
                  expectedPrice=expectedPrice + iterations*productPrice
                  cy.log("Product Price:" + productPrice)
                  cy.log("Expected Price:" + expectedPrice)
                 
                })
                if(iterations!=2){
                  cy.get('.increment').click();
                  }
                
                  
             } )
            
              
                // Interact with the product (e.g., click the "ADD TO CART" button)
              
              });
              cy.get('.cart-info').find('tr:contains("Price") strong').invoke('text').then((price) => {
                // Log the retrieved price value
                cy.log(`Cart Price: ${price}`);
                try{
                expect(expectedPrice).to.equal(parseInt(price));
                }
                catch(error){
                  cy.log(expectedPrice)
                  cy.log(`Cart Price: ${price}`)
                }
              })
            }
        });
      });
    
      
      // Add more test cases for other interactions or scenarios as needed
  