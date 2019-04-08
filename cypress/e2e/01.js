// Now we want to interact with the app. The most basic way to interact with
// our app is to use the built-in `get` command from Cypress.

// 📜 In this exercise you'll be using the following new commands:
// - get: https://docs.cypress.io/api/commands/get.html
// - click: https://docs.cypress.io/api/commands/click.html

// 🦉 In the cypress browser, there is an icon next to the URL that says
// "Open Playground Selector" when you hover over it. Use that to know what
// commands you can issue to select certain elements.

describe('anonymous calculator', () => {
  it('has the right title', () => {
    cy.visit('/')
      .title()
      .should('equal', 'React Calculator')
  })

  // 🐨 Add another test here called "can make calculations" that will:
  // 1. Visit the app
  // 2. Get the 1 and click it
  // 3. Get the + and click it
  // 4. Get the 2 and click it
  // 5. Get the = and click it
  // 6. Get the displayed result and assert that it should have.text '3'
})

// 💯 This project has cypress-testing-library installed. Now that you've got
// some really weird class name selectors in your test, go ahead and try to
// use cypress-testing-library instead
// 📜 https://testing-library.com/cypress
