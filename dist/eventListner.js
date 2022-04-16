'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _web3EthContract = require('web3-eth-contract');

var _web3EthContract2 = _interopRequireDefault(_web3EthContract);

var _EventModuleCore = require('./abi/EventModuleCore.json');

var _EventModuleCore2 = _interopRequireDefault(_EventModuleCore);

var _ERC = require('./abi/ERC721.json');

var _ERC2 = _interopRequireDefault(_ERC);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_web3EthContract2.default.setProvider(_config2.default.socketRpcEndpoint);
const contract = new _web3EthContract2.default(_EventModuleCore2.default.abi, _config2.default.contractAddress);
// retieve the contractaddress from event contract
// const ERC721Contract = new Contract(ERC721Interface.abi, '0x4d7754958752ff93d3A3D8b5dE1a91DCdBd29FeA');

contract.events.EventModuleCreated({}).on('data', event => {
    console.log('EventModuleCreated event triggered' + JSON.stringify(event));
}).on('EventModuleCreated error', console.log);

contract.events.SubscribedToChannel({}).on('data', event => {
    console.log('SubscribedToChannel event triggered' + JSON.stringify(event));
}).on('SubscribedToChannel error', console.log);

contract.events.UnubscribedChannel({}).on('data', event => {
    console.log('UnubscribedChannel event triggered' + JSON.stringify(event));
}).on('UnubscribedChannel error', console.log);

contract.events.UserInfoUpdated({}).on('data', event => {
    console.log('UserInfoUpdated event triggered' + JSON.stringify(event));
}).on('UserInfoUpdated error', console.log);

// ERC721Contract.events.Approval({})
// .on('data', (event) => {
//     console.log('ERC721Contract event triggered' + JSON.stringify(event));
// })
// .on('ERC721Contract error', console.log)

// ERC721Contract.events.ApprovalForAll({})
// .on('data', (event) => {
//     console.log('ERC721Contract event triggered' + JSON.stringify(event));
// })
// .on('ERC721Contract error', console.log)

// ERC721Contract.events.Transfer({})
// .on('data', (event) => {
//     console.log('ERC721Contract event triggered' + JSON.stringify(event));
// })
// .on('ERC721Contract error', console.log)