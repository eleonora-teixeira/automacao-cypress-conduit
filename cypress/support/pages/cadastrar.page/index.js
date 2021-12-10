const el = require('./elements').ELEMENTS
const Faker = require('faker')

class CadastroPage {

    go_to_signup(){
        cy.visit('/register')
    }

    invalid_signup(username, email, senha){
        if(username == 'valido'){
            cy.get(el.username).type(`${Faker.name.firstName()} ${Faker.name.lastName()}`)
        }else if(username == 'invalido'){
            cy.get(el.username).type('Peter Parker')
        }

        if(email == 'valido'){
            cy.get(el.email).type(`${Faker.internet.email()}`)
        }else if(email == 'invalido'){
            cy.get(el.email).type('peter.parker@mail.com')
        }

        if(senha == 'valido'){
            cy.get(el.password).type(`${Faker.internet.password()}`)
        }else if(senha == 'invalido'){
            cy.get(el.password)
        }
    }

    valid_signup(){
        cy.get(el.username).type(`${Faker.name.firstName()} ${Faker.name.lastName()}`)
        cy.get(el.email).type(`${Faker.internet.email()}`)
        cy.get(el.password).type(`${Faker.internet.password()}`)  
    }
}

export default new CadastroPage()