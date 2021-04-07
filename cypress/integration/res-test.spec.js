describe('Turing Cafe Reservations', () => {
  beforeEach(() => cy.visit('localhost:3000'))
  it('should show a list of booked servations on load', () => {
    cy.get('.reservations').find('article').first().contains('Christie')
  })

  it('should allow a user to type into the reservation form inputs', () => {
    cy.get('.name').type('Jared').should('have.value', 'Jared');
    cy.get('.date').type('12/10').should('have.value', '12/10');
    cy.get('.time').type('7:30').should('have.value', '7:30');
    cy.get('.number').type('5').should('have.value', 5);
  })

  it('should allow a user to submit their new reservation', () => {
    cy.get('.name').type('Jared');
    cy.get('.date').type('12/10');
    cy.get('.time').type('7:30');
    cy.get('.number').type('5');
    cy.get('form').find('button').click()
    cy.get('.reservations').find('article').last().contains('Jared')
  })

  it('should not create a new res if inputs are missing or incorrect', () => {
    cy.get('.name').should('have.attr', 'required')

    cy.get('.name').type('Jared');
    cy.get('.date').type('12/10');
    cy.get('.time').type('7:30');
    cy.get('.number').type('hello');
    cy.get('form').find('button').click()

    cy.get('p').first().should('contain', 'Need a number for guests')
  }) 
})