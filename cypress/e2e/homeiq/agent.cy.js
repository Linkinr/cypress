///<reference types="cypress" />

import MyHomeIqPage from "./page-obgect/myhomeiq"

describe('agent', () =>{
    const myhomeiq = new MyHomeIqPage()
    beforeEach(() => {
        cy.auth('kovalchuk-ruslan@ukr.net','0d8c792e');
        cy.visit('/')
    });
    it.skip('homeowners', ()=>{
        cy.url().should('include', '/homeowners')
        myhomeiq.getReportTab().should('exist')
        myhomeiq.getActivityTab().should('exist')
        myhomeiq.getLeadsTab().should('exist')
        myhomeiq.getUploadDatabaseBtn().should('exist')
        myhomeiq.getCreateReportBtn().should('exist')
        cy.get('datatable-row-wrapper').should('exist')
    })

    it.skip('homeowners/activity',()=>{
        cy.visit('/')
        myhomeiq.getActivityTab().click()
        cy.get('.filter').should('exist')
    })

    it('homeowners/leads',()=>{
        cy.visit('/')
        myhomeiq.getLeadsTab().click()
        cy.get('.filter-container').should('exist')
    })

    it('homeowners/banners',()=>{
        cy.visit('/')
        myhomeiq.getBannersTab().click()
        cy.url().should('include', 'homeowners/banners/seller-traffic')
        myhomeiq.getWebsiteLink().should('exist')
        myhomeiq.getHomeValueBtn().should('exist')
        myhomeiq.getHomeWealthBtn().should('exist')
    })

    it('buyers',()=>{
        cy.visit('/')
        myhomeiq.getBuyersTab().click()
        cy.url().should('include', '/buyers/traffic')
        myhomeiq.getBuyersLeadTab().should('exist')
        myhomeiq.getBuyersBannersTab().should('exist')
    })

    it('buyers/banners',()=>{
        cy.visit('/')
        myhomeiq.getBuyersTab().click()
        myhomeiq.getBuyersBannersTab().click()
        cy.url().should('include', '/buyers/banners')
        // myhomeiq.getWebsiteLink().should('exist')
    })

    it('partnership',()=>{
        cy.visit('/')
        myhomeiq.getLoanOfficerTab().click()
        cy.url().should('include', '/partnership/active')
        cy.contains('My Loan Officer').should('exist')
    })





})