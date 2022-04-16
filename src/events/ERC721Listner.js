import config from '../config';
import ERC721Interface from '../abi/ERC721.json';
import Web3 from "web3";
let web3;
let ERC721Contract;
let contractAddress;
import {getListOfSubscriber} from '../firebase/firestore';
import { sendNotification} from '../firebase/notifier';


export default class ERC721 {
    constructor(ws, contract) {
        web3 = new Web3(ws);
        ERC721Contract = new web3.eth.Contract(ERC721Interface.abi, contract);
        contractAddress = contract;
        this.init();
    }

    async notifyToSubscriber(title, message) {
        const subscribers = await getListOfSubscriber(contractAddress);
        console.log("subscribers" + subscribers);
        subscribers.forEach((sub) => {
            console.log(sub);
            sendNotification(sub.token, title, message);
        })
    }

    init() {
        ERC721Contract.events.allEvents({})
            .on('data', (event) => {
                console.log('ERC721Contract allEvents triggered' + JSON.stringify(event));
                this.notifyToSubscriber(event.event, 'from address : ' + event.address + 'and the tx Hash is:' + event.transactionHash );

            })
            .on('ERC721Contract error', console.log)


        ERC721Contract.events.Approval({})
            .on('data', (event) => {

                console.log('ERC721Contract Approval event triggered' + JSON.stringify(event));
            })
            .on('ERC721Contract error', console.log)

        ERC721Contract.events.ApprovalForAll({})
            .on('data', (event) => {
                console.log('ERC721Contract ApprovalForAll event triggered' + JSON.stringify(event));
            })
            .on('ERC721Contract error', console.log)

        ERC721Contract.events.Transfer({})
            .on('data', (event) => {
                console.log('ERC721Contract Transfer event triggered' + JSON.stringify(event));
            })
            .on('ERC721Contract error', console.log)
    }

}

