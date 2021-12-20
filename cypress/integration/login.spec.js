
import { login } from "./../support/util.js"
describe('Task manager', () => {
    it('Navigate to landing page!', () => {
    login()
     cy.contains("My day")
    })
    it('Validate task addition and removal',()=>{
        login()
        cy.get('[placeholder="Task title"]').type("RakhiTask1")
        cy.contains("Add").click()
        cy.contains('RakhiTask1').next().should('exist');
        cy.contains('RakhiTask1').next().click({ force: true })
        cy.contains('RakhiTask1').should('not.exist');
    })
    it('Validate task marking and unmarking',()=>{
        login()
        cy.get('[placeholder="Task title"]').type("RakhiTask2")
        cy.contains("Add").click()
        cy.contains('RakhiTask2').prev().click()
        cy.contains('.completed-task','RakhiTask2').should('exist')

    })
    it('Validate all task pages',()=>{
        login()
        cy.get('[placeholder="Task title"]').type("RakhiTask2")
        cy.contains("Add").click()
        cy.contains("All Tasks").click()
        cy.get('app-all-tasks-page').contains('RakhiTask2').should('exist')
        cy.get('app-nav-toolbar').contains('All Tasks').should('exist')
        cy.url().should('include','/all-tasks')

    })
    it('Validate Important task pages',()=>{
        login()
        cy.get('[placeholder="Task title"]').type("RakhiTaskImp")
        cy.get('[ng-reflect-name="isImportant"] input').click({force: true})
        cy.contains("Add").click()
        cy.contains("Important Tasks").click()
        cy.get('app-important-tasks-page').contains('RakhiTaskImp').should('exist')
        cy.get('app-nav-toolbar').contains('Important Tasks').should('exist')
        cy.url().should('include','/important-tasks')
    })
  })
