const hre = require("hardhat");

async function main() {
    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy("Hi there!");
    await helloWorld.waitForDeployment();

    console.log("HelloWorld deployed to: ", await helloWorld.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
})