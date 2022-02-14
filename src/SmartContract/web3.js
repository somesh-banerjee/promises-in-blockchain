import Web3 from 'web3';
require('dotenv').config()
let web3;

if(typeof window !== 'undefined' && window.web3 !== undefined){
	console.log("normal");
	console.log(window.web3 !== 'undefined');
	web3 = new Web3(window.web3.currentProvider);
} else {
	console.log("not metamask");
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/' + process.env.INFURA_KEY
		//'http://127.0.0.1:7545'
	);
	web3 = new Web3(provider);
}

export default web3;