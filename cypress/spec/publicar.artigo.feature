
Feature: Publicação de artigo
    As usuário do sistema
    Want acessar a área de criação de artigos
    To poder realizar a publicação de artigos


Scenario Outline: Publicar artigos não preenchendo campos obrigatórios
    Given que estou no dashboard do sistema
    When acesso página de  publicação de artigos
    Then preencho os campos <title>, <description> e <body>
    When clico em 'Publish Article'
    Then vejo erro <error_message>
    Examples:
        | title                             | description  | body        |      error_message         |
        |''                                 |'Lorem ipsum' |'Lorem ipsum'|"title can't be blank"      |
        |'Automação de testes com Capybara' |''            |'Lorem ipsum'|"description can't be blank"|
        |'Automação de testes com Capybara' |'Lorem ipsum' |''           |"body can't be blank"       |


Scenario: Publicar artigo com sucesso
Given que estou no dashboard do sistema
When acesso página de  publicação de artigos
Then preencho todos os campos obrigatórios
When clico em 'Publish Article'
Then vejo o artigo publicado


