describe('US5: Use Promo Codes/Coupons for an Order', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });


      it('Verify Promo Code Application', () => {
             
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
        cy.get('.action-block button').click(); 
      });

      cy.get('.promoCode').type('Test')
      cy.get('.promoBtn').click().wait(5000)

      cy.get('.promoWrapper').within(()=>{
        cy.get('span').should('be.visible');
      
        cy.get('span').should('have.text',
            "Invalid code ..!"
          )
      });      
    

      })
    
    

})
})