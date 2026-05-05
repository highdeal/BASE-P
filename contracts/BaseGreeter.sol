// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract BaseGreeter {
    string private greeting;
    address public owner;

    event GreetingUpdated(string oldGreeting, string newGreeting, address updatedBy);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(string memory _greeting) {
        greeting = _greeting;
        owner = msg.sender;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _newGreeting) public onlyOwner {
        emit GreetingUpdated(greeting, _newGreeting, msg.sender);
        greeting = _newGreeting;
    }

    function getInfo() public view returns (string memory, address) {
        return (greeting, owner);
    }
}
