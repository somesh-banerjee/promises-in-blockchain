import web3 from './web3';
import abi from './build/promise.json';

const instance = new web3.eth.Contract(
	abi,
	//process.env.D_SMART_CONTRACT_ADD
	'0x7C7530975E3b2D424c31dcdFf32a56bA08EAE197' //Ganache
);

export default instance;