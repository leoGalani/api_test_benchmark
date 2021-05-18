const fetch = require("node-fetch");

const url = "https://serverest.dev/";

describe("ServerRest", () => {
  test("get all products", async () => {
    const rawResponse = await fetch(url + "produtos");
    const produtos = await rawResponse.json();
    expect(produtos.quantidade).toBe(3);
  });
  test("get all carinhos", async () => {
    const rawResponse = await fetch(url + "carrinhos");
    const carinhos = await rawResponse.json();
    expect(carinhos.quantidade).toBe(1);
  });
});
