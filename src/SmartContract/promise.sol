// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Promise{
    string[] name;
    string[] mp;
    uint256[] date;

    function makePromise(string memory n, string memory p)public{
        name.push(n);
        mp.push(p);
        date.push(block.timestamp);
    }

    function showPromises() public view returns(string[] memory,string[] memory, uint256[] memory){
        return (
            name,
            mp,
            date
        );
    }
}