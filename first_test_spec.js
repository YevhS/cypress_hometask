/// <reference types="cypress" />

describe('User should be able to', () => {
    let user;
    before(function () {
        cy.visit('https://react-redux.realworld.io/#/');
    
        cy.task("freshUser").then((freshUser) => {
            user = freshUser;
        });
    });

    it('register with Faker', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password).should('have.value', user.password);
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('contain', `${user.username}`);
        cy.get(':nth-child(3) > .nav-link').click();
        cy.get('.btn-outline-danger').click();
      });

    it('login with registered credentials', () => {
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type('sikasu@mailinator.com');
      cy.get(':nth-child(2) > .form-control').type('Password12345.');
      cy.get('.btn').click();
      cy.get(':nth-child(4) > .nav-link').should('contain', 'Dicta');
    });
  })