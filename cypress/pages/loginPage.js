class LoginPage {
  visit() {
    cy.visit('/');
  }

  getUsernameInput() {
    return cy.get('input[name="username"], input#txtUsername, input[placeholder="Username"], input[placeholder="Username"]') // tries common selectors
  }

  getPasswordInput() {
    return cy.get('input[name="password"], input#txtPassword, input[placeholder="Password"]')
  }

  getLoginButton() {
    return cy.get('button[type="submit"], input[type="submit"], button#btnLogin')
  }

  login(username, password) {
    this.getUsernameInput().clear().type(username);
    this.getPasswordInput().clear().type(password);
    this.getLoginButton().click();
  }

  getErrorMessage() {
    //kalau error
    return cy.get('.oxd-alert-content, .message, .alert, .error, div[role="alert"]').first();
  }

  getUserDropdown() {
    //kalau sukses
    return cy.get('.oxd-userdropdown-name, #welcome, .profile-img').first();
  }
}

module.exports = new LoginPage();
