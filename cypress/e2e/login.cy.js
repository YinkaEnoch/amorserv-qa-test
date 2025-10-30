describe("Login Functionality Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/login.html");
  });

  it("should login successfully with valid credentials", () => {
    cy.get("#username").type("user");
    cy.get("#password").type("password");
    cy.get("#loginButton").click();
    cy.get("#successMessage").should("be.visible");
    cy.get("#errorMessage").should("not.be.visible");
  });

  it("should fail login with invalid credentials", () => {
    cy.get("#username").type("wronguser");
    cy.get("#password").type("wrongpass");
    cy.get("#loginButton").click();
    cy.get("#errorMessage").should("be.visible");
    cy.get("#successMessage").should("not.be.visible");
  });

  it("should show error message when login fails", () => {
    cy.get("#username").type("wronguser");
    cy.get("#password").type("wrongpass");
    cy.get("#loginButton").click();
    cy.get("#errorMessage").should("contain", "Invalid credentials");
  });
});
