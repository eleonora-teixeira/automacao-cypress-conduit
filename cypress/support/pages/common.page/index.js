const el = require('./elements').ELEMENTS

class CommonPage {
    click_action_button(button) {
        cy.get('button').contains(button).click()
    }

    alert_message(message) {
        cy.contains(message).should('be.visible')
    }

    successed_signup(message) {
        cy.contains('No articles are here... yet').should('be.visible')
    }
}

export default new CommonPage()