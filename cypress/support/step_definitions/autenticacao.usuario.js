/// <reference types="cypress" />

import auth from '../pages/autenticar.page'

/* global Given, When, Then*/

When('que estou na tela de autenticação', () => {
    auth.go_to_signin()
})

When('informo um {string} e uma {string}', (email, password) => {
    auth.fill_signin_info(email, password)
})

When('preencho dados válidos de email e senha', () => {
    auth.valid_autentication()
})
