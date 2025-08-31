import LoginPage from '../pages/loginPage';

describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();

  it('Should login successfully with valid credentials', () => {
    // 🔎 intercept API login
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    loginPage.visit();
    loginPage.login('Admin', 'admin123');

    // cek URL setelah login
    cy.url().should('include', '/dashboard');

    // pastikan request login sukses (status 200)
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);
  });

  it('Should show error message with invalid credentials', () => {
    // 🔎 intercept API login
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    loginPage.visit();
    loginPage.login('Admin', 'salahpassword');

    // cek pesan error
    loginPage.getErrorMessage().should('be.visible');
    loginPage.getErrorMessage().should('contain.text', 'Invalid credentials');

    // pastikan request login gagal (status 401 atau 400)
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 401);
  });
});
