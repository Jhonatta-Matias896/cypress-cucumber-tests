const faker = require('faker-br')
const elements = require('../../../Elementos/globalElements').ELEMENTS
const nomeUsuario = faker.name.firstName()
const email = faker.internet.email(nomeUsuario)
import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";


When(/^faça o pré-cadastro$/, () => {
    cy.get(elements.campoNome).type(nomeUsuario)
cy.get(elements.campoEmail).type(email)
cy.get(elements.btnSingUp).click()
});



//Teste sem assertiva no momento.
When(/^preencha todos os campos do formulario exceto o campo primeiro nome$/, () => {

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
	//cy.get(elements.primeiroNome).type(faker.name.firstName())
	cy.get(elements.ultimoNome).type(faker.name.lastName())
	cy.get(elements.nomeEmpresa).type(faker.company.companyName())
	cy.get(elements.nomeRua).type(faker.address.streetName())
	cy.get(elements.nomePais).select(Cypress._.random(0, 6))
	cy.get(elements.nomeEstado).type(faker.address.state())
	cy.get(elements.nomeCidade).type(faker.address.city())
	cy.get(elements.cep).type(faker.address.zipCode())
	cy.get(elements.numeroTelefone).type(faker.phone.phoneNumber())
	cy.get(elements.btnCriarConta).click()
	
   
});

// When(/^tentar se cadastrar novamente$/, () => {
	
// });

// Then(/^ele deverá receber uma mensagem de que o campo primeiro nome é obrigatório$/, () => {
// 	return true;
// });
