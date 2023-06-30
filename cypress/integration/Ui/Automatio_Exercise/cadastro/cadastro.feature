Feature: Tela de cadastro

    Como cliente quero me cadastrar no site Automation Exercise
    para realizar minhas compras com segurança.
    Criterios de aceite
    1. O cadastro deve ser feito com e-mail único não podendo se repetir no banco de dados
    2. Os campos de nome e e-mail são obrigatórios.
    3. Os campos de informações dentro do formulário de cadastro com * são obrigatórios
    então não podem permanecer vazios.


    Scenario: Validação do e-mail existente

        Given que o cliente acesse o site Automation Exercise
        And realize o seu login com sucessso
        When tentar se cadastrar novamente
        Then ele deverá receber uma mensagem de que o e-mail já existe


        # Scenario: Validação dos campos obrigatórios

        # Given que o cliente acesse o site Automation Exercise
        # And Faça o pré-cadastro
        # And Preencha todos os campos do formulário exceto o campo primeiro nome
        # When Tentar se cadastrar
        # Then Ele deverá receber uma mensagem de que o campo é obrigatórios
