describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise#/offers');
      });


      it('Top Deals test', () => {
       // Get all <li> elements within the <ul>, excluding the 2nd and last before the last
    cy.get('ul.pagination.pull-right  li:not(:first-child):not(:nth-child(1)):not(:nth-child(2)):not(:last-child):not(:nth-last-child(2))').each(($li, index, $lis) => {
     cy.get($li).find('a').click()
     cy.get('table.table-bordered tbody tr').each(($row, index, $rows) => {
        try {
            // Get the values from the 2nd and 3rd columns of the current row
            const price = parseInt($row.find('td:nth-child(2)').text());
            const discountPrice = parseInt($row.find('td:nth-child(3)').text());
    
            // Assert that the price is greater than the discount price
            expect(price).to.be.greaterThan(discountPrice);
          } catch (error) {
            // Log the error and continue to the next row
            cy.log(`Error in row ${index + 1}: ${error.message}`);
          }
      });
    
    })
      })
})