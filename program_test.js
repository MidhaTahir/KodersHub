
  const { expect } = require("chai");
  const resnap = require("resnap")();
  describe("Adder function",()=>{beforeEach(resnap),it("Test # 1",()=>{const e=require("./program");expect(e(10,15)).to.equal(25)}),it("Test # 2",()=>{const e=require("./program");expect(e(100,200)).to.equal(300)})});