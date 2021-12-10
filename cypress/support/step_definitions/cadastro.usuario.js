/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import register from '../pages/cadastrar.page'
import common from '../pages/common.page'


/* global Given, When, Then*/

Given('que acesso a tela de cadastro do sistema', () => {
    register.go_to_signup()
})

When('informo um {string}, um {string} e uma {string}', (username, email, senha) => {
    register.invalid_signup(username, email, senha)
})

And('clico em {string}', (button) => {
    common.click_action_button(button)    
})

When('vejo erro {string}', (message) => {
    common.alert_message(message)
})

Then('preencho todos os campos de cadastro', () => {
    register.valid_signup()
})

When('sou redirecionado ao dashboard do sistema', () => {
    common.successed_signup()
})
