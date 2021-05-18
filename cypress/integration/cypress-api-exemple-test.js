describe("ServerRest", () => {
  it("get all products", () => {
    cy.request(`produtos`).then((response) => {
      cy.log(response);
    });
  });
  it("get all products", () => {
    cy.request(`carrinhos`).then((response) => {
      cy.log(response);
    });
  });
});
