// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20Test is ERC20 {
    uint public constant INITIAL_SUPPLY = 120000;

    constructor() ERC20("Test Token", "TT") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}