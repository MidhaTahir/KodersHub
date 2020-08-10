const chai = require("chai");
const resnap = require("resnap")(); // resnap to clear require cache

describe("Subtracter function", () => {
  beforeEach(resnap); // clearing require() cache

  it("Test # 1", () => {
    const program = require("../program");
    chai.expect(program(15, 10)).to.equal(5);
  });

  it("Test # 2", () => {
    const program = require("../program");
    chai.expect(program("a", 'b')).to.throw();
  });
});
