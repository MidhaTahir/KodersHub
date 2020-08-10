const { expect } = require("chai");
const resnap = require("resnap")(); // resnap to clear require cache

describe("Adder function", () => {
  beforeEach(resnap); // clearing require() cache

  it("Test # 1", () => {
    const program = require("../program");
    expect(program(10, 15)).to.equal(25);
  });

  it("Test # 2", () => {
    const program = require('../program');
    expect(program(100, 200)).to.equal(300);
  })
});
