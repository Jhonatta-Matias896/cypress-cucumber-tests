const faker = require('faker-br')
const elements = require('../../../Elementos/globalElements').ELEMENTS
const nomeUsuario = faker.name.firstName()
	const email = faker.internet.email(nomeUsuario)
import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";







Given(/^que o cliente acesse o site Automation Exercise$/, () => {
	cy.visit('/login')
});

When(/^realize o seu cadastro com sucessso$/, () => {
	//pre-cadastro
	// const nomeUsuario = faker.name.firstName
	// const email = faker.internet.email(nomeUsuario)
	cy.get(elements.campoNome).type(nomeUsuario)
	cy.get(elements.campoEmail).type(email)
	cy.get(elements.btnSingUp).click()

	//cadastro
	const anoAleatorio = Cypress._.random(1900, 2021);
	cy.get(elements.tituloGenero).click()
	cy.get(elements.campoSenha).type(Cypress.env('senha01'))
	cy.get(elements.seletor).its('length', { log: false }).then(() => {
		cy.get(elements.diaNascimento).select(Cypress._.random(1, 31))
	});
	cy.get(elements.seletor).its('length', { log: false }).then(() => {
		cy.get(elements.mesNascimento).select(Cypress._.random(1, 12))
	});
	cy.get(elements.anoNascimento).select(anoAleatorio.toString());
	cy.get(elements.checkBoxe).check()
	cy.get(elements.primeiroNome).type(faker.name.firstName())
	cy.get(elements.ultimoNome).type(faker.name.lastName())
	cy.get(elements.nomeEmpresa).type(faker.company.companyName())
	cy.get(elements.nomeRua).type(faker.address.streetName())
	cy.get(elements.nomePais).select(Cypress._.random(0, 6))
	cy.get(elements.nomeEstado).type(faker.address.state())
	cy.get(elements.nomeCidade).type(faker.address.city())
	cy.get(elements.cep).type(faker.address.zipCode())
	cy.get(elements.numeroTelefone).type(faker.phone.phoneNumber())
	cy.get(elements.btnCriarConta).click()
	cy.contains(elements.msgDeContaCriada).should('be.visible')
	
	
});

When(/^tentar se cadastrar novamente$/, () => {
	cy.get(elements.btnSingupOrLogin).click()
	cy.get(elements.verificacaoDeNomeUsuario).should('have.text', nomeUsuario)
	cy.get(elements.btnLogout).click()
	cy.get(elements.campoNome).type(nomeUsuario)
	cy.get(elements.campoEmail).type(email)
	cy.get(elements.btnSingUp).click()

});

Then(/^ele deverá receber uma mensagem de que o e-mail já existe$/, () => {
	cy.get(elements.errorEmailExistente).should('have.text', elements.msgErrorEmailExistente)
});


