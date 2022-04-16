'use strict';

const contractAddress = process.env.contractAddress || '0x86C05e449ECF4B749EF8A4Bca864fFcF3aA4815B';
const rpcEndpoint = process.env.rpcEndpoint || 'https://mainnet.infura.io/v3/3ac65935c854491fbb57acff35b8d39b';
const socketRpcEndpoint = process.env.rpcEndpoint || 'wss://mainnet.infura.io/ws/v3/3ac65935c854491fbb57acff35b8d39b';
const gasLimit = 3000000;

module.exports = {
    contractAddress,
    rpcEndpoint,
    socketRpcEndpoint,
    gasLimit
};