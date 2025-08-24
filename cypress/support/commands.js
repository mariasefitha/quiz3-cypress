Cypress.Commands.add('loginUI', (username, password) => {
  const loginPage = require('../pages/loginPage');
  loginPage.login(username, password);
});
