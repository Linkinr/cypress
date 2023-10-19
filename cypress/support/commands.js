// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('auth', (email, password) => {
    // const email = "groifrummapadu-6728@yopmail.com";
    // const password = "123456"
    cy.session([email, password], () => {
        cy.visit('/sign-in')
        cy.get('input[type=email]').type(email)
        cy.get('input[type=password]').type(password)
        cy.get('button[type=submit]').click()
        cy.get('div').should('have.class', 'modal-content')
        cy.get('div[class="close inline-svg"]').click()
        cy.url().should('include', '/homeowners')
        cy.get('header').should('exist')
    })
    
  
  })

  
  