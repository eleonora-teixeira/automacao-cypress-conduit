Feature: Autenticação de usuário
    As usuário do sistema
    Want me autenticar
    To acessar meu perfil de usuário


Scenario Outline: Autenticar usuário preenchendo informações inválidas
	Given que estou na tela de autenticação
    When informo um <email> e uma <password>
    And clico em 'Sign in'
    Then vejo erro <error_message>
    Examples:
        | email                 | password   |         error_message           |
        |'peter.parker@bol.com' |'123,'      |'email or password is invalid'   |
        |'peter.parker@mail.com'|'12345'     |'email or password is invalid'   |


Scenario: Autenticar usuário com Sucesso
Given que estou na tela de autenticação
When preencho dados válidos de email e senha
And clico em 'Sign in'
Then sou redirecionado ao dashboard do sistema