import web3 from './web3';
import abi from './build/promise.json';
require('dotenv').config()

const instance = new web3.eth.Contract(
	abi,
	//process.env.REACT_APP_SMART_CONTRACT_ADD
	//'0x7C7530975E3b2D424c31dcdFf32a56bA08EAE197' //Ganache
	'0xDf375Ad9daC734e6145Bec016754c6Ac2443A898' //Rinkeby
);

export default instance;