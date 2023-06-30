import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";






Given(/^que o cliente acesse o site Automation Exercise$/, () => {
	cy.visit('/login')
});

Then(/^realize o seu login com sucessso$/, () => {
	return true;
});

When(/^tentar se cadastrar novamente$/, () => {
	return true;
});

Then(/^ele deverá receber uma mensagem de que o e-mail já existe$/, () => {
	return true;
});


