const el = require('./elements').ELEMENTS

class AutenticarPage {
    go_to_signin() {
        cy.visit('/login')
    }

    fill_signin_info(email,pass) {
        cy.get(el.email).type(email)
        cy.get(el.password).type(pass)
    }

    valid_autentication() {
        cy.get(el.email).type('peter.parker@mail.com')
        cy.get(el.password).type('123456')
    }
}

export default new AutenticarPage()