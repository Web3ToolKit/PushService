import config from '../config';
import EventModuleCoreArtifact from '../abi/NotificationModuleCore.json';
import Web3 from "web3";
const web3 = new Web3(config.socketRpcEndpoint);
let NotificationModuleContract;
let contractAddress;


export default class NotificationModuleListener {
    constructor(contract) {
        NotificationModuleContract = new web3.eth.Contract(EventModuleCoreArtifact.abi, contract);
        contractAddress = contract;
        this.init();
    }

    init() {
        NotificationModuleContract.events.allEvents({})
        .on('data', (event) => {
            console.log('EventModuleCreated event triggered');
        })
        .on('EventModuleCreated error', console.log);
        NotificationModuleContract.events.ChannelCreated({})
            .on('data', (event) => {
                console.log('EventModuleCreated event triggered' + JSON.stringify(event));
            })
            .on('EventModuleCreated error', console.log);

        NotificationModuleContract.events.SubscribedToChannel({})
            .on('data', (event) => {
                console.log('SubscribedToChannel event triggered' + JSON.stringify(event));
            })
            .on('SubscribedToChannel error', console.log);


        NotificationModuleContract.events.UnubscribedChannel({})
            .on('data', (event) => {
                console.log('UnubscribedChannel event triggered' + JSON.stringify(event));
            })
            .on('UnubscribedChannel error', console.log);


        NotificationModuleContract.events.UserInfoUpdated({})
            .on('data', (event) => {
                console.log('UserInfoUpdated event triggered' + JSON.stringify(event));
            })
            .on('UserInfoUpdated error', console.log);
    }
}
