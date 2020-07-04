const chai = require("chai");
const resnap = require("resnap")(); // resnap to clear require cache

describe("Adder function", () => {
  beforeEach(resnap); // clearing require() cache

  it("Test # 1", () => {
    const program = require("./program");
    chai.expect(program(10, 15)).to.equal(25);
  });
});
