/// <reference types="cypress" />

import publica from '../pages/publicar.page'

/* global Given, When, Then*/

When('que estou no dashboard do sistema', () => {
    publica.go_to_dashboard()
})

Then('acesso página de  publicação de artigos', () => {
    publica.go_to_new_article()
})

When('preencho os campos {string}, {string} e {string}', (title, description, body) => {
    publica.invalid_article_publication(title, description, body)
})

Then('preencho todos os campos obrigatórios', () => {
    publica.valid_article_publication()
})

Then('vejo o artigo publicado', () => {
    publica.article_pulished()
})