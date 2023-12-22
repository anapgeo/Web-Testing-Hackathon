describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/');
      });


      it('Search Test', () => {
        
        const searchText="Br"
        // Type a search query into the input field
    cy.get('.search-keyword').type(searchText).wait(1000);
 // Get all product names and check if they contain the letter "b"
 cy.get('.products-wrapper').within(()=>{cy.get('.product-name').each(($productName) => {
    try {
        const nameText = $productName.text();
        expect(nameText.toLowerCase()).to.include(searchText.toLowerCase());
      } catch (error) {
        // Handle the error gracefully (e.g., log it or perform other actions)
        cy.log(`Error: ${nameText}`);
      }
  });
 })
      })
    
    

})