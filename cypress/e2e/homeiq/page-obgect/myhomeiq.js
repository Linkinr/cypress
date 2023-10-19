export default class MyHomeIqPage {
    constructor() {
        this.createReportTab='a[href="/homeowners/report"]'
        this.createActivityTab='[ng-reflect-router-link="/homeowners/activity"][class="tab-nav__link"]'
        this.createLeadsTab='a[ng-reflect-router-link="/homeowners/traffic"]'
        this.createBannersTab='a[ng-reflect-router-link="/homeowners/banners"]'
        this.createBuyersTab='a[href="/buyers"]'
        this.createBuyersLeadsTab='a[href="/buyers/traffic"]'
        this.createBuyersBanners='a[ng-reflect-router-link="/buyers/banners"]'
        this.createAgentsTab='a[href="/partnership"]'
        this.createInviteAgentBtn='Invite Agent'
        this.createInvitationLinkBtn='Invitation link'
        this.createUploadBtn='Upload Database'
        this.createReportBtn='Create Report'
        this.createWebsiteLinkBtn='Get website link'
        this.createHomeValueBtn='a[href="/homeowners/banners/seller-traffic"]'
        this.createHomeWealthBtn='a[href="/homeowners/banners/wealth"]'
    }

    getReportTab (){
        return cy.get(this.createReportTab)
    }

    getActivityTab (){
        return cy.get(this.createActivityTab)
    }

    getLeadsTab (){
        return cy.get(this.createLeadsTab)
    }

    getBannersTab (){
        return cy.get(this.createBannersTab)
    }

    getUploadDatabaseBtn (){
        return cy.contains(this.createUploadBtn)
    }

    getCreateReportBtn (){
        return cy.contains(this.createReportBtn)
    }

    getBuyersTab (){
        return cy.get(this.createBuyersTab)
    }

    getBuyersLeadTab (){
        return cy.get(this.createBuyersLeadsTab)
    }

    getBuyersBannersTab (){
        return cy.get(this.createBuyersBanners)
    }

    getWebsiteLink (){
        return cy.contains(this.createWebsiteLinkBtn)
    }
    
    getHomeValueBtn (){
        return cy.get(this.createHomeValueBtn)
    }

    getHomeWealthBtn (){
        return cy.get(this.createHomeWealthBtn)
    }

    getAgentsTab (){
        return cy.get(this.createAgentsTab).click()
    }

    getInviteAgentBtn (){
        return cy.contains(this.createInviteAgentBtn)
    }

    getInvitationLinkBtn (){
        return cy.get(this.createInvitationLinkBtn)
    }

    getLoanOfficerTab (){
        return cy.get(this.createAgentsTab)
    }
}