describe('Registration Page', () => {
    it('should navigate to user registration page', () => {
        cy.visit('https://test.crowdstreet.com/')
            .get('.join-button')
            .first()
            .click({force: true})
    })

    it('should enter data into required fields and submit form', () => {
        cy.get('#create_account_email')
            .type('testuser@gmail.com')

        cy.get('.input-label')
            .contains('First Name')
            .parent()
            .find('input')
            .type('Jerome')

        cy.get('.input-label')
            .contains('Last Name')
            .parent()
            .find('input')
            .type('Quincy')

        cy.get('.input-label')
            .contains('Create a Password')
            .parent()
            .find('input')
            .type('Password1234!')
            .wait(500)

        cy.get('.input-label')
            .contains('Confirm Password')
            .parent()
            .find('input')
            .type('Password1234!')

        cy.get('.input-label')
            .contains('Phone Number')
            .parent()
            .find('input')
            .type('5031234567')

        cy.get('.input-label')
            .contains('Street Address')
            .parent()
            .find('input')
            .type('12345 NW Summertime St')

        cy.get('.input-label')
            .contains('City')
            .parent()
            .find('input')
            .type('Portland')

        cy.get('.input-label')
            .contains('State')
            .parent()
            .find('input')
            .type('Oregon')

        cy.get('.accredited-investor-container')
            .find('[type="radio"]')
            .first()
            .check({force: true})

        cy.get('.terms-of-service-container')
            .find('[type="checkbox"]')
            .check({force: true})

        cy.get('.account-created-dialog')
            .should('be.visible')
    })


})
  