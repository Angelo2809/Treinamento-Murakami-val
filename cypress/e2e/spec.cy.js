describe('All system', () => {
  it('passes', () => {
    cy.visit('../../index.html')
    // cy.get('[id$=listAll]').click()
    // cy.wait(2500)
    // cy.get('[id$=clear]').click()
    // cy.wait(2500)
    // cy.get('[id$=id_user]').type("1")
    // cy.get('[id$=listOne]').click()
    // cy.get('[id$=contents]').should('have.text', "Leanne Graham")

    cy.get('[id=name_user]').type("Bruna")
    cy.get('[id=nickname_user]').type("Real")
    cy.wait(1000)
    cy.get('[id$=addUser]').click()

    cy.get('[id=name_user]').should("have.text", '')
    cy.get('[id=nickname_user]').should("have.text", '')
    cy.wait(3000)
    cy.get('[id$=listAll]').click()
    cy.wait(1500)
  })
})