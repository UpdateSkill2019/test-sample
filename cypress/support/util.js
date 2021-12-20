
  export function login(){
    cy.visit("http://localhost:4200/")
    cy.get('[name="email"]').type("user")
    cy.get('[name="password"]').type("user")
    cy.get('button').click()
  }