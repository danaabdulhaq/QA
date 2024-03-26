// cypress/integration/search.spec.js




  describe('Search Component Tests', () => {
    beforeEach(() => {
      cy.visit('https://stacksinfo.web.app/');
    });

   

    
    it('test case 1', () => {
try{
      cy.get('input[type="text"]').type('react');
  
      cy.get('.card').each(($card) => {
        
        cy.wrap($card).find('.card-result img').then(($image) => {
          const title = $image.attr('title');
          expect(title).to.include('react');
        });
      });

    }catch(error){}

    });
  

  it('test case 2 ', () => {

    cy.get('input[type="text"]').type('nablus');
    cy.get('input[type="text"]').type('{enter}');
    cy.get('.company-slogan').should('exist')
    .contains(/nablus/i);
    
  });



  

  it('test case 3 ', () => {

    cy.get('input[type="text"]').type('asal');
    cy.get('input[type="text"]').type('{enter}');
    cy.get('.company-name').should('exist')
    .contains(/asal/i);
    
  });

  
  it('test case 4', () => {

    cy.get('input[type="text"]').type('c++');

    cy.get('.card').each(($card) => {
      
      cy.wrap($card).find('.card-result img').then(($image) => {
        const title = $image.attr('title');
        expect(title).to.include('c++');
      });
    });
    
  });



  
  it('test case 5 ', () => {

    cy.get('input[type="text"]').type('##');
    cy.get('input[type="text"]').type('{enter}');
    cy.get('.Not-found-container').should('exist');
    
  });



  it('test case 6 ', () => {

    cy.get('input[type="text"]').type('dana');
    cy.get('input[type="text"]').type('{enter}');
    cy.get('.Not-found-container').should('exist');
    
  });





  

  // Add more test cases as needed
});
