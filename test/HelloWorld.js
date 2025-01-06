const { expect } = require("chai");

describe("HelloWorld contract", function() {
    it("배포 후 message 값이 제대로 설정되어야 한다.", async function() {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy("Hello, Hardhat!");
        await helloWorld.waitForDeployment();

        expect(await helloWorld.message()).to.equal("Hello, Hardhat!");
    });

    it("setMessage 함수로 message 값이 변경되어야 한다.", async function() {
        const HelloWorld = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await HelloWorld.deploy("Initial Message");
        await helloWorld.waitForDeployment();

        await helloWorld.setMessage("New Message");
        expect(await helloWorld.message()).to.equal("New Message");
    });
});