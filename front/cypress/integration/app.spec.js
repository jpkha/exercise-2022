describe('Navigation', () => {
    it('should do an mvp scenario of the test-application', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', '/realtors')
        cy.get('[data-cy=select-realtors]').contains('option');
        cy.get('[data-cy=select-realtors]').select('101');
        cy.url().should('include', '/realtors/101')
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=2')
        cy.get('[data-cy=message-list-container] >li:first-child').click();
        cy.url().should('include', '/realtors/101/messages/')
    })

    //Je peux changer d'agence, via le select et l'URL, et je vois la liste des messages de la dite agence
    it('should navigate between agency by url', () => {
        cy.visit('http://localhost:3000/realtors/101');
        cy.get('[data-cy=message-list-container]').contains('li');
        cy.visit('http://localhost:3000/realtors/102');
        cy.get('[data-cy=message-list-container]').contains('li');
    })

    it('should navigate between agency by selecting agency', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', '/realtors')
        cy.get('[data-cy=select-realtors]').select('101');
        cy.url().should('include', '/realtors/101')
        cy.get('[data-cy=message-list-container]').contains('li');
        cy.get('[data-cy=select-realtors]').select('102');
        cy.url().should('include', '/realtors/102')
        cy.get('[data-cy=message-list-container]').contains('li');
    })

    //Je peux faire défiler la liste des messages sur plusieurs pages, quelque soit la taille de l'écran
    it('should navigate load more message when scrolling to bottom on Desktop', () => {
        cy.visit('http://localhost:3000/realtors/101');
        cy.get('[data-cy=message-list-container]').children().should('have.length', 10);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=2')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 20);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=3')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 30);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=4')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 40);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=5')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 50);
    })
    it('should navigate load more message when scrolling to bottom on mobile', () => {
        cy.viewport('iphone-6')
        cy.visit('http://localhost:3000/realtors/101');
        cy.get('[data-cy=message-list-container]').children().should('have.length', 10);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=2')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 20);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=3')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 30);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=4')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 40);
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.url().should('include', '/realtors/101?page=5')
        cy.get('[data-cy=message-list-container]').children().should('have.length', 50);
    })

    //Je clique sur un message et je vois le détail du message
    it('should get a message detail on click message item', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', '/realtors')
        cy.get('[data-cy=select-realtors]').contains('option');
        cy.get('[data-cy=select-realtors]').select('101');
        cy.url().should('include', '/realtors/101')
        cy.get('[data-cy=message-list-container] >li:first-child').click();
        cy.url().should('include', '/realtors/101/messages/');
    })

    //Si le message n'était pas lu le compteur se décrémente
    it('onClick unread message should decrement the unread message count', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', '/realtors')
        cy.get('[data-cy=select-realtors]').contains('option');
        cy.get('[data-cy=select-realtors]').select('101');
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.get('[data-cy=message-list-container]').scrollTo('bottom');
        cy.get('[data-cy=unread-message]').invoke('text')
            .then((val1) => {
            cy.get('[data-cy=message-list-container] > li[data-cy-read="false"]:first').click();
            cy.get('[data-cy=unread-message]').invoke('text')
               .should((val2) => {
                   expect(val1).not.to.eq(val2)
               })
        })

    })
});
