// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract Promise{
    mapping(address => string) name;
    mapping(address => string[]) mp;
    address[] promiseMakers;

    function makePromise(string memory n, string memory p)public{
        if(bytes(name[msg.sender]).length==0){
            name[msg.sender] = n;
            promiseMakers.push(msg.sender);
        }
        mp[msg.sender].push(p);
    }

    function showPromises(address u) public view returns(string memory,string[] memory){
        return (
            name[u],
            mp[u]
        );
    }

    function showPMakers() public view returns(address[] memory){
        return promiseMakers;
    }
}