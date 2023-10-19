///<reference types="cypress" />

import MyHomeIqPage from "./page-obgect/myhomeiq"

describe('nav', () =>{
    const myhomeiq = new MyHomeIqPage()
    it('nav', ()=>{
        cy.auth()

        cy.visit('/')
        cy.url().should('include', '/homeowners')

        //Buyers Leads
        myhomeiq.getBuyersTab()
        cy.url().should('include', '/buyers/traffic')
        cy.contains('Customize landing page').should('exist').and('contain', 'Customize landing page')
        cy.contains('View your landing page').should('exist').and('contain', 'View your landing page')
        // cy.get('button').children('span').should('exist').and('contain', 'Customize landing page')
        // cy.get('button').children('span')

        //Buyers Banners

        myhomeiq.getBannersTab()
        cy.url().should('include', '/buyers/banners')
        cy.get('h1').should('exist').and('contain', 'Banners for buyers')
        cy.contains('Link to your buyer landing page').should('exist')
        cy.get('landing-link').should('exist')

        //Agents

        myhomeiq.getAgentsTab()
        myhomeiq.getInviteAgentBtn().should('exist')
        myhomeiq.getInvitationLinkBtn().should('exist')
        // cy.contains('Invite agents to grow your database').should('exist')
        cy.contains('Invites').should('exist')
        cy.contains('Invite Recommendations').should('exist')
        

    })
    // it('nav',()=>{
        
    // })

})