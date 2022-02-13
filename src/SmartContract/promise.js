import web3 from './web3';
import abi from './build/promise.json';

const instance = new web3.eth.Contract(
	abi,
	'0xD53620501503B430020d883200D954EBd3b2A83C'
);

export default instance;