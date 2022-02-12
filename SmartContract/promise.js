import web3 from './web3';
import abi from './build/promise.json';

const instance = new web3.eth.Contract(
	abi,
	process.env.SMART_CONTRACT_ADD
);

export default instance;