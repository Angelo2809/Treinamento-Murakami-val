describe('All system', () => {
  it('passes', () => {
    cy.visit('../../index.html')
    cy.get('[id$=listAll]').click()
    cy.wait(2500)
    cy.get('[id$=clear]').click()
    cy.wait(2500)
    cy.get('[id$=id_user]').type("1")
    cy.get('[id$=listOne]').click()
    cy.get('[id$=contents]').should('have.text', "Leanne Graham")
  })
})