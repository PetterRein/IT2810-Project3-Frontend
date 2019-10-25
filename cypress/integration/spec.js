describe('Test Search', () => {
  it('Visits our site and search for something', () => {
    cy.visit('it2810-40.idi.ntnu.no/prosjekt3')
    cy.wait(1000)
    cy.contains("Home")
    cy.contains("WordCloud")
    cy.contains("Sort by field:")
    cy.contains("Sort direction:")
    cy.contains("Title")
    cy.get('input[name="search"]').type('Termi')
    cy.wait(200)
    cy.get('input[name="search"]').type('nator')
    cy.wait(200)
    cy.contains("Terminator: Dark Fate")
  })

})

describe('Test Site contains', () => {
  it('Visits our site and check that things renders', () => {
    cy.visit('it2810-40.idi.ntnu.no/prosjekt3')
    cy.wait(1000)
    cy.contains("Home")
    cy.contains("WordCloud")
    cy.contains("Sort by field:")
    cy.contains("Sort direction:")
    cy.contains("Title")
    cy.contains("Score Limit")
    cy.contains("Search")
  })
})

describe('Test Site Sort', () => {
  it('Visits our site and sort movies', () => {
    cy.visit('it2810-40.idi.ntnu.no/prosjekt3')
    cy.wait(200)
    cy.get('input[name=Title]').check() 
    cy.get('input[name=ASC]').check()
    cy.wait(200)
    cy.contains("2001: A Space Odyssey")
  })
})

describe('Test Site Sort and Filter', () => {
  it('Visits our site and sort movies and check vote_average', () => {
    cy.visit('it2810-40.idi.ntnu.no/prosjekt3')
    cy.wait(200)
    cy.get('input[name=Title]').check() 
    cy.get('input[name=ASC]').check()
    cy.wait(200)
    cy.contains("2001: A Space Odyssey")
    cy.get('input[name=6]').check()
    cy.contains("Airplane!")
  })
})