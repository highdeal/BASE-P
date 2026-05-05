import hre from "hardhat";

async function main() {
  console.log("Deploying BaseGreeter to", hre.network.name, "...");
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  const BaseGreeter = await hre.ethers.getContractFactory("BaseGreeter");
  const greeter = await BaseGreeter.deploy("Hello from Base!");
  await greeter.waitForDeployment();

  const address = await greeter.getAddress();
  console.log("BaseGreeter deployed to:", address);
  console.log("Explorer:", `https://${hre.network.name === "base" ? "" : "sepolia."}basescan.org/address/${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
