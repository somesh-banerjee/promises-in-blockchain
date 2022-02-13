import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && window.ethereum !== 'undefined'){
	web3 = new Web3(window.ethereum.currentProvider);
} else {
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/0087327b8d6e452a890953f7ce0986b4'// + process.env.INFURA_KEY
	);
	web3 = new Web3(provider);
}

export default web3;