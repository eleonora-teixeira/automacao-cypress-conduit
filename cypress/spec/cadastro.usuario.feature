Feature: Cadastro de Usuário
    As usuário do sistema
    Want realizar cadastro
    To ter acesso as funcionalidades do sistema

Scenario Outline: Cadastrar usuário preenchendo informações inválidas
	Given que acesso a tela de cadastro do sistema
    When informo um <username>, um <email> e uma <password>
    And clico em 'Sign up'
    Then vejo erro <error_message>
    Examples:
        | username  | email     | password   |         error_message           |
        |'invalido' |'valido'   |'valido'    |'username has already been taken'|
        |'valido'   |'invalido' |'valido'    |'email has already been taken'   |
        |'valido'   |'invalido' |'invalido'  |"password can't be blank"        |

Scenario: Cadastrar usuário com Sucesso
Given que acesso a tela de cadastro do sistema
When preencho todos os campos de cadastro
And clico em 'Sign up'
Then sou redirecionado ao dashboard do sistema