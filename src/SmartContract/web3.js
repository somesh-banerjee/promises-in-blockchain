import Web3 from 'web3';
require('dotenv').config()
let web3;

if(typeof window !== 'undefined' && window.web3 !== undefined){
	web3 = new Web3(window.web3.currentProvider);
} else {
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/' + process.env.REACT_APP_ADDINFURA_KEY
		//'http://127.0.0.1:7545'
	);
	web3 = new Web3(provider);
}

export default web3;