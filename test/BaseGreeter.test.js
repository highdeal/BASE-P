import { expect } from "chai";
import hre from "hardhat";

describe("BaseGreeter", function () {
  let greeter, owner, otherAccount;

  beforeEach(async function () {
    [owner, otherAccount] = await hre.ethers.getSigners();
    const BaseGreeter = await hre.ethers.getContractFactory("BaseGreeter");
    greeter = await BaseGreeter.deploy("Hello from Base!");
  });

  it("Should deploy with correct initial greeting", async function () {
    expect(await greeter.greet()).to.equal("Hello from Base!");
  });

  it("Should return the correct owner", async function () {
    expect(await greeter.owner()).to.equal(owner.address);
  });

  it("Should allow owner to update greeting", async function () {
    await greeter.setGreeting("GM from Base!");
    expect(await greeter.greet()).to.equal("GM from Base!");
  });

  it("Should emit GreetingUpdated event on change", async function () {
    await expect(greeter.setGreeting("New greeting"))
      .to.emit(greeter, "GreetingUpdated")
      .withArgs("Hello from Base!", "New greeting", owner.address);
  });

  it("Should revert if non-owner tries to update greeting", async function () {
    await expect(
      greeter.connect(otherAccount).setGreeting("Hack!")
    ).to.be.revertedWith("Not the owner");
  });
});
