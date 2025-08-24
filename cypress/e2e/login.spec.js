const loginPage = require('../pages/loginPage');
const users = require('../fixtures/users.json');

describe('Feature: Login OrangeHRM', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('TC-01 Successful login with valid credentials', () => {
    cy.loginUI(users.valid.username, users.valid.password);

    loginPage.getUserDropdown().should('be.visible');
    cy.url().should('not.include', '/auth/login');
  });

  it('TC-02 Login fails with invalid password', () => {
    cy.loginUI(users.invalidPass.username, users.invalidPass.password);
    loginPage.getErrorMessage().should('be.visible').and(($el) => {
      const text = $el.text().toLowerCase();
      expect(text).to.match(/invalid|incorrect|username|password|error/);
    });
    cy.url().should('include', '/auth/login').or('include', '/login');
  });

  it('TC-03 Login fails with invalid username', () => {
    cy.loginUI(users.invalidUser.username, users.invalidUser.password);
    loginPage.getErrorMessage().should('be.visible');
    cy.url().should('include', '/auth/login').or('include', '/login');
  });

  it('TC-04 Login fails with both fields empty', () => {
    loginPage.getLoginButton().click();
    //login kalau error
    loginPage.getErrorMessage().should('exist').and('be.visible');
  });

  it('TC-05 Login fails when only username is provided', () => {
    loginPage.getUsernameInput().type(users.valid.username);
    loginPage.getLoginButton().click();
    loginPage.getErrorMessage().should('exist').and('be.visible');
  });

  it('TC-06 Login fails when only password is provided', () => {
    loginPage.getPasswordInput().type(users.valid.password);
    loginPage.getLoginButton().click();
    loginPage.getErrorMessage().should('exist').and('be.visible');
  });

  it('TC-07 Login fails for SQL injection style input', () => {
    cy.loginUI(users.sqlInjection.username, users.sqlInjection.password);
    loginPage.getErrorMessage().should('be.visible');
    cy.url().should('include', '/auth/login').or('include', '/login');
  });

});
