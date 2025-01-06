# solidity-test
Remix Web IDE를 이용해도 스마트 컨트랙트 작성 및 테스트가 가능하지만 hardhat을 이용한 방법은 좀 더 복잡한 구성을 비교적 자유롭게 작성하고 로컬 환경에서 직접 테스트 할 수 있는 이점이 있음.

## 필요 도구
- CLI 도구 (Bash or Zsh)
- nodejs

## 초기 세팅
```
$ npm init -y
$ npm install --save-dev hardhat
$ npx hardhat
```

## 디렉토리 구조
- contracts/: 솔리디티 스마트 컨트랙트 파일(.sol) 보관
- scripts/: 배포, 유틸리티 스크립트 등
- test/: Mocha/Chai를 이용하는 테스트 코드
- hardhat.config.js: 컴파일러 버전, 네트워크 설정 등 Hardhat 설정

## OpenZeppelin
- @openzeppelin/contracts

## 컴파일
```
$ npx hardhat compile
```

## 테스트
```
$ npx hardhat test
```

## 로컬 노드 구동
- 구동하면 노드 구동 및 테스트용 어카운트 20개 자동 생성
```
$ npx hardhat node
```
```
Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

Account #1: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 (10000 ETH)
Private Key: 0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d

...

Account #19: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC (10000 ETH)
Private Key: 0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a
```

## 로컬 환경 배포 실행
```
$ npx hardhat run scripts/deploy.js --network localhost
```

## 콘솔 REPL 사용
```
$ npx hardhat console --network localhost
```

## 테스트넷 배포
- /hardhat.config.js
```
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/yourAlchemyKey",
      accounts: ["0xPRIVATE_KEY_..."]
    },
  },
};
```
```
$ npx hardhat run scripts/deploy.js --network sepolia
```
