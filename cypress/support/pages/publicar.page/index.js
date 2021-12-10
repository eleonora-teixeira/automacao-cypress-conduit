const el = require('./elements').ELEMENTS
const articleName = 'Cypress automation' + new Date().getTime()

import auth from '../autenticar.page'

class PublicarPage {

    go_to_dashboard() {
        cy.visit('/login')
        auth.valid_autentication()
        cy.get('button').contains('Sign in').click()
    }

    go_to_new_article() {
        cy.get(el.linkNovoArtigo).click()
    }

    invalid_article_publication(title, desc, body){
        if(title == '') {
            cy.get(el.inputTitle) 
        }else{
            cy.get(el.inputTitle).type(title)
        }

        if(desc == '') {
            cy.get(el.inputDescription)
        }else{
            cy.get(el.inputDescription).type(desc)
        }

        if(body == '') {
            cy.get(el.inputBody)
        }else {
            cy.get(el.inputBody).type(body)
        }
    }

    valid_article_publication() {
        cy.get(el.inputTitle).type(articleName)
        cy.get(el.inputDescription).type('Lorem ipsum')
        cy.get(el.inputBody).type('Lorem ipsum')
    }

    article_pulished() {
        cy.contains(articleName).should('be.visible')
        cy.get('h1').should('have.text', articleName)
    }
}

export default new PublicarPage()